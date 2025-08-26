sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("converted.purchaseorderview.controller.PurchaseOrderView", {
    onInit: function () {
      // Load mock data for PO header
      var oHeaderModel = new JSONModel();
      oHeaderModel.loadData("model/mockData/poHeader.json");
      this.getView().setModel(oHeaderModel, "poHeader");

      // Load mock data for PO items
      var oItemsModel = new JSONModel();
      oItemsModel.loadData("model/mockData/poItems.json");
      this.getView().setModel(oItemsModel, "poItems");
    },

    // Event handler for Print Preview button
    onPressPrintPreview: function () {
      alert("Print Preview functionality");
    },

    // Event handler for Messages button
    onPressMessages: function () {
      alert("Messages functionality");
    },

    // Event handler for Save as Template button
    onPressSaveAsTemplate: function () {
      alert("Save as Template functionality");
    },

    // Event handler for main tab selection
    onSelectMainTab: function (oEvent) {
      var sKey = oEvent.getParameter("key");
      // Handle tab selection here
      console.log("Selected tab: " + sKey);
    },

    // Event handler for item tab selection
    onSelectItemTab: function (oEvent) {
      var sKey = oEvent.getParameter("key");
      // Handle tab selection here
      console.log("Selected item tab: " + sKey);
    },
        // Event handler for Default Values button
    onPressDefaultValues: function () {
      alert("Default Values functionality");
    },

    // Event handler for Addl Planning button
    onPressAddlPlanning: function () {
      alert("Addl Planning functionality");
    }
  });
});

