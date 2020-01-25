It is sometimes necessary to mock out library functions for testing when we can't control the value of what is returned but we need to be able to. For example, (for non-Sandbox apps) we can check if the user has given us full control by calling `AXIsProcessTrusted()`. However, we may need to test our app `AXIsProcessTrusted()` when both `true` and `false` are returned. We may even need to test how our app works if this function starts to return a different value whilst our app is running. This was the case for me in Yippy.

Now it doesn't make much sense for our tests to require us to change the app's actual control during testing, so we need another way. This can be done simply with a mock. Let's see how:

First, we need to stop calling `AXIsProcessTrusted()` directly in our app. We can do this by creating a helper class:
```Swift
class AccessControlHelper {

    func isControlGranted() -> Bool {
        return AXIsProcessTrusted()
    }
}
```

By some form of [dependency injection](https://www.swiftbysundell.com/articles/different-flavors-of-dependency-injection-in-swift/) `AccessControlHelper` should be injected into the app globally. Next we create our mock data source for whether the app has been granted full control or not by using a globally accessable `NSPasteboard`:
```Swift
import Cocoa

struct AccessControlMock {

    static let pasteboard = NSPasteboard(name: NSPasteboard.Name(rawValue: "Yippy.UITesting.AccessControl"))
    
    static func setControlGranted(_ access: Bool) {
        pasteboard.declareTypes([.string], owner: nil)
        let str = access ? "true" : "false"
        pasteboard.setString(str, forType: .string)
    }
    
    static func isControlGranted() -> Bool {
        return pasteboard.string(forType: .string) == "true"
}
```

Now when a testing instance of our app is running we can inject the following `AccessControlHelperMock` in place of `AccessControlHelper`:
```Swift
class AccessControlHelperMock: AccessControlHelper {

    func isControlGranted() -> Bool {
        return AccessControlMock.isControlGranted()()
    }
}
```

Now finally, in our tests we can 'control' the access control:
```Swift
// Start off without control
AccessControlMock.setControlGranted(false)

// Prompt the user to provide control
...

// Simulate the user relinquishing control
AccessControlMock.setControlGranted(false)
```
