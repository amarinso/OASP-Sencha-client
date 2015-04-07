Ext.define('App1.view.cook.CookPositionsModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'App1.model.Offer'
    ],
    alias: 'viewmodel.cook-positions-model',

    data: {
        selectedItem: false,
        name: 'App1',
        order: null
    },

    stores: {
        available: {
            model: 'App1.model.Position',
						filters: [
							function(item){
								return item.data.cookId===null;
							}
						]

        },
        assigned: {
            model: 'App1.model.Position',
						filters: [
							function(item){
								return item.data.cookId!==null;
							}
						]
        }
    },

});
