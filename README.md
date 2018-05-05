# jdarling-cala-cal-challenge

Hiya, this is my code submission for the CALA code challenge. 

To use: 

1. Clone to your computer
2. Load index.html in your browser
3. Profit!

TODOs:
* Make code more modular. Was going to try to use ES6 modules, but you can run into CORS issues in Chrome when launching locally, and usually requires that you 
server from a static HTTP server. For simplicity I broke into a few JS files.
* Right now, it would be a little challenging to use this within another project without a lot of copy / paste of HTML. If I were
to spend more time on this, I would just have one target DIV in the main HTML file, then move all of the calendar's HTML element creation
to within the main JS file. This gets a little messy in vanilla JS, so I kept at current state for better readability
* Make my 'SuperDate' class immutable. Currently it mutates an internal Date variable when changing months. MomentJS does this and it
drives me nuts!
