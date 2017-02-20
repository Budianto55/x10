var rolesett = {
    //
    titleModel : ko.observable("New Roles"),
    loading : ko.observable(false),
    edit : ko.observable(true),
    disableRolename : ko.observable(true),
    temp: ko.observableArray([]),
    filterStatus: ko.observable(),
    //var field 
    Id : ko.observable(""),
    roleName : ko.observable(""),
    roleType : ko.observable(""),
    dealAllocation : ko.observable(""),
    dealAllocationOpt : ko.observableArray(["Standard", "Branches", "Regions"]),
    landingPage : ko.observable(""),

    //var Filter
    filterRole : ko.observableArray([]),

    //var List
    listRole : ko.observableArray([]),

    //var Landing Page
    listPage : ko.observableArray([]),

    //var grid
    dashboardData: ko.observableArray([]),
    dealSetupData: ko.observableArray([]),
    webFormsData: ko.observableArray([]),
    dataMasterData: ko.observableArray([]),
    helpData: ko.observableArray([]),
    decisionCommitteData: ko.observableArray([]),
    caCommitteData: ko.observableArray([])
};

function checkboxField(field) {
        return '<input type="checkbox" ' +
            'data-switch-no-init ' +
            'id="#=menuid#_' + field + '"' +
            'onclick="clickRole(\'#=menuid#\', \'' + field + '\')" ' +
            '#= ' + field + ' ? checked="checked" : "" # />'
}

function clickRole(menuid, path) {
    var output = backMapping();
    _.each(output, function(it) {
        if (it.menuid != menuid)
            return

        // toggle
        console.log(it)
        _.set(it, path, !_.get(it, path, false))
    })

    rolesett._privToGrid(privilegesToNewRole(output))
}

var dashboardMapping = [
    {
        "name": "Dashboard",
        "menuid": "20168521323",
        "grant": ["all", "view"]
    }
]

var dealSetupMapping = [
    {
        "name": "Deal Setup",
        "menuid": "201721163449",
        "grant": ["all", "view", "accept", "reject"]
    }
]

var webFormGrant = ["all", "view", "edit", "confirm", "reenter", "freeze", "unfreeze"]
var webFormMapping = [
    {
        "name": "Customer Application",
        "menuid": "2016812144329",
        "grant": webFormGrant
    },
    {
        "name": "Cibil Details",
        "menuid": "2016815163422",
        "grant": webFormGrant
    },
    {
        "name": "Balance Sheet Input",
        "menuid": "2016818132431",
        "grant": webFormGrant
    },
    {
        "name": "Stock & Book Dept",
        "menuid": "2016825141921",
        "grant": webFormGrant
    },
    {
        "name": "Account Details",
        "menuid": "201682514915",
        "grant": webFormGrant
    },
    {
        "name": "Banking Analysis",
        "menuid": "2016822104419",
        "grant": webFormGrant
    },
    {
        "name": "External Repayment Details",
        "menuid": "201682214167",
        "grant": webFormGrant
    },
    {
        "name": "Internal Repayment Details",
        "menuid": "201682613422",
        "grant": webFormGrant
    },
    {
        "name": "Due Diligence Form",
        "menuid": "2016826124919",
        "grant": webFormGrant
    }
]

var dataMasterGrant = ["all", "view", "edit", "create", "delete"]
var dataMasterMapping = [
    {
        "name": "Balance Sheet Input Master",
        "menuid": "2016819135634",
        "grant": dataMasterGrant
    },
    {
        "name": "Formula Master",
        "menuid": "2016826135622",
        "grant": dataMasterGrant
    },
    {
        "name": "Due Diligence Form Master",
        "menuid": "2016923185829",
        "grant": dataMasterGrant
    },
    {
        "name": "Key Norms Master",
        "menuid": "2016926142839",
        "grant": dataMasterGrant
    },
    {
        "name": "Standards Master",
        "menuid": "2016102614510",
        "grant": dataMasterGrant
    },
    {
        "name": "User Master",
        "menuid": "2016825144254",
        "grant": dataMasterGrant
    },
    {
        "name": "Ratings Model Master",
        "menuid": "2016825145014",
        "grant": dataMasterGrant
    },
    {
        "name": "Distributors Master",
        "menuid": "2017126111916",
        "grant": dataMasterGrant
    }
]

