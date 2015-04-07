Ext.define('App1.view.table.TablesModel', {
    extend: 'Ext.app.ViewModel',
		requires : [
		],
    alias: 'viewmodel.table-tables',
    data: {
        selectedItem: false,
        name: 'App1',
    },

		states : {
			FREE: "FREE",
			OCCUPIED: "OCCUPIED",
			RESERVED: "RESERVED"
		},

    stores: {
        tables: {
            model: 'App1.model.Table',
						proxy : {
							type: 'rest',
							url: XXX.server+'tablemanagement/table'
						},
						autoLoad:true,
            Xdata: [{
                id: 101,
                state: "OCCUPIED"
            }, {
                id: 102,
                state: "FREE"
            }, {
                id: 103,
                state: "FREE"
            }]
        }
    },

		checkState: function(get, state){
				var table=get('selectedItem');
				if (!table) return false;
				return table.get("state")==this.states.FREE;
		},

		formulas : {
			canReserve: function(get){
				return this.checkState(get, this.states.FREE);
			},
			canCancel: function(get){
				var table=get('selectedItem');
				if (!table) return false;
				return table.get("state")==this.states.RESERVED;
			},
			canOcuppy: function(get){
				var table=get('selectedItem');
				if (!table) return false;
				var state = table.get("state");
				return state==this.states.RESERVED || state==this.states.FREE;
			},
			canFree: function(get){
				var table=get('selectedItem');
				if (!table) return false;
				return table.get("state")==this.states.OCCUPIED;
			},

		}

});
