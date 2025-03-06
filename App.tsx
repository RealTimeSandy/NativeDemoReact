// // // import React, { useState, useEffect } from 'react';
// // // import { 
// // //   View, 
// // //   Text, 
// // //   TouchableOpacity, 
// // //   Alert, 
// // //   ActivityIndicator, 
// // //   NativeEventEmitter, 
// // //   NativeModules, 
// // //   Image, 
// // //   StyleSheet, 
// // //   SafeAreaView 
// // // } from 'react-native';
// // // import DeviceInfo from 'react-native-device-info';
// // // import Geolocation from 'react-native-geolocation-service';
// // // import axios from 'axios';
// // // import Icon from 'react-native-vector-icons/FontAwesome';

// // // import ScreenshotModule from './src/comp/ScreenshotModule';


// // // if (!ScreenshotModule) {
// // //   console.error('❌ ScreenshotModule is undefined! Make sure the native module is linked properly.');
// // // } else {
// // //   console.log('✅ ScreenshotModule loaded successfully');
// // // }

// // // const screenshotEmitter = ScreenshotModule && typeof ScreenshotModule.addListener === 'function' 
// // //   ? new NativeEventEmitter(ScreenshotModule) 
// // //   : null;
// // // const App = () => {
// // //   const [isActivated, setIsActivated] = useState(false);
// // //   const [loading, setLoading] = useState(false);
  
// // //   useEffect(() => {
// // //     if (!screenshotEmitter) return;
  
// // //     const subscription = screenshotEmitter.addListener('onScreenshotTaken', () => {
// // //       Alert.alert('Screenshot Detected', 'You took a screenshot.');
// // //     });
  
// // //     return () => subscription.remove();
// // //   }, []);
// // //   const toggleScreenshotProtection = async () => {
// // //     if (!ScreenshotModule) {
// // //       Alert.alert("Error", "Screenshot prevention module is not available.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       if (isActivated) {
// // //         await ScreenshotModule.enableScreenshot();
// // //       } else {
// // //         await ScreenshotModule.disableScreenshot();
// // //       }

// // //       const deviceDetails = {
// // //         os: DeviceInfo.getSystemName(),
// // //         deviceName: await DeviceInfo.getDeviceName(),
// // //         macAddress: await DeviceInfo.getMacAddress(),
// // //         imei: await DeviceInfo.getUniqueId(),
// // //         location: await getLocation(),
// // //         screenshotEnabled: !isActivated,
// // //       };

// // //       const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
// // //       console.log("API Response:", response.data);

// // //       setIsActivated(!isActivated);
// // //     } catch (error) {
// // //       console.error("API Error:", error);
// // //       Alert.alert('Error', 'Something went wrong!');
// // //     }
// // //     setLoading(false);
// // //   };