var helpGrant = ["all", "view"]
var helpMapping = [
    {
        "name": "Formula Glossary",
        "menuid": "2016118163140",
        "grant": helpGrant
    },
    {
        "name": "Forms, Reports & Masters Logic",
        "menuid": "2016119141528",
        "grant": helpGrant
    },
    {
        "name": "UAT Documents",
        "menuid": "20161128103041",
        "grant": helpGrant
    }
]

var decisionCommitteGrant = ["all", "dc_approve", "dc_reject", "dc_cancel", "dc_hold", "dc_send_back"]
var decisionCommitteMapping = [
    {
        "name": "Decision Committe",
        "menuid": "2016825142718",
        "grant": decisionCommitteGrant
    }
]

var caCommitteGrant = ["all", "ca_save", "ca_send_dc"]
var caCommitteMapping = [
    {
        "name": "CA Committe",
        "menuid": "2016825142718",
        "grant": caCommitteGrant
    }
]

function processMapping(input, maps) {
    var ret = [];
    _.each(maps, function(component) {
        var newcomponent = {};
        newcomponent.submodule = component.name
        newcomponent.menuid = component.menuid
        newcomponent.grant = {}
        // find matching menu
        var found = _.find(input, function(it) {
            var menuid = _.get(it, "Menuid", undefined) || _.get(it, "menuid", undefined)

            if (typeof(menuid) == "undefined")
                console.log("ERROR!")

            if (menuid != component.menuid)
                return false;

            newcomponent.grant = _.get(it, 'Grant', undefined) || _.get(it, "grant", {})
            if (newcomponent.grant == null)
                newcomponent.grant = {}
            return true;
        })

        // set default false
        _.each(component.grant, function (name) {
            newcomponent.grant[name] = _.get(newcomponent.grant, name, false)
        })

        ret.push(newcomponent)
    })

    return ret;
}

function backMapping() {
    var lists = [
        rolesett.dashboardData,
        rolesett.dealSetupData,
        rolesett.webFormsData,
        rolesett.decisionCommitteData,
        rolesett.caCommitteData,
        rolesett.dataMasterData,
        rolesett.helpData
    ]

    var ret = []
    _.each(lists, function(val) {
        var input = val()

        _.each(input, function(val2) {

            var idx = _.findIndex(ret, function(val) {
                return val2.menuid == val.menuid;
            })

            if (idx != -1) {
                ret[idx].grant = _.merge(ret[idx].grant, val2.grant)
                return
            }

            ret.push(val2);
        })
    })

    return ret
}

function privilegesToNewRole(input) {
    var mapped = {};
    mapped["Dashboard"] = processMapping(input, dashboardMapping)
    mapped["Deal Setup"] = processMapping(input, dealSetupMapping)
    mapped["Web Forms"] = processMapping(input, webFormMapping)
    mapped["Data Master"] = processMapping(input, dataMasterMapping)
    mapped["Help"] = processMapping(input, helpMapping)
    mapped["DecisionCommitte"] = processMapping(input, decisionCommitteMapping)
    mapped["CaCommitte"] = processMapping(input, caCommitteMapping)
    
    return mapped;
}

var DashboardObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.view",
            title: "View",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.view')
        },
    ]
}

var DealSetupObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.view",
            title: "View",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.view')
        },
        {
            field: "grant.accept",
            title: "Accept",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.accept')
        },
        {
            field: "grant.reject",
            title: "Reject",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.reject')
        }
    ]
}

var WebFormsObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.view",
            title: "View",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.view')
        },
        {
            field: "grant.edit",
            title: "Edit & Save",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.edit')
        },
        {
            field: "grant.confirm",
            title: "Confirm",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.confirm')
        },
        {
            field: "grant.reenter",
            title: "Re-Enter",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.reenter')
        },
        {
            field: "grant.freeze",
            title: "Freeze",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.freeze')
        },
        {
            field: "grant.unfreeze",
            title: "Unfreeze",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.unfreeze')
        }
    ]
}

var DataMasterObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.view",
            title: "View",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.view')
        },
        {
            field: "grant.edit",
            title: "Edit & Save",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.edit')
        },
        {
            field: "grant.create",
            title: "Create",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.create')
        },
        {
            field: "grant.delete",
            title: "Delete",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.delete')
        }
    ]
}

var decisionCommitteObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.dc_approve",
            title: "Approve",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.dc_approve')
        },
        {
            field: "grant.dc_reject",
            title: "Reject",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.dc_reject')
        },
        {
            field: "grant.dc_cancel",
            title: "Cancel",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.dc_cancel')
        },
        {
            field: "grant.dc_hold",
            title: "Hold",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.dc_hold')
        },
        {
            field: "grant.dc_send_back",
            title: "Send back",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.dc_send_back')
        }
    ]
}

var caCommitteObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.ca_save",
            title: "Save",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.ca_save')
        },
        {
            field: "grant.ca_send_dc",
            title: "Send DC",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.ca_send_dc')
        }
    ]
}
// Cibil Editor

// Help
var HelpObj = {
    columns: [
        {
            field: "submodule",
            title: "Submodule",
            headerAttributes: {class: 'k-header header-bgcolor'},
            width: 200
        },
        {
            field: "grant.all",
            title: "All",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.all')
        },
        {
            field: "grant.view",
            title: "View",
            headerAttributes: {class: 'k-header header-bgcolor'},
            template: checkboxField('grant.view')
        }
    ]
}

rolesett.templateRole = {
    name: "",
    type: "",
    dealallocation: "",
    status: false,
    menu: [],
    landing: ""
};
rolesett.mappingRole = ko.mapping.fromJS(rolesett.templateRole);

rolesett.ClearField = function(){
    rolesett.roleName("");
    rolesett.roleType("CA");
    rolesett.dealAllocation("Standard");
    $('#Status').bootstrapSwitch('state',true);
    rolesett._privToGrid(privilegesToNewRole([]))
    rolesett.landingPage("");
}

rolesett.Search = function(){
    rolesett.GetDataRole();
}

rolesett.Reset = function(){
    
    var multiSelect = $('#filterRole').data("kendoMultiSelect");
    multiSelect.value([]);
    $('#filterStatus').bootstrapSwitch('state', true);
    rolesett.GetDataRole();
}

rolesett.AddNew = function(){
    // var landing = $("#role").data("kendoDropDownList");
    // landing.value("");
    $("#roleModal").modal("show");
    $("#nav-dex").css('z-index', '0');
    $("#roleModal").modal({
        backdrop: 'static',
        keyboard: false
    });
    $('.rolecheck-value-check-all').prop('checked', false);
    $('.rolecheck-value-Access').prop('checked', false);
    $('.rolecheck-value-Create').prop('checked', false);
    $('.rolecheck-value-Delete').prop('checked', false);
    $('.rolecheck-value-Edit').prop('checked', false);
    $('.rolecheck-value-View').prop('checked', false);
    $('.rolecheck-value-Approve').prop('checked', false);
    $('.rolecheck-value-Process').prop('checked', false);
    rolesett.titleModel("New Roles");
    rolesett.disableRolename(true);
    rolesett.ClearField();
    rolesett.edit(true);
    rolesett.getTopMenu();
    rolesett.Id("");
}

rolesett.SaveData = function(){
    // var displayedData = $("#MasterGridMenu").data().kendoTreeList.dataSource.view();
    var param = {};
    param.id = rolesett.Id();
    param.name = rolesett.roleName();
    param.type = rolesett.roleType();
    param.dealallocation = rolesett.dealAllocation();
    param.status = $('#Status').bootstrapSwitch('state');
    param.landing = rolesett.landingPage();
    param.menu = backMapping();

    console.log(param);

    // for (var i in displayedData){
    //     if (displayedData[i].Id != undefined){
    //         var Access = $("#check-Access-"+displayedData[i].Id).is(":checked");
    //         // if (Access != false){
    //             rolesett.mappingRole.menu.push({
    //                 "menuid" : displayedData[i].Id,
    //                 "menuname" : displayedData[i].Title,
    //                 "haschild" : displayedData[i].Haschild,
    //                 "enable" : displayedData[i].Enable,
    //                 "parent" : displayedData[i].parentId,
    //                 "checkall" : $("#check-all-new"+displayedData[i].Id).is(":checked"),
    //                 "access" : $("#check-Access-"+displayedData[i].Id).is(":checked"),
    //                 "view" : $("#check-View-"+displayedData[i].Id).is(":checked"),
    //                 "create" : $("#check-Create-"+displayedData[i].Id).is(":checked"),
    //                 "approve" : $("#check-Approve-"+displayedData[i].Id).is(":checked"),
    //                 "delete" : $("#check-Delete-"+displayedData[i].Id).is(":checked"),
    //                 "process" : $("#check-Process-"+displayedData[i].Id).is(":checked"),
    //                 "edit" : $("#check-Edit-"+displayedData[i].Id).is(":checked"),
    //                 "Url": displayedData[i].Url
    //             });
    //         // }
    //     }


    // }

    // var param =  ko.mapping.toJS(rolesett.mappingRole);
    var url = "/sysroles/savedata";
    var validator = $("#AddRole").data("kendoValidator");
    if(validator==undefined){
       validator= $("#AddRole").kendoValidator().data("kendoValidator");
    }
    // rolesett.Cancel();
    // rolesett.Reset();
    if (validator.validate()) {
        ajaxPost(url, param, function(res){
            if(res.IsError != true){
                rolesett.Cancel();
                rolesett.Reset();
                $("#nav-dex").css('z-index', 'none');
                swal("Success!", res.Message, "success");
                location.reload();
            }else{
                return swal("Error!", res.Message, "error");
            }
        });
    }
}

