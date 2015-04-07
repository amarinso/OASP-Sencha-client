Ext.define('App1.view.login.Login', {
    extend: 'Ext.window.Window',

    requires: [
        'App1.view.login.LoginController',
        'App1.view.login.LoginModel',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    viewModel: 'login',

    controller: 'login',
    bodyPadding: 10,
    title: '**OASP - Restaurant App',
    closable: false,

    cls: 'login',

    items: {
        xtype: 'form',
        border: false,
        reference: 'form',
        items: [{
            xtype: 'textfield',
						value : 'waiter',
            name: 'j_username',
            bind: '{username}',
            fieldLabel: i18n.login.username,
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
						value : 'waiter',
            name: 'j_password',
            inputType: 'password',
            fieldLabel: i18n.login.password,
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: '**Enter any non-blank password',
            cls: 'hint'
        }]
    },

    buttons: [{
        text: i18n.login.loginButton,
        listeners: {
            click: 'onLoginClick'
        }
    },{
			text : '**logoff',
			listeners : {
					click : 'onLogoffClick'
			}
		}]
});
