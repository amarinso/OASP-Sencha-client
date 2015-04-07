Ext.define('App1.model.Table', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'modificationCounter', type: 'int' },
        { name: 'revision', type: 'int' },
        { name: 'waiterId', type: 'int' },
        { name: 'number', type: 'int' },
        { name: 'state', type: 'auto' }

    ]
});
