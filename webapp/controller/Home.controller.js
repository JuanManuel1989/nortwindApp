sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
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
        onNewModel: function () {
          var prod = [];

          sap.ui.core.BusyIndicator.show();
          var oModel = new sap.ui.model.odata.ODataModel(
            "/V2/Northwind/Northwind.svc/"
          );
          oModel.read("/Products", {
            success: function (res) {
              console.log(res);
              debugger;
              for (var i = 0; i < res.results.length; i++) {
                prod.push({
                  ProductName: res.results[i].ProductName,
                  ProductID: res.results[i].ProductID,
                  SupplierID: res.results[i].SupplierID,
                  UnitPrice: res.results[i].UnitPrice,
                });
              }

              var data = new sap.ui.model.json.JSONModel(prod);
              this.getView().setModel(data, "oModelMNA");
              sap.ui.core.BusyIndicator.hide();
            }.bind(this),
            error: function (err) {
              debugger;
            },
          });
        },

        onInsertImage: function () {
          debugger;

          var oImg = this.getView().byId("imgCar");

          var oImageCar = new sap.m.Image({
            width: "40%",
          });
        },

        onShowHello: function () {
          var msg = "Lorem ipsum dolor sit amet";
          MessageToast.show(msg);
        },
        onToastBinding: function () {
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sName = this.getView()
            .getModel("helloPanel")
            .getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sName, "loquillo"]);

          MessageToast.show(sMsg);
        },
      }
    );
  }
);
