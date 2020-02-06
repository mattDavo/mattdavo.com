# UIImageDefaults
## Cocoa Pod

Simple Swift extension for locally saving and loading images with ease.

Check out on [Github](https://github.com/mattDavo/UIImageDefaults).

Example:

```Swift
// Import the package to use with an image
import UIImageDefaults

// Let's say we have an image that we have downloaded from somewhere:
var image = downloadImage()

// If we would like to use this image in our app all the time without having to download it every time,
// we can save it to the UserDefaults.
let userDefaults = UserDefaults()

// We can save (and override) the image to user defaults:
userDefaults.set(value: image, forKey: "myImage")

// and then restore it from user defaults:
image = userDefaults.uiimage(forKey: "myImage")

// Then delete it from the cache, so that we aren't taking up too much room:
userDefaults.removeImage(forKey: "myImage")

// Or remove all images in our cache:
userDefaults.removeImages()
```

