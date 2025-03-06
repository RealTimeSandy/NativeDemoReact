//
//  ScreenshotModuleBridge.m
//  MyDeviceInfoApp
//
//  Created by Sandip Jadhav on 06/03/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(ScreenshotModule, RCTEventEmitter)

RCT_EXTERN_METHOD(disableScreenshot)
RCT_EXTERN_METHOD(enableScreenshot)
RCT_EXTERN_METHOD(addListener:(NSString *)eventName)
RCT_EXTERN_METHOD(removeListeners:(NSInteger)count)

@end