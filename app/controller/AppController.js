Ext.define('App1.controller.AppController', {
    extend: 'Ext.app.Controller',

    requires: [
        'App1.view.login.Login',
        'App1.view.main.Main',
        'App1.view.table.Tables'
    ],


    loadingText: 'Loading...',


		loadUser: function(){
			var user = new App1.model.User();
			var me=this;
			user.load({
				success: function(record, operation){
					me.user=user;
					me.getCSFR();
				},
				callback : function(){
					if (!me.user){
						me.showLogin();
					}
				}
			});
		},


		//TODO: se puede obtener el token CSRF en paralelo
		getCSFR: function(){
			var me = this;
			Ext.Ajax.request({
				url: XXX.server+'security/csrftoken/',
				noCache: false,
				success: function(response, opts){
					var csrf = Ext.decode(response.responseText);
					me.csrf = csrf;
					var headers = {};
					headers[csrf.headerName] = csrf.token;
					Ext.Ajax.setDefaultHeaders(headers);
					me.showMain();
				}
			});
		},

		showLogin: function(){
        this.login = new App1.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });
		},

    onLaunch: function() {
        if (Ext.isIE8) {
            Ext.Msg.alert('Not Supported', 'This example is not supported on Internet Explorer 8. Please use a different browser.');
            return;
        }

        this.session = new Ext.data.Session({
            autoDestroy: false
        });

//				this.loadUser();
				this.showMain();

    },

    /**
     * Called when the login controller fires the "login" event.
     *
     * @param loginController
     * @param user
     * @param organization
     * @param loginManager
     */
    onLogin: function(loginController, user, organization, loginManager) {
        this.login.destroy();
        this.user = user;

        this.getCSFR();
    },

    showMain: function() {
        this.viewport = new App1.view.main.Main({
            session: this.session,
            viewModel: {
                data: {
                    currentUser: this.user
                }
            }
        });
    },

    getSession: function() {
        return this.session;
    }
});
