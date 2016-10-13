# how browser works

## why 
- curiosity
- may sometimes help us web developers


## network 
DNS lookup
- limit resouce from minimum number of domain 


Establish connection 
- maximum connections for browser
- so request can get queued (concat assets)
- connection can be reused for request 

[example page with assets from different domain and same ]
[example page with a lot of assets requests ]


Send http request to server 
- cookie (sometimes huge) will be send along 

[example of large cookies]


Download inital content 
- from cache 
- redirect 
- unzip 


## parse, render and run js
- parse html 
  - turn string into objects
  - build the DOM tree

- download css
- parse css
  - turn string into objects
  - build the CSSOM tree
  - this will block the rendering the page 

- render on the screen
  - build the render tree by DOM and CSSOM
  (visusl representation of the page elements, like with, hight and position )
  - fire DOMContentLoaded event 
  - layout (find the exact size and positon for each elements)
  - paint (take the renders the pixels to the screen)

[example of devtools timeline]

- download js
- execution js by JS engine 
  - blocking the DOM parsing (unless async)
  - blocked by CSSOM parsing 

[example of all kinds of blocking]

- window.onload fire after all assets loaded on the page

[example of DOMContentLoaded and Load]




reference: 
https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
http://gent.ilcore.com/2011/05/how-web-page-loads.html
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction
https://www.paulirish.com/2013/webkit-for-developers/
https://www.igvita.com/slides/2012/web-performance-for-the-curious/


