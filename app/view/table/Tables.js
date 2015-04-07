Ext.define("App1.view.table.Tables", {
    extend: "Ext.panel.Panel",
    alias: 'widget.tables',

    requires: [
        'Ext.grid.Panel',
        'App1.view.table.TablesModel',
        'App1.view.table.TablesController',
				'App1.model.Table'
    ],

		closable: true,
    controller: "table-tables",

    title: '**Tables',

    viewModel: {
        type: "table-tables"
    },

		/*
		 * XXX: document better
		 * We want custom events to bubble up for the main MainController to catch them.
		 * It could be also a global controller
		 *
		 * */

		initComponent: function(){
			this.callParent();
			this.enableBubble('tableEdit');
		},

    items: [{
        padding: 10,
        html: 'List of tables for the restaurant demo',
        border: false
    }, {
        xtype: 'grid',
        reference: 'tablesgrid',
				allowDeselect: true,
        columns: [{
            text: i18n.tables.grid.id,
            dataIndex: 'id'
        }, {
            text: i18n.tables.grid.state,
            dataIndex: 'state',
            flex: 1
        }],

        bind: {
            store: '{tables}',
            selection: '{selectedItem}'
        },
        bbar: {
            items: [{
                text: i18n.tables.buttons.edit,
                bind: {
                    disabled: '{!selectedItem}'
                },
								handler: 'editClick'
            }, {
                text: i18n.tables.buttons.reserve,
                bind: {
                    disabled: '{!canReserve}'
                }
            }, {
                text: i18n.tables.buttons.cancel,
                bind: {
                    disabled: '{!canCancel}'
                }

            }, {
                text: i18n.tables.buttons.occupy,
                handler: 'markAsOccupied',
                bind: {
                    disabled: '{!canOcuppy}'
                }

            }, {
                text: i18n.tables.buttons.free,
                handler: 'markAsFree',
                bind: {
                    disabled: '{!canReserve}'
                }

            }]
        }
    }, ]
});
