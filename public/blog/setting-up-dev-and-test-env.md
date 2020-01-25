After working on Yippy for a while I realised that I needed some more environments. Firstly I wanted to be able to have the latest release of Yippy running on my laptop (so that I could take advantage of all my hard work 😊). This would mean that I needed another instance of Yippy running totally separately which couldn't interfere with any of the save settings or anything. This would mean I would need a new bundle identifier. I also decided that I now wanted a totally fresh version of the app for testing as well, and I didn't want to be able to accidently run the tests on my other versions of the app. So here's how I did it:

First I opened up my Yippy project document and created 3 new configurations:
- A duplicate of Debug called Beta Debug
- A duplicate of Release called Beta Release
- A duplicate of Debug called XCTest
This way I'll be able develop using `Beta Debug` and archive that if I like, and also test totally separately with `XCTest`.

Next I needed to edit the **Build Settings** of my **Yippy Target**. I edited the **Product Bundle Identifier** for my new configurations, setting the bundle id for `Beta Debug` and `Beta Release` to `MatthewDavidson.YippyBeta` and the bundle id for `XCTest` to `MatthewDavidson.YippyXCTest`. This allows me to run totally separate instances of Yippy. But we can't do that yet, we need to create some new Schemes.

To manage the schemes I selected **Product > Schemes > Manage Schemes**. Then I made two duplicates of my original Yippy Scheme and called them **Yippy Beta** and **Yippy XCTest**. Now to configure them.

To configure the original Yippy scheme all I did was remove the **YippyTests** and **YippyUITests** build targets, so that the tests cannot be run on a configuration with the current release's bundle identifier.

Next, to configure the Yippy Beta scheme I basically just changed all build configurations to the beta version, so changing all instances of **Debug** to **Beta Debug** and **Release** to **Beta Release**. Then like with the Yippy scheme I removed the testing build targets.

Finally, for the Yippy XCTest scheme I did the opposite, I kept the testing targets but removed unticked all the non-testing columns: Analyze, Run, Profile, Archive. So, that the testing version can't be run normally or archived.

Now, these new configurations won't work until I update my cocoa pods because it is not set up yet. First I needed to edit the Podfile, specifying the types of configurations like so:
```ruby
project 'Yippy', {
    'Debug' => :debug,
    'Release' => :release,
    'Beta Debug' => :debug,
    'Beta Release' => :release,
    'XCTest' => :debug
}
```

Then do a `pod install` and it was good to go. If I don't make this Podfile modification, if I try to import the pods as testables in the tests it won't be able to.

Now this got the basic idea setup but I did a few more things by editing the Yippy target **Build Settings**. First, I added some flags to the **Active Compilation Conditions** such `BETA` and `XCTEST` so that I set some things up at run time as like. I also set a different app icon for the beta configurations by editing the **Asset Catalog App Icon Set Name**. Then I change the **Product Name** of the beta configurations, but I couldn't change it for the xctest configuration, as then it would change the **Product Module Name** unless I overrid it (which I didn't want to do) and that would mean anywhere I did a `@testable import Yippy` in my unit tests I would have to change to the new product module name, which I didn't think seemed right.

Anyway, that's pretty much what I did, hopefully this documentation will help the next time I want to set something up like this.
