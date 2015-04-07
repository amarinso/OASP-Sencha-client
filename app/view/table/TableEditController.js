Ext.define('App1.view.table.TableEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.table-edit-controller',

    loadData: function() {
        var vm = this.getViewModel();
        var positions = vm.get('positions');
        var id = vm.get('table').id;

        Ext.Ajax.request({
            url: XXX.server + 'salesmanagement/order?state=OPEN&tableId=' + id,
            success: function(response) {
                var data = Ext.decode(response.responseText);
                data = data || [{
                    positions: []
                }];

                positions.loadData(data[0].positions);
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
				vm.get("positions").each(function(){
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
    }

});
