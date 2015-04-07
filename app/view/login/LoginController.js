Ext.define('App1.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

		requires :[
			'App1.model.User'
		],
    
    loginText: i18n.login.loginText,

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

		onLogoffClick: function(){
			Ext.Ajax.request({
				url : XXX.server+'/logout'
			});
		},
    
    onLoginClick: function() {
        this.doLogin();
    },
    
    doLogin: function() {
        var form = this.lookupReference('form');
        
        if (form.isValid()) {
            Ext.getBody().mask(this.loginText);

						Ext.Ajax.request({
							url : XXX.server+'login',
							jsonData : form.getValues(),
							scope: this,
							success: 'onLoginSuccess',
							failure: 'onLoginFailure'
						});
        }
    },
    
    onLoginFailure: function() {
        // Do something
        Ext.getBody().unmask();
				var user = new App1.model.User();
				user.load({
					success: function(record, operation){
					}
				});
    },

    onLoginSuccess: function(user) {
        Ext.getBody().unmask();
				this.fireViewEvent('login', this.getView(), user );

    }
});