// // //   const getLocation = async () => {
// // //     return new Promise((resolve) => {
// // //       Geolocation.getCurrentPosition(
// // //         (position) => {
// // //           resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
// // //         },
// // //         (error) => resolve({ error: error.message }),
// // //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// // //       );
// // //     });
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <View style={styles.aligncenter}>
// // //         <Image source={require('./src/assets/logo.png')} style={styles.logo} />  
// // //         <View style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080', width: isActivated ? 100 : 80 }]}>
// // //           <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
// // //             <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
// // //             <Text style={styles.toggleText}>{isActivated ? 'Deactivate' : 'Activate'}</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //         {loading && <ActivityIndicator size="large" color="blue" />}
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { 
// // //     flex: 1, 
// // //   },
// // //   aligncenter: {
// // //     justifyContent: 'center', 
// // //     alignItems: 'center', 
// // //     flex: 1
// // //   },
// // //   logo: {
// // //     marginBottom: 60,
// // //     width: 100, 
// // //     height: 100, 
// // //     resizeMode: 'contain'
// // //   },
// // //   toggleContainer: {
// // //     flexDirection: 'row',
// // //     borderRadius: 100,
// // //     paddingVertical: 5,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     marginVertical: 20
// // //   },
// // //   toggleButton: {
// // //     flexDirection: 'row', 
// // //     alignItems: 'center',
// // //   },
// // //   toggleText: {
// // //     fontSize: 12, 
// // //     marginLeft: 6, 
// // //     color: 'white'
// // //   }
// // // });

// // // export default App;


// // // import React, { useState, useEffect } from 'react';
// // // import { 
// // //   View, 
// // //   Text, 
// // //   TouchableOpacity, 
// // //   Alert, 
// // //   ActivityIndicator, 
// // //   Image, 
// // //   StyleSheet, 
// // //   SafeAreaView 
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // import ScreenshotModule from './src/comp/ScreenshotModule';

// // // const App = () => {
// // //   const [isActivated, setIsActivated] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     const removeListener = ScreenshotModule.addListener(() => {
// // //       Alert.alert('📸 Screenshot Detected', 'You took a screenshot.');
// // //     });

// // //     return () => removeListener(); // Cleanup on unmount
// // //   }, []);

// // //   const toggleScreenshotProtection = async () => {
// // //     setLoading(true);
// // //     try {
// // //       if (isActivated) {
// // //         await ScreenshotModule.enableScreenshot();
// // //       } else {
// // //         await ScreenshotModule.disableScreenshot();
// // //       }
// // //       setIsActivated(!isActivated);
// // //     } catch (error) {
// // //       console.error("Error:", error);
// // //       Alert.alert('⚠️ Error', 'Something went wrong!');
// // //     }
// // //     setLoading(false);
// // //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.aligncenter}>
// //         <Image source={require('./src/assets/logo.png')} style={styles.logo} />  
// //         <View style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080', width: isActivated ? 100 : 80 }]}>
// //           <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
// //             <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
// //             <Text style={styles.toggleText}>{isActivated ? 'Deactivate' : 'Activate'}</Text>
// //           </TouchableOpacity>
// //         </View>
// //         {loading && <ActivityIndicator size="large" color="blue" />}
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // // const styles = StyleSheet.create({
// // //   container: { 
// // //     flex: 1, 
// // //   },
// // //   aligncenter: {
// // //     justifyContent: 'center', 
// // //     alignItems: 'center', 
// // //     flex: 1
// // //   },
// // //   logo: {
// // //     marginBottom: 60,
// // //     width: 100, 
// // //     height: 100, 
// // //     resizeMode: 'contain'
// // //   },
// // //   toggleContainer: {
// // //     flexDirection: 'row',
// // //     borderRadius: 100,
// // //     paddingVertical: 5,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     marginVertical: 20
// // //   },
// // //   toggleButton: {
// // //     flexDirection: 'row', 
// // //     alignItems: 'center',
// // //   },
// // //   toggleText: {
// // //     fontSize: 12, 
// // //     marginLeft: 6, 
// // //     color: 'white'
// // //   }
// // // });

// // // export default App;

// // import React, { useState, useEffect } from 'react';
// // import { 
// //   View, 
// //   Text, 
// //   TouchableOpacity, 
// //   Alert, 
// //   ActivityIndicator, 
// //   NativeEventEmitter, 
// //   NativeModules, 
// //   Image, 
// //   StyleSheet, 
// //   SafeAreaView 
// // } from 'react-native';
// // import DeviceInfo from 'react-native-device-info';
// // import Geolocation from 'react-native-geolocation-service';
// // import axios from 'axios';
// // import Icon from 'react-native-vector-icons/FontAwesome';

// // const { ScreenshotModule } = NativeModules; // Ensure the module is loaded

// // if (!ScreenshotModule) {
// //   console.error('❌ ScreenshotModule is undefined! Make sure the native module is linked properly.');
// // } else {
// //   console.log('✅ ScreenshotModule loaded successfully');
// // }

// // const screenshotEmitter = ScreenshotModule 
// //   ? new NativeEventEmitter(ScreenshotModule) 
// //   : null;

// // const App = () => {
// //   const [isActivated, setIsActivated] = useState(false);
// //   const [loading, setLoading] = useState(false);
  
// //   useEffect(() => {
// //     if (!screenshotEmitter) return;

// //     const subscription = screenshotEmitter.addListener('onScreenshotTaken', () => {
// //       Alert.alert('📸 Screenshot Detected', 'You took a screenshot.');
// //     });

// //     return () => {
// //       subscription?.remove();
// //     };
// //   }, []);

// //   const toggleScreenshotProtection = async () => {
// //     if (!ScreenshotModule) {
// //       Alert.alert("Error", "Screenshot prevention module is not available.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       if (isActivated) {
// //         await ScreenshotModule.enableScreenshot();
// //       } else {
// //         await ScreenshotModule.disableScreenshot();
// //       }

// //       const deviceDetails = {
// //         os: DeviceInfo.getSystemName(),
// //         deviceName: await DeviceInfo.getDeviceName(),
// //         macAddress: await DeviceInfo.getMacAddress(),
// //         imei: await DeviceInfo.getUniqueId(),
// //         location: await getLocation(),
// //         screenshotEnabled: !isActivated,
// //       };

// //       console.log("📡 Sending data to API:", deviceDetails);
// //       const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
// //       console.log("✅ API Response:", response.data);

// //       setIsActivated(!isActivated);
// //     } catch (error) {
// //       console.error("❌ API Error:", error);
// //       Alert.alert('Error', 'Something went wrong!');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const getLocation = async () => {
// //     return new Promise((resolve) => {
// //       Geolocation.getCurrentPosition(
// //         (position) => {
// //           resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
// //         },
// //         (error) => {
// //           console.warn("📍 Location Error:", error.message);
// //           resolve({ error: error.message });
// //         },
// //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //       );
// //     });
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.aligncenter}>
// //         <Image source={require('./src/assets/logo.png')} style={styles.logo} />  

