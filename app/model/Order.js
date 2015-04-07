Ext.define('App1.model.Order', {
    extend: 'Ext.data.Model',

    fields: [
        { name : 'id',  type:'int' },
				'state',
				{ name:'modificationCounter', type:'int'},
				{ name:'revision', type:'int'},
				{ name:'tableId', type:'int'}
    ],

		proxy : {
			type : 'ajax',
			url : XXX.server+'security/currentuser/',
			noCache: false
		}


});
