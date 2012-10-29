'use strict';

require.config({
    deps: ["main"],

    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        marionette: 'lib/backbone.marionette'
    },

    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});
