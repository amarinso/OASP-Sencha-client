Ext.define('App1.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App1.view.main.MainController',
        'App1.view.main.MainModel',
        'App1.view.main.Header',
        'App1.view.main.Home'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
    listeners: {
        tableEdit: 'onTableEdit',
    },

    items: [{
        region: 'north',
				xtype: 'main-header',
        //style : 'background:#eee;padding:5px;',
//        bodyStyle: 'background:#eee;padding:5px;',
    }, {
        region: 'center',
        xtype: 'tabpanel',
				style: 'background: lightgray',
				cls: 'main-tabbar',
        reference: 'content',
        items: [{
            xtype: 'home',
        }]
    }]
});
