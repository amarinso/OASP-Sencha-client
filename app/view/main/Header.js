Ext.define('App1.view.main.Header', {
    extend: 'Ext.Panel',

    alias: 'widget.main-header',

    layout: 'hbox',
		border: false,

    cls: 'main-header',

    bodyStyle: 'background: none;border:none',

    defaults: {
        border: false,
        bodyStyle: 'background: transparent; ',
    },

    items: [{

        cls: 'main-header-title',

        html: i18n.main.header.title,
        flex: 1
    }, {
        xtype: 'label',
        bind: {
            text: i18n.main.loggedInAs + '{currentUser.firstName} {currentUser.lastName}'
        }
    }, {
        margin: '0 0 0 5',
        xtype: 'button',
        text: i18n.main.logOffButton,
        handler: 'onLogoffClick'
    }],
		dockedItems : [{
			xtype: 'toolbar',
			dock: 'bottom',
			cls: 'main-toolbar',

			items: [{
					text: i18n.main.menu.tables,
					handler: 'menuTables',
			}, {
					text: i18n.main.menu.positions,
					handler: 'menuPositions',
			}]
		}]
});
