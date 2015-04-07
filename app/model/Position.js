Ext.define('App1.model.Position', {
    extend: 'Ext.data.Model',

    fields: [
        { name : 'id',  type:'int' },
				{ name:'orderId', type:'int'},
				{ name:'offerId', type:'int'},
				{ name:'cookId', type:'int', allowNull:true},
				'offerName',
				'state',
				'price',
				'comment',
				{ name:'modificationCounter', type:'int'},
				{ name:'revision', type:'int'},
    ]
});
