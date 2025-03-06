import Foundation
import React

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
        let secureView = UIView(frame: window.bounds)
        secureView.backgroundColor = .black
        secureView.tag = 999
        window.addSubview(secureView)
      }
    }
  }

  @objc func enableScreenshot() {
    DispatchQueue.main.async {
      if let window = UIApplication.shared.windows.first {
        if let secureView = window.viewWithTag(999) {
          secureView.removeFromSuperview()
        }
      }
    }
  }

  @objc func screenshotDetected() {
    sendEvent(withName: "onScreenshotTaken", body: nil)
  }

  override func supportedEvents() -> [String] {
    return ["onScreenshotTaken"]
  }
}