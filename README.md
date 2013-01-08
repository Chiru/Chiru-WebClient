### WebNaali README ###

This js-library implements a light-weight web client for RealXTend Tundra server and it needs a WebSocketModule add-on
installed into the Tundra server so a connection to the server through a websocket can be established. This project
is still work in progress, but the goal is to provide a simple and light-weight library for creating a customized
Tundra Web Client that can be embedded into a custom web page.

## Overview ##

WebNaali utilizes three.js WebGL js-framework for its core functions, like rendering. Also, jQuery is used for
simplifying the development process. All the libraries and core functions are compiled into a single javascript library
file using a python-based script, that is located in the tools folder. The result of compiling process can be found
in the build-folder.


## Prerequisites ##

1. <a href="https://github.com/Chiru/ChiruAddons/tree/master/WebSocketModule">WebSocketModule</a> installed into a Tundra Server
2. A web server for the web client (or e.g. "python -m SimpleHTTPServer" can also be used if running the web client locally)
3. A web browser that supports WebGL and WebSockets (newest version of FireFox or Google Chrome recommended)