// //         <TouchableOpacity 
// //           style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080' }]} 
// //           onPress={toggleScreenshotProtection}
// //           disabled={loading}
// //         >
// //           {loading ? (
// //             <ActivityIndicator size="small" color="#fff" />
// //           ) : (
// //             <>
// //               <Icon name={isActivated ? 'lock' : 'unlock'} size={20} color={'#ffffff'} />
// //               <Text style={styles.toggleText}>
// //                 {isActivated ? 'Deactivate' : 'Activate'}
// //               </Text>
// //             </>
// //           )}
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { 
// //     flex: 1, 
// //     backgroundColor: '#f8f8f8'
// //   },
// //   aligncenter: {
// //     justifyContent: 'center', 
// //     alignItems: 'center', 
// //     flex: 1
// //   },
// //   logo: {
// //     marginBottom: 60,
// //     width: 100, 
// //     height: 100, 
// //     resizeMode: 'contain'
// //   },
// //   toggleContainer: {
// //     flexDirection: 'row',
// //     borderRadius: 100,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginVertical: 20,
// //     minWidth: 120
// //   },
// //   toggleText: {
// //     fontSize: 14, 
// //     marginLeft: 8, 
// //     color: 'white',
// //     fontWeight: '600'
// //   }
// // });

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   Alert, 
//   ActivityIndicator, 
//   NativeEventEmitter, 
//   NativeModules, 
//   Image, 
//   StyleSheet, 
//   SafeAreaView 
// } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import Geolocation from 'react-native-geolocation-service';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { ScreenshotModule } = NativeModules;

// if (!ScreenshotModule) {
//   console.error('❌ ScreenshotModule is undefined! Make sure the native module is linked properly.');
// } else {
//   console.log('✅ ScreenshotModule loaded successfully');
// }

// const screenshotEmitter = ScreenshotModule 
//   ? new NativeEventEmitter(ScreenshotModule) 
//   : null;

// const App = () => {
//   const [isActivated, setIsActivated] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     if (!screenshotEmitter) return;

//     const subscription = screenshotEmitter.addListener('onScreenshotTaken', () => {
//       Alert.alert('📸 Screenshot Detected', 'You took a screenshot.');
//     });

//     return () => {
//       subscription?.remove();
//     };
//   }, []);

//   const toggleScreenshotProtection = async () => {
//     if (!ScreenshotModule) {
//       Alert.alert("Error", "Screenshot prevention module is not available.");
//       return;
//     }

//     setLoading(true);
//     try {
//       if (isActivated) {
//         await ScreenshotModule.enableScreenshot();
//       } else {
//         await ScreenshotModule.disableScreenshot();
//       }

//       const deviceDetails = {
//         os: DeviceInfo.getSystemName(),
//         deviceName: await DeviceInfo.getDeviceName(),
//         macAddress: await DeviceInfo.getMacAddress(),
//         imei: await DeviceInfo.getUniqueId(),
//         location: await getLocation(),
//         screenshotEnabled: !isActivated,
//       };

//       console.log("📡 Sending data to API:", deviceDetails);
//       const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
//       console.log("✅ API Response:", response.data);

//       setIsActivated(!isActivated);
//     } catch (error) {
//       console.error("❌ API Error:", error);
//       Alert.alert('Error', 'Something went wrong!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getLocation = async () => {
//     return new Promise((resolve) => {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
//         },
//         (error) => {
//           console.warn("📍 Location Error:", error.message);
//           resolve({ error: error.message });
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.aligncenter}>
//         <Image source={require('./src/assets/logo.png')} style={styles.logo} />  