rolesett._privToGrid = function(priv) {
    rolesett.dashboardData(priv["Dashboard"]);
    rolesett.dealSetupData(priv["Deal Setup"]);
    rolesett.webFormsData(priv["Web Forms"]);
    rolesett.dataMasterData(priv["Data Master"]);
    rolesett.helpData(priv["Help"]);
    rolesett.decisionCommitteData(priv["DecisionCommitte"]);
    rolesett.caCommitteData(priv["CaCommitte"]);
}

rolesett.EditData = function(IdRole){

    // Old Data
    var url = "/sysroles/getmenuedit";
    var param = {
            Id : IdRole
        }
        ajaxPost(url, param, function(res){
            if(!(res.IsError != true)){
                return swal("Error!", res.Message, "error");
            }
            rolesett.disableRolename(false);
            $("#roleModal").modal("show");
            $("#nav-dex").css('z-index', '0');
            $("#roleModal").modal({
                backdrop: 'static',
                keyboard: false
            });
            rolesett.titleModel("Update Roles");
            rolesett.edit(true);
            var Records = res.Data.Records[0];
            // FILL UP FORM
            rolesett.Id(Records.Id);
            rolesett.roleName(Records.Name);
            rolesett.roleType(_.get(Records, 'Records.Type', 'Custom'));
            rolesett._privToGrid(privilegesToNewRole(Records.Menu));
            rolesett.landingPage(Records.Landing);
            $('#Status').bootstrapSwitch('state',Records.Status);

            // old access layout setup

            // var landing = $("#role").data("kendoDropDownList");
            // landing.value(Records.Landing);
            var dataMenu = res.Data.Records[0].Menu;
            var newRecords = [];
            for (var d in dataMenu){
                newRecords.push({
                    "Access": dataMenu[d].Access,
                    "Approve": dataMenu[d].Approve,
                    "Checkall": dataMenu[d].Checkall,
                    "Create": dataMenu[d].Create,
                    "Delete": dataMenu[d].Delete,
                    "Edit": dataMenu[d].Edit,
                    "Enable": dataMenu[d].Enable,
                    "Haschild": dataMenu[d].Haschild,
                    "Id": dataMenu[d].Menuid,
                    "Title": dataMenu[d].Menuname,
                    "Parent": dataMenu[d].Parent,
                    "Process": dataMenu[d].Process,
                    "Url": dataMenu[d].Url,
                    "View": dataMenu[d].View,
                });
            }
            rolesett.GetDataMenu(newRecords);
    }); 
}

rolesett.Cancel = function(){
    $("#roleModal").modal("hide");
    $("#nav-dex").css('z-index', 'none');
}

rolesett.filterRole.subscribe(function(value){
  if(model.View() != "false"){
   rolesett.GetDataRole();
  }
});

var userid = model.User();
var gc = new GridColumn('role_master', userid, 'MasterGridRole');

