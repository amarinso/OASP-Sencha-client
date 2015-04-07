Ext.define("App1.view.cook.CookPositions", {
    extend: "Ext.panel.Panel",
    alias: 'widget.cookpositions',

    requires: [
        'Ext.grid.Panel',
        'App1.model.Position',
        'App1.view.cook.CookPositionsModel',
        'App1.view.cook.CookPositionsController'
    ],

    controller: "cook-positions-controller",
    viewModel: {
        type: "cook-positions-model"
    },

    closable: true,

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
        xtype: 'grid',
        reference: 'availablegrid',
        allowDeselect: true,

        columns: [{
            text: '**id',
            dataIndex: 'id'
        }, {
            text: '**Order id',
            dataIndex: 'orderId',
            flex: 1
        }, {
            text: '**Offer name',
            dataIndex: 'offerName'
        }, {
            text: '**Meal name',
            dataIndex: 'XXmealName'
        }, {
            text: '**Side dish name',
            dataIndex: 'XXdishName',
            flex: 1
        }],
        bind: {
            store: '{available}',
            selection: '{availableSelectedItem}'
        },
        bbar: {
            items: [ {
                text: '**Assign',
                handler: 'positionAssignClick',
								bind : {
									disabled: '{!availableSelectedItem}'
								}
            }]
        }
    },{
        xtype: 'grid',
        reference: 'assignedgrid',
        allowDeselect: true,

        columns: [{
            text: '**id',
            dataIndex: 'id'
        }, {
            text: '**Order id',
            dataIndex: 'orderId',
            flex: 1
        }, {
            text: '**Offer name',
            dataIndex: 'offerName'
        }, {
            text: '**Meal name',
            dataIndex: 'XXmealName'
        }, {
            text: '**Side dish name',
            dataIndex: 'XXdishName',
            flex: 1
        }],
        bind: {
            store: '{assigned}',
            selection: '{assignedSelectedItem}'
        },
        bbar: {
            items: [
            '->', {
                text: '**Done',
                handler: 'positionDoneClick',
								bind : {
									disabled: '{!assignedSelectedItem}'
								}
									
            }, {
                text: '**Reject',
                handler: 'positionRejectClick',
								bind : {
									disabled: '{!assignedSelectedItem}'
								}
            }]
        }
    }]
});
