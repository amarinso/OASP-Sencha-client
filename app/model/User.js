Ext.define('App1.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name : 'id', reference: 'id' },
        'firstName',
				'lastName',
				'name',
				'role'
    ],

		proxy : {
			type : 'ajax',
			url : XXX.server+'security/currentuser/',
			noCache: false
		}


});