rolesett.GetDataRole = function(){
    rolesett.loading(false);
    var param =  {
        "Name" : rolesett.filterRole(),
        "Status" : $('#filterStatus').bootstrapSwitch('state')
    };
    var dataSource = [];
    var url = "/sysroles/getdata";
    $("#MasterGridRole").html("");
    $("#MasterGridRole").kendoGrid({
            dataSource: {
                    transport: {
                        read: {
                            url: url,
                            data: param,
                            dataType: "json",
                            type: "POST",
                            contentType: "application/json",
                        },
                        parameterMap: function(data) {                                 
                           return JSON.stringify(data);                                 
                        },
                    },
                    schema: {
                        data: function(data) {
                            gc.Init();
                            rolesett.loading(false);
                            if (data.Data.Count == 0) {
                                return dataSource;
                            } else {
                                return data.Data.Records;
                            }
                        },
                        total: function(data){
                            if (data.Data.Count == 0) {
                                return 0;
                            } else {
                                return data.Data.Records.length;
                            }
                        },
                    },
                    pageSize: 15,
                    serverPaging: true,
                    serverSorting: true,
                },
                resizable: true,
                sortable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columnMenu: false,
                  columnHide: function(e) {
                    gc.RemoveColumn(e.column.field);
                  },
                  columnShow: function(e) {
                    gc.AddColumn(e.column.field);
                  },
            columns: [
                {
                    field:"Name",
                    title:"Role Name",
                    // width:150,
                    headerAttributes: {class: 'k-header header-bgcolor'},
                    template: "#if(model.Edit() != 'false'){#<a class='grid-select' id='ls' href='javascript:rolesett.EditData(\"#: Id #\")'>#: Name #</a>#}else{#<div>#: Name #</div>#}#"

                },
                {
                    field:"Status",
                    title:"Status",
                    headerAttributes: {class: 'k-header header-bgcolor'},
                    // width:50

                }]
    });
}

rolesett.getTopMenu = function(){
    var param = {
    }
    var url = "/sysroles/getmenu";
    ajaxPost(url, param, function(res){
        if(res.IsError != true){
            var dataMenu = res.Data.Records;
            console.log(dataMenu)
            var newRecords = [];
            for (var d in dataMenu){
                newRecords.push({
                    // "Id": dataMenu[d].Id,
                    // "Enable": dataMenu[d].Enable,
                    // "Haschild": dataMenu[d].Haschild,
                    // "IndexMenu": dataMenu[d].IndexMenu,
                    // // "PageId": dataMenu[d].PageId,
                    // "Parent": dataMenu[d].Parent,
                    // "Title": dataMenu[d].Title,
                    // "Url": dataMenu[d].Url,
                    // "Checkall": false,
                    // "Access": false,
                    // "Create": false,
                    // "Edit": false,
                    // "Delete": false,
                    // "View": false,
                    // "Approve": false,
                    // "Process": false

                    "Access": false,
                    "Approve":false,
                    "Checkall": false,
                    "Create": false,
                    "Delete": false,
                    "Edit": false,
                    "Enable": true,
                    "Haschild": false,
                    "Id": dataMenu[d].Id,
                    "Title": dataMenu[d].Title,
                    "Parent": dataMenu[d].Parent,
                    "Process": false,
                    "Url": dataMenu[d].Url,
                    "View": false,
                    
                });
            }

            rolesett.GetDataMenu(newRecords);
        }else{
            return swal("Error!", res.Message, "error");
        }
    });
}

