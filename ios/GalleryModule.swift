//
//  GalleryModule.swift
//  MyDeviceInfoApp
//
//  Created by Sandip Jadhav on 06/03/25.
//

import Foundation
   import React

   @objc(GalleryModule)
   class GalleryModule: NSObject {

       @objc
       func openGallery(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
           // Implementation to open the gallery
           resolve("Gallery opened successfully!")
       }
   }
