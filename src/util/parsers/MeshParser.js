(function ( namespace, $, undefined ) {
    var MeshParser = namespace.MeshParser = function () {
        var types = ['collada', 'ogre'];


        return {
            spawnWorker: function ( script ) {
                var id = (Math.random() + '' + new Date().getMilliseconds()).substring( 2 );
                var s = document.createElement( 'script' );
                s.type = "text/worker";
                s.setAttribute( 'id', 'worker_' + id );
                document.body.appendChild(s);

                var path = document.getElementById( 'worker_' + id ).src;
                console.log( path );


                //var w = new Worker(path);
                //w.addEventListener('message', msg_worker, false);
                //return w;

            },

            killWorker: function ( id ) {
                var path = document.getElementById( 'worker_' + id ).previousSibling.src;

            }
        };

    }();


}( window.webnaali = window.webnaali || {}, jQuery ));