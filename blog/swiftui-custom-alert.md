SwiftUI has been around for a while now and this week I decided to take a good look at it for the first time. I went through the tutorials, then starting playing with some things and seeing what I could make. I decided that I wanted to see if I could make a nice custom popup alert-style view.

It's pretty easy to show Apple's default alert. Simply follow this pattern.

```Swift
import SwiftUI

struct ContentView: View {
    @State private var showingAlert = false

    var body: some View {
        Button(action: {
            self.showingAlert = true
        }) {
            Text("Show Alert")
        }
        .alert(isPresented: $showingAlert) {
            Alert(title: Text("Important message"), message: Text("Learn SwiftUI!"), dismissButton: .default(Text("Done!")))
        }
    }
}
```

And it will look something like this:

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert1.png" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert2.png" style="max-height: 400px;  display: inline-block" />
</div>

Ok, that's great, but what if we wanted to style it more like our own app or use some animations? Well, we're going to have to build that on our own.

Let's start with the basic components. We're going to need a `ZStack` so that we can show our alert over the current view. We'll also need some state to control whether the alert is shown or not (like above). And also something to trigger this alert, let's use a button. Let's do that.

```Swift
import SwiftUI


struct ContentView: View {
    
    @State private var showAlert = false
    
    var body: some View {
        ZStack {
            Button("Show custom alert!") {
                self.showAlert = true
            }
            
            if showAlert {
                Text("Modal")
                    .font(.largeTitle)
            }
        }
    }
}

```

Ok that seems to work, when we tap the button it shows the text, but it doesn't look too great...

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert3.png" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert4.png" style="max-height: 400px;  display: inline-block" />
</div>

Let's make it look a bit better by giving it a distinct title and subtitle, with a background and border.

```Swift
import SwiftUI

struct ContentView: View {
    
    @State private var showAlert = false
    
    var body: some View {
        ZStack {
            Button("Show custom alert!") {
                self.showAlert = true
            }
            
            if showAlert {
                VStack {
                    Text("Title")
                        .font(.largeTitle)
                        .foregroundColor(.white)
                    
                    Text("Subtitle is important too!")
                        .font(.subheadline)
                }
                .padding(10)
                .frame(width: 300)
                .background(
                    RoundedRectangle(cornerRadius: 10)
                        .fill(Color(.systemBackground))
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(Color(.label), lineWidth: 5)))
            }
        }
    }
}
```

Notice how we put all of our content in `VStack` and then add a `RoundedRectange` as a background, with another `RoundedRectange` overlayed for a border. We'll also add some padding, then a width so that our alerts have a consistent width. Now, it's starting to look like an alert:

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert3.png" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert5.png" style="max-height: 400px;  display: inline-block" />
</div>

Now, let's add a dismiss button right after the subtitle. To do this, we need to do is just add a button and have its action set the state back to not showing the alert. We'll also add a bit of styling, to keep the look consistent.

```Swift
Button("Dismiss") {
    self.showAlert = false
}
.foregroundColor(Color(UIColor.systemBackground))
.padding(5)
.padding([.leading, .trailing], 15)
.background(Capsule(style: .circular).foregroundColor(Color(.label)))
.padding(.top, 10)

```

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert6.png" style="max-height: 400px;  display: inline-block" />
</div>

Next, we should make this custom alert more re-usable by putting it into its own `View`. To do this, we have to make a few changes. We need to be able to influence the state of the parent view, by adding a `@Binding` property. We also add properties for the content of the alert, i.e. the title, subtitle and dismiss button. Then we'll end up with something like this:

```Swift
struct Alert: View {
    @Binding var showAlert: Bool
    
    let title: String
    let subtitle: String
    let dismiss: String
    
    var body: some View {
        VStack {
            Text(title)
                .font(.largeTitle)
            
            Text(subtitle)
                .font(.subheadline)
            
            Button(dismiss) {
                self.showAlert = false
            }
            .foregroundColor(Color(UIColor.systemBackground))
            .padding(5)
            .padding([.leading, .trailing], 15)
            .background(Capsule(style: .circular).foregroundColor(Color(.label)))
            .padding(.top, 10)
        }
        .padding(10)
        .frame(width: 300)
        .background(
            RoundedRectangle(cornerRadius: 10)
                .fill(Color(.systemBackground))
                .overlay(
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(Color(.label), lineWidth: 5)))
    }
}
```

In the parent view, we can now add Alerts like so:
```Swift
Alert(
    showAlert: $showAlert,
    title: "Title",
    subtitle: "Subtitle is important too!",
    dismiss: "Dismiss")
```

Ok, great! Now let's add some animation! This isn't **too** hard but there are a few things we need to consider. The first thing we should do is add a transition to the alert with the `.transition(:)` modifier. We can add a fade in and out transition with the `opacity` transition:

