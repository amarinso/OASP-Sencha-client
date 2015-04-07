Ext.define('App1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox', 
				'App1.view.table.TableEdit',
				'App1.view.cook.CookPositions'
    ],

    alias: 'controller.main',

    onClickButton: function () {
			Ext.ComponentQuery.query('tabpanel')[0].add(Ext.create('App1.view.main.Tables'));
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

		onLogoffClick: function(){
			//TODO: refactor to use LoginController.onLogoffClick
			Ext.Ajax.request({
				url : XXX.server+'/logout',
				callback: function(){
					document.location.reload();

				}
			});
		},

		onTableEdit: function(view, tableRecord){
			var tableEdit = new App1.view.table.TableEdit({
				//title: '**Table: '+tableRecord.id,
				viewModel : {
					data : {
						table : tableRecord
					}
				}
			});

			this.showPanel(tableEdit);

		},

		menuTables: function(){
			var tables = new App1.view.table.Tables({
				title: '**Tables',
			});

			this.showPanel(tables);
		},
		menuPositions: function(){
			var vm = this.getViewModel();
			var positions = new App1.view.cook.CookPositions({
				title: '**Positions',
				viewModel : {
					data : {
						currentUser : vm.get("currentUser")
					}
				}
			});
			this.showPanel(positions);

		},

		showPanel: function(panel){
			var content= this.lookupReference('content');
			content.add(panel);
			content.setActiveItem(panel);
		}


});
