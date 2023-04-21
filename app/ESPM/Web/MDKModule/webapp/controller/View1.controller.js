sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
], function (Controller, JSONModel, BindingMode) {
	"use strict";

	return Controller.extend("ESPM.controller.View1", {
        setUrl: function () {
            var sIframeId = this.getView().byId(this.createId("mdkframe")).getId();
            var componentData = this.getOwnerComponent().getComponentData();
            var startupParams = componentData ? componentData.startupParameters : "";
            var queryString = $.param(startupParams).replaceAll("%5B%5D", "");
            var url = sap.ui.require.toUrl("ESPM/mdkindex.html?" + queryString);
            $("#"+sIframeId).attr("src",url);
        },
        onAfterRendering: function () {
            this.setUrl();
        }
	});
});

window.addEventListener("message", event => {
    if (event.origin === window.location.origin && event.data && event.data instanceof Object && event.data.command === "NavToExternal") {
        // get a handle on the global XAppNav service
        var oCrossAppNavigator = sap.ushell.Container.getService(
            "CrossApplicationNavigation"
        );
        // generate the Hash for XAppNav
        oCrossAppNavigator && oCrossAppNavigator.hrefForExternalAsync({
            target: {
                semanticObject: event.data.semanticObject,
                action: event.data.action,
            },
            params: event.data.params
        }).then( function(sHref) {
            oCrossAppNavigator.toExternal({
                target: {
                    shellHash: sHref,
                },
            });
        });
    }
}, false);