rolesett.GetDataMenu = function(e){
    var myData = new kendo.data.TreeListDataSource({
        data: e,
        schema: {
            model: {
                id: "Id",
                parentId: "Parent",
                fields: {
                    _id: { field: "_id", type: "string" },
                    titleFolder: { field: "titleFolder", type: "string" },
                    parentId: { field: "Parent", type: "string" }
                },
                expanded: true
            }
        }
    });
    
    if ($("#MasterGridMenu").data("kendoTreeList") !== undefined) {
      $("#MasterGridMenu").data("kendoTreeList").setDataSource(myData);
      return;
    }

    $("#MasterGridMenu").kendoTreeList({
         dataSource: myData,
         height: 400,
         columns: [
            { 
                field: "Title",
                title:"Title", 
                width: 200 
            },
            { 
                field:"Checkall",
                title:"Check All", 
                width: 50,
                attributes:{"class": "align-center"},
                template: "#if(parentId != '' || Haschild == false){#<input id='check-all-new#:Id#' class='rolecheck-value-check-all' type='checkbox' onclick='rolesett.Checkall(#:Id#)' #: Checkall==true ? 'checked' : '' #/>#}#"
            },
            {
                field:"Access",
                title:"Access",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Access-#:Id #' class='rolecheck-value-Access' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Access==true ? 'checked' : '' #/>#}#"              
            },
            {
                field:"Create",
                title:"Create",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Create-#:Id #' class='rolecheck-value-Create' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Create==true ? 'checked' : '' #/>#}#"              
            },
            {
                field:"Edit",
                title:"Edit",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Edit-#:Id #' class='rolecheck-value-Edit' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Edit==true ? 'checked' : '' #/>#}#"  
            },
            {
                field:"Delete",
                title:"Delete",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Delete-#:Id #' class='rolecheck-value-Delete' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Delete==true ? 'checked' : '' #/>#}#"
            },
            {
                field:"View",
                title:"View",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-View-#:Id #' class='rolecheck-value-View' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: View==true ? 'checked' : '' #/>#}#"
            },
            {
                field:"Approve",
                title:"Approve",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Approve-#:Id #' class='rolecheck-value-Approve' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Approve==true ? 'checked' : '' #/>#}#"
            },
            {
                field:"Process",
                title:"Process",
                width:50,
                attributes: {"class": "align-center"},
                template:"#if(parentId != '' || Haschild == false){#<input id='check-Process-#:Id #' class='rolecheck-value-Process' onclick='rolesett.unCheck(#:Id#)' type='checkbox' #: Process==true ? 'checked' : '' #/>#}#"
            }
         ],

    });  
}

// rolesett.GetUpdateDataMenu = function(e){
//     var myData = new kendo.data.TreeListDataSource({
//         data: e,
//         schema: {
//             model: {
//                 id: "Menuid",
//                 parentId: "Parent",
//                 fields: {
//                     _id: { field: "_id", type: "string" },
//                     titleFolder: { field: "titleFolder", type: "string" },
//                     parentId: { field: "Parent", type: "string" }
//                 },
//                 expanded: true
//             }
//         }
//     });

//     if ($("#MasterUpdateGridMenu").data("kendoTreeList") !== undefined) {
//       $("#MasterUpdateGridMenu").data("kendoTreeList").setDataSource(myData);
//       return;
//     }

//     $("#MasterUpdateGridMenu").kendoTreeList({
//          dataSource: myData,
//          height: 400,
//          columns: [
//             { 
//                 field: "Menuname",
//                 title:"Title", 
//                 width: 200 
//             },
//             { 
//                 title:"Check All", 
//                 width: 50,
//                 attributes:{"class": "align-center"},
//                 template: "#if(parentId != '' || Haschild == false){#<input id='check-all-new#:Menuid#' class='rolecheck-value-check-all' type='checkbox' onclick='rolesett.Checkall(#:Menuid#)'/>#}#"
//             },
//             {
//                 field:"Access",
//                 title:"Access",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Access-#:Menuid#' class='rolecheck-value-Access' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Access==true ? 'checked' : '' #/>#}#"              
//             },
//             {
//                 field:"Create",
//                 title:"Create",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Create-#:Menuid #' class='rolecheck-value-Create' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Create==true ? 'checked' : '' #/>#}#"              
//             },
//             {
//                 field:"Edit",
//                 title:"Edit",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Edit-#:Menuid #' class='rolecheck-value-Edit' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Edit==true ? 'checked' : '' #/>#}#"  
//             },
//             {
//                 field:"Delete",
//                 title:"Delete",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Delete-#:Menuid #' class='rolecheck-value-Delete'  onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Delete==true ? 'checked' : '' #/>#}#"
//             },
//             {
//                 field:"View",
//                 title:"View",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-View-#:Menuid #' class='rolecheck-value-View' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: View==true ? 'checked' : '' #/>#}#"
//             },
//             {
//                 field:"Approve",
//                 title:"Approve",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Approve-#:Menuid #' class='rolecheck-value-Approve' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Approve==true ? 'checked' : '' #/>#}#"
//             },
//             {
//                 field:"Process",
//                 title:"Process",
//                 width:50,
//                 attributes: {"class": "align-center"},
//                 template:"#if(parentId != '' || Haschild == false){#<input id='check-Process-#:Menuid #' class='rolecheck-value-Process' onclick='rolesett.unCheck(#:Menuid#)' type='checkbox' #: Process==true ? 'checked' : '' #/>#}#"
//             }
//          ],

