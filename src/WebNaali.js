/**
 * Global namespace that holds highest level functionality
 * @namespace webnaali
 * @version 0.1 dev
 * @param {object} namespace Global namespace
 * @param {object} $ jQuery
 * @param {undefined} undefined Reserving the undefined
 *
 */

(function ( namespace, $, undefined ) {
    /** @lends webnaali **/
    namespace.version = '0.1 dev';

    this.createScene = function ( container, options ) {
        return this.scene = new this.SceneManager ( container );
    };

    this.connect = function ( host, port, options ) {
        return this.connection = new this.W;
    };


}( window.webnaali = window.webnaali || {}, jQuery ));