After doing some testing I realised that the Yippy window did not translate well to all combinations of Menu bar visibility and dock hiding. So I looked into ways of making it work and after a lot of struggling I finally came up with a solution. First I tried to just make the window full screen width when horizontal and full height when vertical, set the window level to `.screensaver` and boom! Well not so fast, this was a good solution until I realised that blocking the menu bar is a bad idea, as it started to even block my own status bar item.

Ok, next solution. I couldn’t figure out a way to set the level of the window so that it floated above the dock but below the status item. So I decided to go back to the `.floating` level which sits behind the dock with a full window under the dock but doesn’t go any higher than the menu bar. I then used different padding calculated from the `NSScreen.main!.visibleFrame` for different panel positions inside the window so that there was never any of the items obscured by the dock. I thought this was a pretty good solution and looked pretty clean (better than adjusting the whole frame size) but it’s when I discovered the issue of the Menu. I discovered that the Menu of course disappeared when an app goes into full screen mode. So then for left, right and top panel positions there would be a gap between the top of the Yippy window and the top of the screen which is now useable. This obviously looked very weird. So it needed to be fixed.

So this meant that I would need to change the window frame size based on the visibility of the status bar. This led me to finding

```Swift
func NSMenu.menuBarVisible() -> Bool
```

"This will be easy" I thought. Well, no. It’s return value is only affected by the user’s setting in `System Preferences > General > Automatically hide and show the menu bar`. When it’s ticked it returns `false` and when it isn’t it returns `true`. This means that it’s actually no help with my problem as the I can’t update the window size when there’s a temporary change to the menu bar visibility (hovering over a disappearing menu bar and a menu bar disappearing when in full screen mode). Damn. I checked out `NSApp.mainMenu!.menuBarHeight` but it wasn’t any help either, likewise with `NSScreen.main!.visibleFrame`. None of them update, frustrating.

Now I knew there had to be a solution because Apple’s notifications slide out window manages with the problem fine. After a bit of thinking and struggling I realised how they do it, they just have it full height with some padding at the top with a window level such that it is above the dock and below the status bar. Then when they hide and show as they please it can always display correctly. Then after discovering `kCGDockWindowLevel` and `kCGMainMenuWindowLevel` I figured I could just set the window level how I like:

```Swift
Window.Level(rawValue: Int(kCGMainMenuWindowLevel - 1))
```

And more Swiftly:

```Swift
NSWindow.Level(rawValue: NSWindow.Level.mainMenu.rawValue - 1))
```

Since there is a gap of 4 between the `rawValue` of the dock and main menu window levels, my Yippy window would fit nicely in between. This pretty much solved the issue after adding some top padding. The only issue is that unfortunately this reduces some vertical height as you also kind of need some padding below the top label so it doesn’t look too uneven when it’s all exposed.

Done! I thought.

Before releasing I was just checking over some things when I realised that the panel in the top position was not being set under the menu bar. It was being pushed down. After looking into this I noticed that the frame I was passing to

```Swift
window.setFrame(_ frameRect: NSRect, display flag: Bool)
```

was not being set, it was being modified... That led me to

```Swift
func constrainFrameRect(_ frameRect: NSRect, to screen: NSScreen?) -> NSRect
```

a NSWindow method, which according to Apple "Modifies and returns a frame rectangle so that its top edge lies on a specific screen." So by overriding this and just simply returning `frameRect` my problem was solved.

Please let this be the last issue I have with the Yippy window frame. 🙏🏻