//         <View style={[styles.toggleContainer, { 
//           backgroundColor: isActivated ? '#4a21ed' : '#808080', 
//           width: isActivated ? 100 : 80 
//         }]}>
//           <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
//             <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
//             <Text style={styles.toggleText}>
//               {isActivated ? 'Deactivate' : 'Activate'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {loading && <ActivityIndicator size="large" color="blue" />}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: '#f8f8f8'
//   },
//   aligncenter: {
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     flex: 1
//   },
//   logo: {
//     marginBottom: 60,
//     width: 100, 
//     height: 100, 
//     resizeMode: 'contain'
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     borderRadius: 100,
//     paddingVertical: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20
//   },
//   toggleButton: {
//     flexDirection: 'row', 
//     alignItems: 'center',
//   },
//   toggleText: {
//     fontSize: 12, 
//     marginLeft: 6, 
//     color: 'white'
//   }
// });

// export default App;

// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   Alert, 
//   ActivityIndicator, 
//   NativeEventEmitter, 
//   NativeModules, 
//   Image, 
//   StyleSheet, 
//   SafeAreaView, 
//   Platform
// } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import Geolocation from 'react-native-geolocation-service';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import ScreenshotModule from './src/comp/ScreenshotModule';

// if (!ScreenshotModule) {
//   console.error(' ScreenshotModule is undefined! Make sure the native module is linked properly.');
// } else {
//   console.error('✅ ScreenshotModule loaded successfully');
// }

// const screenshotEmitter = ScreenshotModule && typeof ScreenshotModule.addListener === 'function' 
//   ? new NativeEventEmitter(ScreenshotModule) 
//   : null;

// const App = () => {
//   const [isActivated, setIsActivated] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     if (ScreenshotModule && typeof ScreenshotModule.addListener === 'function') {
//       const emitter = new NativeEventEmitter(ScreenshotModule);
//       const subscription = emitter.addListener('onScreenshotTaken', () => {
//         Alert.alert('Screenshot Detected', 'You took a screenshot.');
//       });
//       return () => subscription.remove();
//     }
//   }, []);


//   useEffect(() => {
//     if (!screenshotEmitter) return;

//     const subscription = screenshotEmitter.addListener('onScreenshotTaken', () => {
//       Alert.alert('Screenshot Detected', 'You took a screenshot.');
//     });

//     return () => subscription.remove();
//   }, []);

//   const toggleScreenshotProtection = async () => {
//     if (!ScreenshotModule) {
//       Alert.alert("Error", "Screenshot prevention module is not available.");
//       return;
//     }

//     setLoading(true);

//     try {
//       if (isActivated) {
//         await ScreenshotModule.enableScreenshot();
//       } else {
//         if (Platform.OS === 'ios') {
//           Alert.alert("Info", "Screenshot prevention is limited on iOS.");
//         }
//         await ScreenshotModule.disableScreenshot();
//       }

