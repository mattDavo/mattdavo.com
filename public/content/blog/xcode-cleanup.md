Xcode is not just the 7.8GB that it claims to be. It downloads a lot more files and generates many as you use it, so if you’ve been using Xcode for years it’s likely that it’s taking up a lot of space on your machine. Xcode stores all its associated files in `~/Library/Developer` and if you’re not careful it can easily amass to well over 50GB.

## Archives
If you’ve spent a lot of time developing apps you would’ve archived plenty of apps on your way to distribution. Unless you’ve deleted these as you go you’re likely wasting a lot storage keeping these around. Archives are stored in `~/Library/Developer/Xcode/Archives` if you would like to check how much space they are taking up. You can safely delete the archives in this folder if you would like, or you can delete them in Xcode’s Organizer window. However, if you need to be able to debug deployed versions of you app you will need the archive, so only delete archives that you do not intend to debug deployed versions of.

## Derived Data
You’ve certainly come across derived data folder `~/Library/Developer/Xcode/DerivedData` if you’ve spent a lot of time developing in Xcode. As you likely know it’s safe to delete everything in this folder, which can get quite large if not cleared for a long time.

## Devices
Xcode stores most of the data needed for simulator devices in `~/Library/Developer/CoreSimulator/Devices`. You can safely delete all the items in the folder if you like as they can be downloaded again (not all through Xcode), but you’ll likely need to download some again. However you can delete all the unavailable simulators with this terminal command:
```
xcrun simctl delete unavailable
```

For information see [this answer](https://stackoverflow.com/a/34914591).

## iOS DeviceSupport
`~/Library/Developer/Xcode/iOS DeviceSupprt` is used to symbolicate crash logs. Again, it is safe to delete all the contents of the folder however, you should only delete versions of iOS you no longer support or expect to ever have to symbolicate a crash log for.

## Conclusion
Remember to clean out your Developer folder every now and then as it can really take up a crazy amount of storage, which can be quite important if you do your development on a machine with not a heap of storage like me!

## Further Reading
- [Understanding the CoreSimulator folder](https://stackoverflow.com/a/34914591)
- [Good discussion of deletable Xcode files](https://stackoverflow.com/questions/29930198/can-i-delete-data-from-ios-devicesupport)
