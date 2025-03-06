// import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

// const { ScreenshotModule } = NativeModules;

// // Check if the module is properly linked
// if (!ScreenshotModule) {
//   console.warn('⚠️ ScreenshotModule is not linked properly.');
// }

// // Create an event emitter
// const screenshotEmitter = ScreenshotModule ? new NativeEventEmitter(ScreenshotModule) : null;

// export default {
//   ...ScreenshotModule,

//   addListener: (callback: (event: any) => void) => {
//     if (!screenshotEmitter) {
//       console.warn('⚠️ ScreenshotModule event emitter is not available.');
//       return { remove: () => {} }; // Return a dummy remover to avoid crashes
//     }

//     const subscription = screenshotEmitter.addListener('onScreenshotTaken', callback);

//     // Return a function to remove the listener when unmounted
//     return () => {
//       subscription.remove();
//     };
//   },
// };

import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { ScreenshotModule } = NativeModules;

// Check if ScreenshotModule is available
if (!ScreenshotModule) {
  console.warn('⚠️ ScreenshotModule is not linked properly. Ensure that the native module is installed and linked.');
}

// Create an event emitter only for iOS (since Android does not detect screenshots)
const screenshotEmitter = Platform.OS === 'ios' && ScreenshotModule 
  ? new NativeEventEmitter(ScreenshotModule) 
  : null;

const ScreenshotService = {
  ...ScreenshotModule,

  /**
   * Adds a listener for screenshot detection (iOS only).
   * @param callback - Function to execute when a screenshot is detected.
   * @returns A function to remove the event listener.
   */
  addListener: (callback: (event: any) => void) => {
    if (Platform.OS !== 'ios') {
      console.warn('⚠️ Screenshot detection is only available on iOS.');
      return { remove: () => {} };
    }

    if (!screenshotEmitter) {
      console.warn('⚠️ ScreenshotModule event emitter is not available.');
      return { remove: () => {} };
    }

    const subscription = screenshotEmitter.addListener('onScreenshotTaken', callback);

    return () => {
      subscription.remove();
    };
  },
};

export default ScreenshotService;