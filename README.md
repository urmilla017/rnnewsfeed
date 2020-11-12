# rnchallenge



App loads RSS from three different sources:
[Google](https://news.google.com/rss)
[CNN](http://rss.cnn.com/rss/edition_world.rss)
[Guardian](http://www.theguardian.com/world/rss)

+ App fetches data from the URLs and
+ Navigation is done with react-native-router-flux
+ Homescreen displays the list of RSS feeds available
+ Clicking on one of them will navigate to the next screen and FlatList will display headline, data and link.
+ Links open in the browser.
+ The news feed is in an order where the lastest news is at the top.
+ The screen has a header with number of articles in that page.

Environment:
OS: macOS Catalina (10.15.1)
Xcode: 11.2
react-native: 0.61.5

Others:
I tried to convert the whole app to use Redux but I ran out of time before I could check it out.
That code is also in there
