sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend(
      "northwind.products.northwindapp.controller.Home",
      {
        onInit: function () {},
        onRefreshTable: function () {
          var oTableProducts = this.getView().byId("idProductTable");
          oTableProducts.getBinding("items").refresh();

          var oTableCustomer = this.getView().byId("idCustomerTable");
          oTableProducts.getBinding("items").refresh();
        },
      }
    );
  }
);
