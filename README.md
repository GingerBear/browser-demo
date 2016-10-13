# how browser works


## why
- curiosity
- may sometimes help us web developers

<img width="941" alt="screen shot 2016-10-13 at 10 09 02 am" src="https://cloud.githubusercontent.com/assets/902357/19352289/554fb388-912d-11e6-81c6-42bdf8b9662b.png">

## network
DNS lookup
- limit resouce from minimum number of domain


Establish connection
- maximum connections for browser
- so request can get queued (concat assets)
- connection can be reused for request

[example](https://bluemercury-prod.myshopify.com/collections/skin-care/products/m61-powerglow-peel)

Send http request to server
- cookie (sometimes huge) will be send along
- hosting static resources on a separate domain


Download content
- from cache
- redirect
- unzip

Download Assets
- css (block rendering)
- js  (block DOM parsing)
- images
- font

example 
- [Render blocked by CSS example](http://localhost:8080/example/blocking-css.html)
- [DOM blocked JS example](http://localhost:8080/example/blocking-css.html)
- [JS blocked by CSS example](http://localhost:8080/example/blocking-css-js.html)
- [preload scan example](http://localhost:8080/example/blocking-css-js.html)


## parse, render (render engine) and run js (js engine)

<img width="666" alt="screen shot 2016-10-13 at 7 46 18 am" src="https://cloud.githubusercontent.com/assets/902357/19347896/3127db8e-9119-11e6-92c6-f98e2863c334.png">


- parse html
  - turn string into objects
  - build the DOM tree
  - fire DOMContentLoaded event

<img width="875" alt="screen shot 2016-10-13 at 7 36 57 am" src="https://cloud.githubusercontent.com/assets/902357/19347640/dbb6f1d6-9117-11e6-8604-a7287547c5de.png">

- parse css
  - turn string into objects
  - build the CSSOM tree
  - this will block the rendering the page

<img width="893" alt="screen shot 2016-10-13 at 7 42 17 am" src="https://cloud.githubusercontent.com/assets/902357/19347792/9d3d2514-9118-11e6-8f59-2f4f4618ac30.png">


- render on the screen
  - build the render tree by DOM and CSSOM (visusl representation of the page elements, like with, hight and position )
  - layout (find the exact size and positon for each elements)
  - paint (render the pixels to the screen)

<img width="908" alt="screen shot 2016-10-13 at 7 34 21 am" src="https://cloud.githubusercontent.com/assets/902357/19347590/921995d8-9117-11e6-9d02-82ae14bbeda5.png">

- [example of devtools timeline]

- run js
  - blocking the DOM parsing (unless async)
  - blocked by CSSOM parsing
  - preload scan

- Load fire after all assets loaded on the page

 - [example of DOMContentLoaded and Load 1: dom ready, waiting for slow load](http://localhost:8080/example/dom-event-1.html)
 - [example of DOMContentLoaded and Load 2: dom blocked](http://localhost:8080/example/dom-event-2.html)




reference:
- https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
- http://gent.ilcore.com/2011/05/how-web-page-loads.html
- https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
- https://www.paulirish.com/2013/webkit-for-developers/
- https://www.igvita.com/slides/2012/web-performance-for-the-curious/


