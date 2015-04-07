Ext.define('App1.view.table.TableEditModel', {
    extend: 'Ext.app.ViewModel',
    xextend: 'App1.view.main.MainModel', 
		requires : [
			'App1.model.Offer'
		],
    alias: 'viewmodel.table-edit-model',
    data: {
        selectedItem: false,
        name: 'App1',
				order: null
    },

		states : {
			FREE: "FREE",
			OCCUPIED: "OCCUPIED",
			RESERVED: "RESERVED"
		},

    stores: {
        positions: {
            model: 'App1.model.Position'
        },
				offers: {
					model: 'App1.model.Offer',
					proxy: {
						type: 'rest',
						url: XXX.server+'offermanagement/offer',
						noCache: false
					},
					autoLoad: true
				}
    },

});
