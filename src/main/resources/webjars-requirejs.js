/*global requirejs */

// Ensure any request for this webjar brings in emberjs.
requirejs.config({
    shim: {
        emberjs: [ 'webjars!ember.js' ]
    }
});
