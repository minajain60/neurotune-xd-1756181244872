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

      // Load mock data for Texts tab
      var oTextsModel = new JSONModel();
      oTextsModel.loadData("model/mockData/poTexts.json");
      this.getView().setModel(oTextsModel, "poTexts");

      // Load mock data for Address tab
      var oAddressModel = new JSONModel();
      oAddressModel.loadData("model/mockData/poAddress.json");
      this.getView().setModel(oAddressModel, "poAddress");

      // Load mock data for Communication tab
      var oCommunicationModel = new JSONModel();
      oCommunicationModel.loadData("model/mockData/poCommunication.json");
      this.getView().setModel(oCommunicationModel, "poCommunication");

      // Load mock data for Partners tab
      var oPartnersModel = new JSONModel();
      oPartnersModel.loadData("model/mockData/poPartners.json");
      this.getView().setModel(oPartnersModel, "poPartners");

      // Load mock data for Additional Data tab
      var oAdditionalDataModel = new JSONModel();
      oAdditionalDataModel.loadData("model/mockData/poAdditionalData.json");
      this.getView().setModel(oAdditionalDataModel, "poAdditionalData");

      // Load mock data for Org Data tab
      var oOrgDataModel = new JSONModel();
      oOrgDataModel.loadData("model/mockData/poOrgData.json");
      this.getView().setModel(oOrgDataModel, "poOrgData");

      // Load mock data for Status tab
      var oStatusModel = new JSONModel();
      oStatusModel.loadData("model/mockData/poStatus.json");
      this.getView().setModel(oStatusModel, "poStatus");

      // Load mock data for Release Strategy tab
      var oReleaseStrategyModel = new JSONModel();
      oReleaseStrategyModel.loadData("model/mockData/poReleaseStrategy.json");
      this.getView().setModel(oReleaseStrategyModel, "poReleaseStrategy");

       // Load mock data for Services tab
      var oServicesModel = new JSONModel();
      oServicesModel.loadData("model/mockData/poServices.json");
      this.getView().setModel(oServicesModel, "poServices");

      // Load mock data for Limits tab
      var oLimitsModel = new JSONModel();
      oLimitsModel.loadData("model/mockData/poLimits.json");
      this.getView().setModel(oLimitsModel, "poLimits");

      // Load mock data for Material Data tab
      var oMaterialDataModel = new JSONModel();
      oMaterialDataModel.loadData("model/mockData/poMaterialData.json");
      this.getView().setModel(oMaterialDataModel, "poMaterialData");

      // Load mock data for Quantities/Weights tab
      var oQuantitiesWeightsModel = new JSONModel();
      oQuantitiesWeightsModel.loadData("model/mockData/poQuantitiesWeights.json");
      this.getView().setModel(oQuantitiesWeightsModel, "poQuantitiesWeights");

      // Load mock data for Delivery Schedule tab
      var oDeliveryScheduleModel = new JSONModel();
      oDeliveryScheduleModel.loadData("model/mockData/poDeliverySchedule.json");
      this.getView().setModel(oDeliveryScheduleModel, "poDeliverySchedule");

      // Load mock data for Delivery tab
      var oDeliveryModel = new JSONModel();
      oDeliveryModel.loadData("model/mockData/poDelivery.json");
      this.getView().setModel(oDeliveryModel, "poDelivery");

      // Load mock data for Invoice tab
      var oInvoiceModel = new JSONModel();
      oInvoiceModel.loadData("model/mockData/poInvoice.json");
      this.getView().setModel(oInvoiceModel, "poInvoice");

      // Load mock data for Conditions tab
      var oConditionsModel = new JSONModel();
      oConditionsModel.loadData("model/mockData/poConditions.json");
      this.getView().setModel(oConditionsModel, "poConditions");

       // Load mock data for Account Assignment tab
      var oAccountAssignmentModel = new JSONModel();
      oAccountAssignmentModel.loadData("model/mockData/poAccountAssignment.json");
      this.getView().setModel(oAccountAssignmentModel, "poAccountAssignment");

      // Load mock data for Purchase Ord. History tab
      var oPurchaseOrdHistoryModel = new JSONModel();
      oPurchaseOrdHistoryModel.loadData("model/mockData/poPurchaseOrdHistory.json");
      this.getView().setModel(oPurchaseOrdHistoryModel, "poPurchaseOrdHistory");
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
