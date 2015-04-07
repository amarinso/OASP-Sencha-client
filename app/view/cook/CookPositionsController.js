Ext.define('App1.view.cook.CookPositionsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cook-positions-controller',

    loadData: function() {
        var vm = this.getViewModel();
        var available = vm.get('available');
        var assigned = vm.get('assigned');

        Ext.Ajax.request({
            url: XXX.server + 'salesmanagement/orderposition?mealOrSideDish=true&state=ORDERED',
            success: function(response) {
                var data = Ext.decode(response.responseText);

                available.loadData(data);
                assigned.loadData(data);
                vm.set("order", data[0].order);
            }

        });


    },

    tableEditCancel: function() {
        this.tableEditClose();
    },


    tableEditClose: function() {
        this.getView().destroy();
    },

    tableEditSubmit: function() {

        var me = this;

        var vm = this.getViewModel();
        var order = vm.get("order");
        var positions = [];
        vm.get("positions").each(function() {
            positions.push(this.data);
        });

        Ext.Ajax.request({
            url: XXX.server + 'salesmanagement/order/' + order.id,
            method: 'PUT',
            jsonData: {
                order: order,
                positions: positions
            },

            success: function() {
                this.tableEditClose();
            }

        });
    },

    positionRemove: function() {
        var model = this.getViewModel();
        var positions = model.get("positions");
        var selectedItem = model.get("selectedItem");

        positions.remove(selectedItem);
    },

    addPositionClick: function() {
        var vm = this.getViewModel();
        var offers = vm.get("offers");
        var positionValue = vm.get("positionSelected");

        var position = offers.findRecord('id', positionValue);

        var order = vm.get("order");

        vm.get("positions").add({
            id: null,
            orderId: order.id,
            offerId: position.get("id"),
            offerName: position.get("description"),
            state: XXX.status.ORDERED,
            price: position.get("price")
        });
        //var newPosition = new App1.model.Position(
    },

    XpositionAssign: function() {
        var me = this;
        var vm = this.getViewModel();
        var availableSelectedItem = vm.get("availableSelectedItem");

				var currentUser = vm.get("currentUser");

				var data = Ext.clone(availableSelectedItem.data);
				data.cookId = currentUser.id;

        Ext.Ajax.request({
            url: XXX.server + 'salesmanagement/orderposition',
            method: 'POST',
            jsonData: data,
            success: function() {
                me.loadData();
            }
        });
    },

    positionAssignClick: function() {
        var vm = this.getViewModel();
				var currentUser = vm.get("currentUser");
				this.positionChangeAssignement("availableSelectedItem", currentUser.id);
		},

		positionRejectClick: function(){
				this.positionChangeAssignement("assignedSelectedItem", null);
		},


		positionChangeAssignement: function(selectedItemKey, cookId){
        var me = this;
        var vm = this.getViewModel();
        var selectedItem = vm.get(selectedItemKey);


				var data = Ext.clone(selectedItem.data);
				data.cookId = cookId;

        Ext.Ajax.request({
            url: XXX.server + 'salesmanagement/orderposition',
            method: 'POST',
            jsonData: data,
            success: function() {
                me.loadData();
            }
        });
		}

});
