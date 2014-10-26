lastfmdata
==========
An application that displays Last.FM data - specifically
- most played albums
- most played tracks
- recently played tracks
with the data based on API calls into last.fm to read scrobble data

Live site
=========
The application can be seen running at http://aidanwhiteley.com/lastfmmusic

Background
==========
This application was built to try out some client side technologies. Specifically
- angular.js
- Yeoman
- Bower
- Grunt

As it is the first time I've used these tools this project is unlikely to be an example of best practise.

Configuring the application
===========================
To use the application, edit the file app/scripts/app.js and enter
- your own last.fm userid
- your last.fm api key (available for free from the last.fm site)
- There are other optional settigs in app.js - see the comments in the file for more details

Build
=====
To build the application, you need to
- Install Node and NPM. Check the install with: node --version && npm --version
- Install Yeoman (which will also install Bower and Grunt). Install with: npm install -g yo
- Check the install with: yo --version && bower --version && grunt --version
- Get the node dependencies added to /node_modules with: npm install
- Get the application dependencies added to /bower_components with: bower install
- Install the Yeoman angular "generator" with: npm install --global generator-angular

There seem to be some outstanding problems with the Yeoman angular generator. If, when running, "grunt test" you see "Warning: Task "karma" not found. Use --force to continue" then see https://github.com/yeoman/generator-angular/issues/515. The fix I used is to install the following manually: 
- npm install grunt-karma --save-dev
- npm install karma-phantomjs-launcher --save-dev
- npm install karma-jasmine --save-dev

Run
===
- To run the application with a local webserver use: grunt serve
- To build the production version of the application use: grunt serve:dist

Tests
=====
While a strong believer in TDD, the time I find it hard to test first is when I am first learning a technology/lanaguage/framework. It is hard to write the tests first when you don't yet know what you want to build or how. This is a rather longer winded way of saying that while "grunt test" will happily report all tests as passing, the tests don't yet do anything useful. 


Acknowledgements
===============
This project was started after seeing the great UI, by Alex Cash, in his jQuery plugin for viewing last.fm data. This is available at https://github.com/alexcash/jQuery.last.fm under the MIT / GPL dual license. The CSS (lfm.css) from that project has been re-used for the "top albums" UI in this project. The rest of this project is all new Angular.js based code.

License
=======
&copy; Aidan Whiteley
This project is licensed under the Apache 2 license (noting that lfm.css file was developed by Alex Cash and released under a dual MIT / GPL license)
