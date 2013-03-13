# README

This JavaScript library implements a light-weight web client currently for realXtend Tundra server and it needs a WebSocketModule add-on
installed into the Tundra server so a connection through a WebSocket can be established. This project
is still work in progress, but the goal is to provide a simple and light-weight library and API for creating a customized
web client for Tundra and also for other similar virtual world servers.

## Overview

WebTundra utilizes Three.js WebGL framework for its core functions, like rendering. All the libraries and core functions
can be compiled into a single javascript library file using a python-based script that is located in the tools folder.
The result of compiling process can be found in the build-folder. Examples of the usage can be found in main.js and index.html.


## Prerequisites

1. [WebSocketModule][1] installed into a Tundra Server.
2. A web server for the web client and for the assets (or e.g. "python -m SimpleHTTPServer" works fine for testing purposes).
3. A web browser that supports WebGL and WebSockets (newest version of FireFox or Google Chrome recommended).


## Document Generation

Documentation of this project can be generated for example with [JSDoc3][2], using command:
./jsdoc -r ../ProjectRootFolder/src --destination ../path/to/docs/ ../ProjectRootFolder/README.md
You should also change the default "excludepattern" in JSDoc3 conf.json to ".+\\libs" to ignore js-libs from the documentation.

[1]: https://github.com/Chiru/ChiruAddons/tree/master/WebSocketModule
[2]: https://github.com/jsdoc3/jsdoc


