Today I discovered the usefullness of the class variable. I had a protocol with a static variable like so:

```Swift
protocol Example {

    static var identifier: String { get }
}
```

Then I had a bunch of implementations of the protocol (which had other methods), and I wanted to subclass one of them but I couldn't because I implemented the protocol in the first class like this:

```Swift
class BadImplementationA: Example {

    static let identifier = "ExampleA"
}
```

This wouldn't work because you can't override static variables or methods. The solution to this is using a **class** variable which is like a static variable in that it satisfies the protocol, is used like a static variable but it can be overriden. Perfect! The only thing is that it can't be a stored property so we have to make it a computed variable instead, like so:

```Swift
class GoodImplementationA: Example {

    class var identifier: String{
        return "ExampleA"
    }
}
```

Then we can override it similarly:

```Swift
class GoodImplementationB: GoodImplementationA {

    override class var identifier: String{
        return "ExampleB"
    }
}
```

This was really useful as I have a protocol for all my `NSCollectionViewItem`s which handles registering, sizing and setting up cells, which keeps the **data source** and **delegate** implementations a lot lighter.
