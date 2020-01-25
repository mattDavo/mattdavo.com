# Masters Shotlink
# Classifying golf shots by pixel colors

As golf’s majors don’t have [shotlink](http://www.shotlink.com/) there is unfortunately no strokes gained statistics at any of the majors. This is unfortunate since [strokes gained](https://www.pgatour.com/news/2016/05/31/strokes-gained-defined.html) is one of the most relied upon statistics in golf as it is more telling than traditional statistics. However, tracking strokes gained statistics requires much more tracking information. Until recently we have never gotten an insight to the US Masters through strokes gained statistics but with Joe Peta’s 3 months of manual work and the [Masters website tracking](http://2018.masters.com/en_US/scores/track/track.html) functionality he was able to provide the first strokes gained statistics for the masters.

In the lead up to the 2019 masters I decided to automate his process by scraping the track functionality (pictured upper left). This was tricky as the feature does not provide the lie of shots in text, only visually. To solve this problem I realised I could create maps of the still images the track feature is displayed on, and use the pixel values to categorise the lie types of shots.

Unfortunately for this project, the Masters came out with brand new track functionality in 2019 which made this project useless. It's a great new feature but unfortunately we can't use this project to get strokes gained statistical insight. So this project is no longer being worked on, but it was a cool problem work on and solve for golf which I am very passionate about.

Read more on [Github](https://github.com/mattDavo/masters-shotlink).

![](/images/masters-shotlink1.jpg)
![](/images/masters-shotlink2.jpg)
