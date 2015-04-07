/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('App1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App1',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

		controllers : [
			'App1.controller.AppController'

		]
});
