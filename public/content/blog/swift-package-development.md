Lately I have spent a lot of time developing [Editor](https://github.com/mattDavo/Editor), and I am using the [Swift Package Manager](https://swift.org/package-manager/) for it's installation. However, I initially had some difficulty in simultaneously developing the package and testing it in a project. Since `Editor` is (mainly) a UI framework, it needs to be integrated into a iOS or macOS project to test it. This is because of both the way Xcode and the Swift Package Manager work.

I was initally trying to have both an Example (/testing) project and the `Editor` package in the same git repository but this isn't possible. Xcode will **not** allow you to have both the root folder of the Xcode project and the swift package to be the same. So if you just try to create a new Swift Package in the Xcode project it will put it in a subfolder. This is not what we want because the `Package.swift` file must be in the root folder, otherwise the repository will not be considered as a Swift Package.

After much experimenting and looking online I determined that having both the package and the example project in the same repository would not be possible. Instead I found a better solution. I would have two repositories; one for the package and one for the example project. Ok sounds good, now the only issue is how do we develop them simultaneously. Well as I found out in a [WWDC video](https://developer.apple.com/videos/play/wwdc2019/410/) Xcode is designed for this.

It is quite simple:

1. Put your swift package in a separate repository and push it remotely.
2. Add your swift package as a remote dependency in your Xcode project.
3. Drag the root folder of your swift package (in Finder) into your Xcode project.
4. Xcode should realise that it is a local version of the remote package you have added and it should disappear from the remotes section.

You will now be able to edit, commit, push, pull, etc. both the package and the example project in the same window, making development as easy as ever. Note, this works great for adding it locally to a single project at a time however it did get a bit clunky when I added the same package locally to two different projects, even when I only had one of them open at once.
