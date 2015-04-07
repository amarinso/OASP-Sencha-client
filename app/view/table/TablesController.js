Ext.define('App1.view.table.TablesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.table-tables',


		markSelectedAs: function(status){
			var id = this.getViewModel().get('selectedItem').id;

			var me = this;
			Ext.Ajax.request({
				method: 'POST',
				url : XXX.server+'tablemanagement/table/'+id+'/marktableas/'+status,
				callback: function(){
					me.getViewModel().get('tables').reload();

				}
			});
		},
    
		markAsOccupied: function(){
			this.markSelectedAs('OCCUPIED');
		},

		markAsFree: function(){
			this.markSelectedAs('FREE');
		},

		editClick: function(){
			var rec = this.getViewModel().get('selectedItem');
			this.fireViewEvent('tableEdit', this.getView(), rec);
			//this.getView().fireEvent('tableEdit', this.getView(), rec);
		}
});
