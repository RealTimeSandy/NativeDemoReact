import UIKit
import React

@main
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  
  var window: UIWindow?
  var bridge: RCTBridge? // Store bridge instance

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    print("🔥 AppDelegate started!") // Debug log

    // Initialize React Native bridge
    bridge = RCTBridge(delegate: self, launchOptions: launchOptions)
    
    guard let bridge = bridge else {
        fatalError("RCTBridge could not be initialized")
    }

    let rootView = RCTRootView(bridge: bridge, moduleName: "MyDeviceInfoApp", initialProperties: nil)

    // Setup window
    window = UIWindow(frame: UIScreen.main.bounds)
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    window?.rootViewController = rootViewController
    window?.makeKeyAndVisible()

    print("🔥 React Native root view initialized!") // Debug log

    return true
  }

  // MARK: - RCTBridgeDelegate

  func sourceURL(for bridge: RCTBridge) -> URL? {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
}

// MARK: - Screenshot Prevention (Secure Window)
extension UIWindow {
    func enableScreenshotProtection() {
        DispatchQueue.main.async {
            let secureTextField = UITextField()
            secureTextField.isSecureTextEntry = true
            self.addSubview(secureTextField)
            secureTextField.layer.sublayers?.first?.addSublayer(self.layer)
            secureTextField.removeFromSuperview()
        }
    }

    func disableScreenshotProtection() {
        // No need to modify anything, as the secure field is removed instantly
    }
}
