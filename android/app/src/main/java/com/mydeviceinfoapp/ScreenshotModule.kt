package com.yourpackage

import android.app.Activity
import android.view.WindowManager
import android.content.ContentResolver
import android.database.ContentObserver
import android.net.Uri
import android.os.Handler
import android.provider.MediaStore
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class ScreenshotModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    private var screenshotObserver: ContentObserver? = null

    override fun getName(): String {
        return "ScreenshotModule"
    }

    @ReactMethod
    fun disableScreenshot() {
        val activity = currentActivity
        activity?.runOnUiThread {
            activity.window.setFlags(
                WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE
            )
        }
    }

    @ReactMethod
    fun enableScreenshot() {
        val activity = currentActivity
        activity?.runOnUiThread {
            activity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
        }
    }

    @ReactMethod
    fun startScreenshotDetection() {
        val resolver: ContentResolver = reactApplicationContext.contentResolver
        val handler = Handler()
        val uri: Uri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI

        screenshotObserver = object : ContentObserver(handler) {
            override fun onChange(selfChange: Boolean) {
                sendEvent("onScreenshotTaken", null)
            }
        }

        resolver.registerContentObserver(uri, true, screenshotObserver!!)
    }

    @ReactMethod
    fun stopScreenshotDetection() {
        screenshotObserver?.let {
            reactApplicationContext.contentResolver.unregisterContentObserver(it)
        }
    }

    private fun sendEvent(eventName: String, params: WritableMap?) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }
}