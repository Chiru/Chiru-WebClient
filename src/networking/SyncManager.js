// For conditions of distribution and use, see copyright notice in LICENSE

/**
 * @author Toni Dahl
 */


(function ( namespace, undefined ) {

    var SyncManager, util;

    util = namespace.util;

    SyncManager = namespace.SyncManager = function ( framework ) {

        /*SyncManager should accumulate changes to attributes etc. that happened in a specified timeframe
         and include the changes in one message to reduce the amount of outgoing messages
        */

        //TODO: Create accumulator for changes
        //TODO: Serialize changes to event messages
        //TODO: Use WSManager for sending the serialized messages and empty accumulator when the changes have been sent
        //TODO: Add timer for sending the messages to reduce the amount of sent data

    };


}( window['webtundra'] = window['webtundra'] || {} ));