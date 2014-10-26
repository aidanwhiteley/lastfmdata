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
There are other optional settigs in app.js - see the comments in the file for more details

Build
=====

To develop the application further, you need to
- Install Node and NPM. Check the install with: node --version && npm --version
- 

Acknowledgements
===============

This project was started after seeing the great UI in the jQuery plugin for viewing last.fm data by Alex Cash. This is available at https://github.com/alexcash/jQuery.last.fm under the MIT / GPL dual license. The CSS from that project has been re-used for the "top albums" UI in that project. The rest of this project is all new Angular.js based code.

License
=======
This project is licensed under the Apache 2 license (noting that lfm.css file was developed by Alex Cash and released under a dual MIT / GPL license)