//       const deviceDetails = {
//         os: DeviceInfo.getSystemName(),
//         deviceName: await DeviceInfo.getDeviceName(),
//         macAddress: await DeviceInfo.getMacAddress(),
//         imei: await DeviceInfo.getUniqueId(),
//         location: await getLocation(),
//         publicIP: await getPublicIP(),
//         screenshotEnabled: !isActivated,
//       };

//       const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
//       console.log("API Response:", response.data);

//       setIsActivated(!isActivated);
//     } catch (error) {
//       console.error("API Error:", error);
//       Alert.alert('Error', 'Something went wrong!');
//     }
    
//     setLoading(false);
//   };

//   const getLocation = async () => {
//     return new Promise((resolve) => {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
//         },
//         (error) => resolve({ error: error.message }),
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     });
//   };

//   const getPublicIP = async () => {
//     try {
//       const response = await axios.get('https://api64.ipify.org?format=json');
//       return response.data.ip;
//     } catch (error) {
//       console.error('Error fetching IP:', error);
//       return 'N/A';
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.aligncenter}>
//         <Image source={require('./src/assets/logo.png')} style={styles.logo} />  
//         <View style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080', width: isActivated ? 100 : 80 }]}>
//           <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
//             <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
//             <Text style={styles.toggleText}>{isActivated ? 'Deactivate' : 'Activate'}</Text>
//           </TouchableOpacity>
//         </View>
//         {loading && <ActivityIndicator size="large" color="blue" />}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//   },
//   aligncenter: {
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     flex: 1
//   },
//   logo: {
//     marginBottom: 60,
//     width: 100, 
//     height: 100, 
//     resizeMode: 'contain'
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     borderRadius: 100,
//     paddingVertical: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20
//   },
//   toggleButton: {
//     flexDirection: 'row', 
//     alignItems: 'center',
//   },
//   toggleText: {
//     fontSize: 12, 
//     marginLeft: 6, 
//     color: 'white'
//   }
// });

// export default App;

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  Platform 
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenshotService from './src/comp/ScreenshotModule';

const App = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Listen for screenshot events (iOS only)
  useEffect(() => {
    if (Platform.OS === 'ios') {
      const removeListener = ScreenshotService.addListener(() => {
        Alert.alert('Screenshot Detected', 'You took a screenshot.');
      });

      return () => removeListener();
    }
  }, []);

  const toggleScreenshotProtection = async () => {
    if (!ScreenshotService) {
      Alert.alert("Error", "Screenshot prevention module is not available.");
      return;
    }

    setLoading(true);

    try {
      if (isActivated) {
        await ScreenshotService.enableScreenshot();
      } else {
        if (Platform.OS === 'ios') {
          Alert.alert("Info", "Screenshot prevention is limited on iOS.");
        }
        await ScreenshotService.disableScreenshot();
      }

      const deviceDetails = {
        os: DeviceInfo.getSystemName(),
        deviceName: await DeviceInfo.getDeviceName(),
        macAddress: await DeviceInfo.getMacAddress(),
        imei: await DeviceInfo.getUniqueId(),
        location: await getLocation(),
        publicIP: await getPublicIP(),
        screenshotEnabled: !isActivated,
      };
      console.log("API deviceDetails:", deviceDetails);


      const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
      console.log("API Response:", response.data);

      setIsActivated(!isActivated);
    } catch (error) {
      console.error("API Error:", error);
      Alert.alert('Error', 'Something went wrong!');
    }
    
    setLoading(false);
  };

  const getLocation = async () => {
    return new Promise((resolve) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        },
        (error) => resolve({ error: error.message }),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  };

  const getPublicIP = async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return 'N/A';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.aligncenter}>
        <Image source={require('./src/assets/logo.png')} style={styles.logo} />  
        <View style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080', width: isActivated ? 100 : 80 }]}>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
            <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
            <Text style={styles.toggleText}>{isActivated ? 'Deactivate' : 'Activate'}</Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="blue" />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  aligncenter: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  logo: {
    marginBottom: 60,
    width: 100, 
    height: 100, 
    resizeMode: 'contain'
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 100,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  toggleButton: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 12, 
    marginLeft: 6, 
    color: 'white'
  }
});

export default App;