```Swift
.transition(AnyTransition.opacity)
```

But that's not it, we need to actually animate the transition. To do this, there are two options. Either add an *implicit* animation to the transition in the modifier or wrap state change in a call to `withAnimation()` known as an *explicit* animation. We could easily add an implicit animation to the transition like so:

```Swift
.transition(AnyTransition.opacity.animation(.easeInOut))
```

However, we don't really want an implicit animation here because changing some state somewhere else the view by trigger the animation and some transition don't work as expected. So the best bet is to use an explicit animation, simply by wrapping the changes of `showAlert` in a call to `withAnimation()`.
```Swift
withAnimation {
    self.showAlert = ...
}
```

**Note: The SwiftUI live preview can be a bit unreliable with animations, so it's best to test with the simulator or on a device.**

With the opacity transition on the left and a slide transition on the right, we get results like this:

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert1.gif" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert2.gif" style="max-height: 400px;  display: inline-block" />
</div>

Notice how the exit transition is not animated? This is because as views come and go, if their `zIndex` is not explicitly defined, it will also change. This is easy to fix, just add a large `zIndex` with the `zIndex()` modifier.

```Swift
.zIndex(.greatestFiniteMagnitude)
```

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert3.gif" style="max-height: 400px;  display: inline-block" />
</div>

Now, let's make the transition a little nicer. Making it jump up from the bottom of the screen. We can do this with the move transition with the bottom edge:

```Swift
.transition(.move(edge: .bottom))
```

However, you'll notice that it doesn't start off the screen, so we need to use the offset transition instead to start it off screen. I found that a y offset of 500 worked well on iPhone.

```Swift
.transition(AnyTransition.offset(x: 0, y: 500))
```

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert4.gif" style="max-height: 400px;  display: inline-block" />
</div>

Now let's add a bit of bounce to the showing of the alert. We can do this using the `spring()` animation. If we use the default `spring()` like so:

```Swift
withAnimation(.spring()) {
    self.showAlert = true
}
```

We get this result:

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert5.gif" style="max-height: 400px;  display: inline-block" />
</div>

It's not quite what we want, we want more speed and bounce. We'll do this by providing values to the `.spring()` function that are different to the default. We decrease the `response` making the animation faster, and decrease the `dampingFraction` making the animation bounce up and down more. You can read more about choosing the spring values and all SwiftUI animation [here](https://www.raywenderlich.com/5815412-getting-started-with-swiftui-animations#toc-anchor-012).

With this use of spring:

```Swift
.spring(response: 0.3, dampingFraction: 0.6)
```

We get a more bouncy animation:

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert6.gif" style="max-height: 400px;  display: inline-block" />
</div>

Awesome! We've now got a pretty nice custom alert. Where to go from here? Well, there's plenty more functionality you can add to you custom alert, like more button options, animation options, text entry, shadow, etc. A nice simple extension is to add a color property to give alerts different looks, for example, like errors, success or warnings.

<div style="margin:auto; text-align:center">
<img src="/images/swiftui-custom-alert7.png" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert8.png" style="max-height: 400px;  display: inline-block" />
<img src="/images/swiftui-custom-alert9.png" style="max-height: 400px;  display: inline-block" />
</div>

Full source code:
```Swift
import SwiftUI

struct ContentView: View {
    
    @State private var showAlert = false
    
    var body: some View {
        ZStack {
            Color(.systemBackground).edgesIgnoringSafeArea(.all)
            
            Button("Show custom alert!") {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.6)) {
                    self.showAlert = true
                }
            }
            
            if showAlert {
                Alert(
                    showAlert: $showAlert,
                    title: "Title",
                    subtitle: "Subtitle is important too!",
                    dismiss: "Dismiss",
                    color: Color(.label))
                    .shadow(color: Color(UIColor.label.withAlphaComponent(0.2)), radius: 15, x: 0, y: 0)
                    .transition(AnyTransition.offset(x: 0, y: 500))
                    .zIndex(.greatestFiniteMagnitude)
            }
        }
    }
}

struct Alert: View {
    @Binding var showAlert: Bool
    
    let title: String
    let subtitle: String
    let dismiss: String
    let color: Color
    
    var body: some View {
        VStack {
            Text(title)
                .font(.largeTitle)
            
            Text(subtitle)
                .font(.subheadline)
            
            Button(dismiss) {
                withAnimation {
                    self.showAlert = false
                }
            }
            .foregroundColor(Color(UIColor.systemBackground))
            .padding(5)
            .padding([.leading, .trailing], 15)
            .background(Capsule(style: .circular).foregroundColor(self.color))
            .padding(.top, 10)
        }
        .padding(10)
        .frame(width: 300)
        .background(
            RoundedRectangle(cornerRadius: 10)
                .fill(Color(.systemBackground))
                .overlay(
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(self.color, lineWidth: 5)))
    }
}
```