//     });  
// }

rolesett.unCheck = function(Menuid){
    if(!$("#check-Access-"+Menuid).prop('checked') || !$("#check-Create-"+Menuid).prop('checked') || !$("#check-Edit-"+Menuid).prop('checked') || !$("#check-Delete-"+Menuid).prop('checked') || !$("#check-View-"+Menuid).prop('checked') || !$("#check-Approve-"+Menuid).prop('checked') || !$("#check-Process-"+Menuid).prop('checked')){
        $('#check-all'+Menuid).prop('checked', false);
        $('#check-all-new'+Menuid).prop('checked', false);
    }else if($("#check-Access-"+Menuid).prop('checked') == true && $("#check-Create-"+Menuid).prop('checked')== true && $("#check-Edit-"+Menuid).prop('checked') == true && $("#check-Delete-"+Menuid).prop('checked') == true && $("#check-View-"+Menuid).prop('checked') == true && $("#check-Approve-"+Menuid).prop('checked') == true && $("#check-Process-"+Menuid).prop('checked') == true){
        $('#check-all'+Menuid).prop('checked', true);
        $('#check-all-new'+Menuid).prop('checked', true); 
    }
}

rolesett.Checkall = function(Menuid){
    $('#check-all'+Menuid).change(function(){
        $("#check-Access-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Create-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Edit-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Delete-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-View-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Approve-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Process-"+Menuid).prop('checked', $(this).prop('checked'));
    });
    $('#check-all-new'+Menuid).change(function(){
        $("#check-Access-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Create-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Edit-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Delete-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-View-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Approve-"+Menuid).prop('checked', $(this).prop('checked'));
        $("#check-Process-"+Menuid).prop('checked', $(this).prop('checked'));
    });
}

rolesett.getRole = function(){
    var param = {
    }
    var url = "/datamaster/getroles";
    rolesett.listRole([]);
    ajaxPost(url, param, function(res){
        var dataRole = Enumerable.From(res).OrderBy("$.name").ToArray();
        for (var r in dataRole){
            rolesett.listRole.push({
                "text" : dataRole[r].name,
                "value" : dataRole[r].name,
            });
        }
    });
}

rolesett.toggleFilter = function(){
  var panelFilter = $('.panel-filter');
  var panelContent = $('.panel-content');

  if (panelFilter.is(':visible')) {
    panelFilter.hide();
    panelContent.attr('class', 'col-md-12 col-sm-12 ez panel-content');
    $('.breakdown-filter').removeAttr('style');
  } else {
    panelFilter.show();
    panelContent.attr('class', 'col-md-9 col-sm-9 ez panel-content');
    //panelContent.css('margin-top', '1.3%');
    $('.breakdown-filter').css('width', '60%');
  }

  $('.k-grid').each(function (i, d) {
    try {
      $(d).data('kendoGrid').refresh();
    } catch (err) {}
  });

  $('.k-pivot').each(function (i, d) {
    $(d).data('kendoPivotGrid').refresh();
  });

  $('.k-chart').each(function (i, d) {
    $(d).data('kendoChart').redraw();
  });
  rolesett.panel_relocated();
}

rolesett.panel_relocated = function(){
  if ($('.panel-yo').size() == 0) {
    return;
  }

  var window_top = $(window).scrollTop();
  var div_top = $('.panel-yo').offset().top;
  if (window_top > div_top) {
    $('.panel-fix').css('width', $('.panel-yo').width());
    $('.panel-fix').addClass('contentfilter');
    $('.panel-yo').height($('.panel-fix').outerHeight());
  } else {
    $('.panel-fix').removeClass('contentfilter');
    $('.panel-yo').height(0);
  }
}

rolesett.getLandingPage = function(){
    var param = {
    }
    var url = "/sysroles/getlandingpage";
    rolesett.listPage([]);
    ajaxPost(url, param, function(res){
        var dataPage = Enumerable.From(res).OrderBy("$.Title").ToArray();
        for (var u in dataPage){
            rolesett.listPage.push({
                "text" : dataPage[u].Title,
                "value" : dataPage[u].Title,
            });
        }
    });
}

$(document).ready(function (){ 
    $('#filterStatus').bootstrapSwitch('state',true)
    rolesett.getRole();
    rolesett.GetDataRole();
    rolesett.getLandingPage();
});