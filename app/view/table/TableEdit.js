Ext.define("App1.view.table.TableEdit", {
    extend: "Ext.panel.Panel",
    alias: 'widget.tableedit',

    requires: [
        'Ext.grid.Panel',
        'App1.model.Position',
        'App1.view.table.TableEditModel',
        'App1.view.table.TableEditController'
    ],

    controller: "table-edit-controller",

    closable: true,

    bind: {
        title: 'Tablexxxx: {table.id}'
    },

    viewModel: {
        type: "table-edit-model"
    },



    listeners: {
        render: 'loadData'
    },
    tbar: {
        items: [
            '->', {
                text: '**Submit',
                handler: 'tableEditSubmit'
            }, {
                text: '**Cancel',
                handler: 'tableEditCancel'
            }
        ]
    },

    items: [{
        padding: 10,
        bind: {
            html: 'Details for table #{table.id}',
        },
        border: false
    }, {
        layout: {
					type:'hbox',
					pack: 'center',
					align: 'middle'
				},
        padding: 10,
        border: false,
        items: [{
            xtype: 'combo',
            fieldLabel: '**Order positions',
            reference: 'offerCombo',
            valueField: 'id',
            displayField: 'description',
            bind: {
                store: '{offers}',
                value: '{positionSelected}',
            }
        }, {
            xtype: 'button',
            text: '+Add',
            handler: 'addPositionClick'
        }]
    }, {
        xtype: 'grid',
        reference: 'menugrid',
        allowDeselect: true,

        columns: [{
            text: i18n.tableEdit.grid.number,
            dataIndex: 'id'
        }, {
            text: i18n.tableEdit.grid.title,
            dataIndex: 'offerName',
            flex: 1
        }, {
            text: i18n.tableEdit.grid.status,
            dataIndex: 'state'
        }, {
            text: i18n.tableEdit.grid.price,
            dataIndex: 'price'
        }, {
            text: i18n.tableEdit.grid.comment,
            dataIndex: 'comment',
            flex: 1
        }],
        bind: {
            store: '{positions}',
            selection: '{selectedItem}'
        },
        bbar: {
            items: [{
                text: '**Remove',
                bind: {
                    disabled: '{!selectedItem}'
                },
                handler: 'positionRemove'
            },
            '->', {
                text: '**Submit',
                handler: 'tableEditSubmit'
            }, {
                text: '**Cancel',
                handler: 'tableEditCancel'
            }]
        }
    }]
});
