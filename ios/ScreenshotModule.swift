import Foundation
import React
import UIKit

@objc(ScreenshotModule)
class ScreenshotModule: RCTEventEmitter {
  
  override init() {
    super.init()
    NotificationCenter.default.addObserver(
      self,
      selector: #selector(screenshotDetected),
      name: UIApplication.userDidTakeScreenshotNotification,
      object: nil
    )
  }

  override class func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc func disableScreenshot() {
    DispatchQueue.main.async {
      if let window = UIApplication.shared.windows.first {
        let textField = UITextField()
        textField.isSecureTextEntry = true
        window.addSubview(textField)
        textField.centerYAnchor.constraint(equalTo: window.centerYAnchor).isActive = true
        textField.removeFromSuperview()
      }
    }
  }

  @objc func enableScreenshot() {
    DispatchQueue.main.async {
      // iOS does not provide a way to re-enable screenshots explicitly
    }
  }

  @objc func screenshotDetected() {
    sendEvent(withName: "onScreenshotTaken", body: nil)
  }

  override func supportedEvents() -> [String] {
    return ["onScreenshotTaken"]
  }
}