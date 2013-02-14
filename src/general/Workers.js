// For conditions of distribution and use, see copyright notice in LICENSE


(function ( namespace, undefined ) {
    var Workers = namespace.Workers = function () {
        var workers = {},
            workerCount = 0,
            queue = [];


        window.URL = window.URL || window.webkitURL;


        return {
            spawnWorker: function ( scriptPath, options ) {
                var w;
                try {
                    if ( workerCount < 5 ) {
                        w = new Worker( scriptPath );
                        if ( options && options.onmessage ) {
                            w.onmessage = options.onmessage;
                        }

                        w.id = (Math.random() + '' + new Date().getMilliseconds()).substring( 2 );
                        workers[w.id] = w;
                        workerCount += 1;

                        return w;
                    } else {
                        queue.push( {path: scriptPath, onmessage: function () {
                        }} );
                        console.log("Added worker to queue...");
                        return queue[queue.length];
                    }

                } catch (e) {
                    console.error( 'ERROR: ', e.stack );
                    return false;
                }
            },
            spawnInlineWorker: function ( script, scriptId ) {
                var s, blob, path, w;

                if ( scriptId === undefined ) {
                    scriptId = (Math.random() + '' + new Date().getMilliseconds()).substring( 2 );
                    s = document.createElement( 'script' );
                    s.type = "javascript/worker";
                    s.setAttribute( 'id', 'worker_' + scriptId );
                    s.innerText = script;
                    document.body.appendChild( s );

                } else {
                    try {
                        s = document.querySelector( '#worker_' + scriptId );
                        if ( s === null ) {
                            console.error( 'ERROR: ', 'Worker script with id: ' + scriptId + ' not found.' );
                            return false;
                        }
                    } catch (e) {
                        console.error( 'ERROR: ', e.stack );
                        return false;
                    }
                }

                try {
                    blob = new Blob( [s.textContent] );
                    path = window.URL.createObjectURL( blob );
                    w = new Worker( path );

                } catch (e) {
                    console.error( 'ERROR: ', e.stack );
                    s.parentNode.removeChild( s );
                    return false;
                }

                w.id = (Math.random() + '' + new Date().getMilliseconds()).substring( 2 );
                w.url = path;
                console.log( path )
                w.scriptId = scriptId;
                workers[w.id] = w;

                return w;

            },

            killWorker: function ( workerId ) {
                if ( workers[workerId] !== undefined ) {
                    try {
                        workers[workerId].terminate();
                        if ( workers[workerId].url !== undefined ) {
                            window.URL.revokeObjectURL( workers[workerId].url );
                        }
                        delete workers[workerId];
                        workerCount -= 1;

                        console.log( "Worker (" + workerId + ") killed." );

                        if ( queue.length > 0 ) {
                            var item = queue.pop();
                            this.spawnWorker( item.path, {onmessage: item.onmessage} );
                        }

                    } catch (e) {
                        console.log( 'ERROR: ', e.stack );
                    }
                }
            },
            removeScript: function ( scriptId ) {
                if ( scriptId !== undefined ) {
                    var s, wId, w;

                    try {
                        s = document.querySelector( '#worker_' + scriptId );
                        if ( s === null ) {
                            console.error( 'ERROR: ', 'Worker script with id: ' + scriptId + ' not found.' );
                            return false;
                        }

                        s.parentNode.removeChild( s );

                        for ( wId in workers ) {
                            if ( workers.hasOwnProperty( wId ) ) {
                                w = workers[wId];
                                if ( w.hasOwnProperty( 'scriptId' ) && w.hasOwnProperty( 'id' ) ) {
                                    if ( w.scriptId === scriptId ) {
                                        this.killWorker( w.id );
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        console.error( 'ERROR: ', e.stack );
                        return false;
                    }
                } else {
                    console.error( 'ERROR: ', "Can not remove script tag with id: " + scriptId );
                    return false;
                }
                console.log( "Removed worker script: " + scriptId );
                return true;
            }
        };

    }();


}( window['webtundra'] = window['webtundra'] || {} ));