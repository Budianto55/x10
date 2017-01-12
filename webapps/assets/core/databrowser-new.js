var databrowser = {};
databrowser.applicantdetailcoll = [{
	field : "CA.applicantdetail.CustomerRegistrationNumber",
	title : "Registration Number",
	hidden : false,
	width : 100,
	headerTemplate : "Registration </br> Number",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.applicantdetail.CustomerPan",
	title : "PAN",
	hidden : false,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
// {
// 	field : "CA.applicantdetail.CustomerName",
// 	title : "Customer Name",
// 	hidden : true,
// 	width : 100
// },
{
	field : "CA.applicantdetail.DateOfIncorporation",
	title : "Date of Incorporation",
	hidden : true,
	template : function(dt){
		if(dt.CA.applicantdetail.DateOfIncorporation == null || dt.CA.applicantdetail.DateOfIncorporation.indexOf("0001") > -1 ||  dt.CA.applicantdetail.DateOfIncorporation.indexOf("date") > -1){
			return "";
		}

		return moment(dt.CA.applicantdetail.DateOfIncorporation).format("DD-MMM-YYYY")
	},
	width : 100,
	headerTemplate : "Date of </br> Incorporation",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.applicantdetail.CustomerConstitution",
	title : "Constitution of the Entity",
	hidden : true,
	width : 100,
	headerTemplate : "Constitution of </br> the Entity",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.applicantdetail.TIN",
	title : "TIN",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.applicantdetail.TAN",
	title : "TAN",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.applicantdetail.CIN",
	title : "CIN",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
]

databrowser.nonrefundcoll = [
{
	field : "CA.nonrefundableprocessingfeesdetails.InstrumentType",
	title : "Instrument Type",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.nonrefundableprocessingfeesdetails.InstrumentNo",
	title : "Instrument No",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.nonrefundableprocessingfeesdetails.InstrumentDate",
	title : "Instrument Date",
	hidden : true,
	template : function(dt){
		if(dt.CA.nonrefundableprocessingfeesdetails.InstrumentDate == null || dt.CA.nonrefundableprocessingfeesdetails.InstrumentDate.indexOf("0001") > -1 ||  dt.CA.nonrefundableprocessingfeesdetails.InstrumentDate.indexOf("date") > -1){
			return "";
		}
		return moment(dt.CA.nonrefundableprocessingfeesdetails.InstrumentDate).format("DD-MMM-YYYY")
	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.nonrefundableprocessingfeesdetails.BankName",
	title : "Bank Name",
	hidden : false,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "CA.nonrefundableprocessingfeesdetails.Amount",
	title : "Amount",
	hidden : false,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
]

databrowser.accsetupcoll = [
{
	field : "AD.accountsetupdetails.cityname",
	title : "City Name",
	hidden : false,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.logindate",
	title : "Login Date",
	hidden : false,
	template : function(dt){
		if(dt.AD.accountsetupdetails.logindate == null || dt.AD.accountsetupdetails.logindate.indexOf("0001") > -1 ||  dt.AD.accountsetupdetails.logindate.indexOf("date") > -1){
			return "";
		}

		return moment(dt.AD.accountsetupdetails.logindate).format("DD-MMM-YYYY")
	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.rmname",
	title : "RM Name",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.brhead",
	title : "Branch Head",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.creditanalyst",
	title : "Credit Analyst",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.leaddistributor",
	title : "Lead Distributor",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.product",
	title : "Product",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.accountsetupdetails.scheme",
	title : "Scheme",
	hidden : true,
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
},
// {
// 	field : "AD.accountsetupdetails.dealno",
// 	title : "Deal No",
// 	hidden : true,
// 	width : 100
// },
]


databrowser.loandetailscoll = [
{
	field : "AD.loandetails.proposedloanamount",
	title : "Requested Loan Amount",
	hidden : false,
	width : 100,
	headerTemplate : "Requested Loan </br> Amount",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.limittenor",
	title : "Limit Tenor (Months)",
	hidden : true,
	width : 100,
	headerTemplate : "Limit Tenor </br> (Months)",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.proposedrateinterest",
	title : "Proposed Rate of Interest (ROI) %",
	hidden : true,
	width : 100,
	headerTemplate : "Proposed Rate of </br> Interest (ROI) %",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.interestoutgo",
	title : "Proposed X10 Interest Outgo in (Rs. Lacs)",
	hidden : true,
	width : 100,
	headerTemplate : "Proposed X10 Interest </br> Outgo in (Rs. Lacs)",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.requestedlimitamount",
	title : "Proposed Amount of Limit (Rs. Lacs)",
	hidden : false,
	width : 100,
	headerTemplate : "Proposed Amount of </br> Limit (Rs. Lacs)",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.loantenordays",
	title : "Loan Tenor (Days)",
	hidden : true,
	width : 100,
	headerTemplate : "Loan Tenor </br> (Days)",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.proposedpfee",
	title : "Proposed Processing Fee %",
	hidden : true,
	width : 100,
	headerTemplate : "Proposed Processing </br> Fee %",
	headerAttributes: { "class": "sub-bgcolor" },
},
{
	field : "AD.loandetails.ifexistingcustomer",
	title : "Existing Customer",
	hidden : false,
	width : 100,
	headerTemplate : "Existing </br> Customer",
	template : function(dt){
		if(dt.AD.loandetails.ifexistingcustomer){
			return "Yes"
		}

		return "No"
	},
	headerAttributes: { "class": "sub-bgcolor" },
},
];

databrowser.fullcoll = [
 {
	field : "CA.applicantdetail.DealNo",
	title : "Deal No",
	hidden : false,
	width : 150,
	headerAttributes: { "class": "sub-bgcolor" },
},
 {
 	title : "Name of the Customer",
 	field : "CA.applicantdetail.CustomerName",
	width : 200,
	headerAttributes: { "class": "sub-bgcolor" },
 },
 {
 	title : "Applicant Details",
 	columns : databrowser.applicantdetailcoll,
 	headerTemplate : function(dt){
 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "applicant" +"\")'>Applicant Details <i class='fa fa-forward' aria-hidden='true'></i></a>"
 	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 },
 {
 	title : "Financial Information",
 	columns : [
 	{
 		title : "Previous Loan Details",
 		template :  function(dt){
 			return "<button onclick='databrowser.GoPrev(\""+ dt.CA._id +"\")'>Details..</button>"
 		},
		width : 100,
		headerTemplate : "Previous Loan </br> Details",
	headerAttributes: { "class": "sub-bgcolor" },
 	},
 	{
 		title : "Details Pertaining to Bankers / FIs",
 		template :  function(dt){
 			return "<button onclick='databrowser.GoDet(\""+ dt.CA._id +"\")'>Details..</button>"
 		},
		width : 100 ,
		headerTemplate : "Details Pertaining </br> to Bankers / FIs",
	headerAttributes: { "class": "sub-bgcolor" },
 	},
 	{
 		title : "Existing Relationship With X10 Financial Services Limited",
 		template :  function(dt){
 			return "<button onclick='databrowser.GoExis(\""+ dt.CA._id +"\")'>Details..</button>"
 		},
		width : 100 ,
		headerTemplate : "Existing Relationship </br> With X10 Financial Services Limited",
	headerAttributes: { "class": "sub-bgcolor" },
 	},
 	],
	headerAttributes: { "class": "sub-bgcolor" },
 },
 {
 	title : "Non-Refundable Processing Fee Details",
 	columns : databrowser.nonrefundcoll,
 	headerTemplate : function(dt){
 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "nonrefund" +"\")'>Non-Refundable Processing </br>Fee Details <i class='fa fa-forward' aria-hidden='true'></a>"
 	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 }
 ,
 {
 	title : "Details of Promoters/Directors/Guarantors",
 	headerTemplate : "Details of </br>Promoters/Directors/Guarantors",
 	columns : [
 		{
 			title : "Name",
 			template : function(dt){
 				var str = "<table class='intable'>";
 				for(var i in dt.CA.detailofpromoters.biodata){
 					if(dt.CA.detailofpromoters.biodata[i].Name == undefined){
 						break;
 					}

 					str += "<tr>"
 					str += "<td>" + dt.CA.detailofpromoters.biodata[i].Name + "</td>"
 					str+="</tr>"
 				}
 				str += "</table>";
 				return str;
 			},
			width : 150,
	headerAttributes: { "class": "sub-bgcolor" },
 		},
 		{
 			title : "Guarantor",
 			template : function(dt){
 				var str = "<table class='intable'>";
 				for(var i in dt.CA.detailofpromoters.biodata){
 					if(dt.CA.detailofpromoters.biodata[i].Guarantor == undefined){
 						break;
 					}

 					str += "<tr>"

 					if(dt.CA.detailofpromoters.biodata[i].Guarantor){
	 					str += "<td>Yes</td>"
	 				}else{
	 					str += "<td>No</td>"
	 				}
 					
 					str+="</tr>"
 				}
 				str += "</table>";
 				return str;
 			},
			width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 		},
 		{
 			title : "Promoter",
 			template : function(dt){
 				var str = "<table class='intable'>";
 				for(var i in dt.CA.detailofpromoters.biodata){
 					if(dt.CA.detailofpromoters.biodata[i].Promotor == undefined){
 						break;
 					}

 					str += "<tr>"
 					
 					if(dt.CA.detailofpromoters.biodata[i].Promotor){
	 					str += "<td>Yes</td>"
	 				}else{
	 					str += "<td>No</td>"
	 				}

 					str+="</tr>"
 				}
 				str += "</table>";
 				return str;
 			},
			width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 		},
 		{
 			title : "Director",
 			template : function(dt){
 				var str = "<table class='intable'>";
 				for(var i in dt.CA.detailofpromoters.biodata){
 					if(dt.CA.detailofpromoters.biodata[i].Director == undefined){
 						break;
 					}

 					str += "<tr>"
 					
 					if(dt.CA.detailofpromoters.biodata[i].Director){
	 					str += "<td>Yes</td>"
	 				}else{
	 					str += "<td>No</td>"
	 				}

 					str+="</tr>"
 				}
 				str += "</table>";
 				return str;
 			},
			width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 		},
 		{
 			title : "Details",
 			template : function(dt){ return "<button onclick='databrowser.GoProm(\""+ dt.CA._id +"\")'>Details..</button>" },
			width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 		},
 	],
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 },
 {
 	title : "Account Set-up Details",
 	columns : databrowser.accsetupcoll,
 	headerTemplate : function(dt){
 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "accsetup" +"\")'>Account Set-up Details <i class='fa fa-forward' aria-hidden='true'></a>"
 	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 },
 {
 	title : "Loan Details",
 	columns : databrowser.loandetailscoll,
 	headerTemplate : function(dt){
 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "loandet" +"\")'>Loan Details <i class='fa fa-forward' aria-hidden='true'></a>"
 	},
	width : 100,
	headerAttributes: { "class": "sub-bgcolor" },
 }
]

databrowser.statusexpand = {
	applicant : false,
	nonrefund : false,
	accsetup : false,
	loandet : false
}

databrowser.expand = function(text){
	if(text == "applicant"){
		if(databrowser.statusexpand[text]){
			databrowser.fullcoll[2].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "applicant" +"\")'>Applicant Details <i class='fa fa-forward' aria-hidden='true'></a>"
		 	}
		 	for(var i in databrowser.applicantdetailcoll){
		 		databrowser.applicantdetailcoll[i].hidden = true;
		 	}

		 	databrowser.applicantdetailcoll[0].hidden = false;
		 	databrowser.applicantdetailcoll[1].hidden = false;
		 	databrowser.fullcoll[2].columns = databrowser.applicantdetailcoll;

			//close
		}else{
			databrowser.fullcoll[2].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "applicant" +"\")'>Applicant Details <i class='fa fa-backward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.applicantdetailcoll){
		 		databrowser.applicantdetailcoll[i].hidden = false;
		 	}
		 	databrowser.fullcoll[2].columns = databrowser.applicantdetailcoll;
			//open
		}
	}else if (text == "nonrefund"){
		if(databrowser.statusexpand[text]){
			databrowser.fullcoll[4].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "nonrefund" +"\")'>Non-Refundable Processing </br> Fee Details <i class='fa fa-forward' aria-hidden='true'></a>"
		 	}

			for(var i in databrowser.nonrefundcoll){
		 		databrowser.nonrefundcoll[i].hidden = true;
		 	}

		 	databrowser.nonrefundcoll[3].hidden = false;
		 	databrowser.nonrefundcoll[4].hidden = false;
		 	databrowser.fullcoll[4].columns = databrowser.nonrefundcoll;

			//close
		}else{
			databrowser.fullcoll[4].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "nonrefund" +"\")'>Non-Refundable Processing </br> Fee Details <i class='fa fa-backward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.nonrefundcoll){
		 		databrowser.nonrefundcoll[i].hidden = false;
		 	}
		 	databrowser.fullcoll[4].columns = databrowser.nonrefundcoll;
			//open
		}
	}else if (text == "accsetup"){
		if(databrowser.statusexpand[text]){
			databrowser.fullcoll[5].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "accsetup" +"\")'>Account Set-up Details <i class='fa fa-forward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.accsetupcoll){
		 		databrowser.accsetupcoll[i].hidden = true;
		 	}

		 	databrowser.accsetupcoll[0].hidden = false;
		 	databrowser.accsetupcoll[1].hidden = false;
		 	databrowser.fullcoll[5].columns = databrowser.accsetupcoll;

			//close
		}else{
			databrowser.fullcoll[5].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "accsetup" +"\")'>Account Set-up Details <i class='fa fa-backward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.accsetupcoll){
		 		databrowser.accsetupcoll[i].hidden = false;
		 	}
		 	databrowser.fullcoll[5].columns = databrowser.accsetupcoll;
			//open
		}
	}else if (text == "loandet"){
		if(databrowser.statusexpand[text]){
			databrowser.fullcoll[6].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "loandet" +"\")'>Loan Details <i class='fa fa-forward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.loandetailscoll){
		 		databrowser.loandetailscoll[i].hidden = true;
		 	}

		 	databrowser.loandetailscoll[0].hidden = false;
		 	databrowser.loandetailscoll[4].hidden = false;
		 	databrowser.loandetailscoll[7].hidden = false;
		 	databrowser.fullcoll[6].columns = databrowser.loandetailscoll;

			//close
		}else{
			databrowser.fullcoll[6].headerTemplate = function(dt){
		 		return "<a class='grid-select' href='javascript:databrowser.expand(\""+ "loandet" +"\")'>Loan Details <i class='fa fa-backward' aria-hidden='true'></a>"
		 	}

		 	for(var i in databrowser.loandetailscoll){
		 		databrowser.loandetailscoll[i].hidden = false;
		 	}
		 	databrowser.fullcoll[6].columns = databrowser.loandetailscoll;
			//open
		}
	}
	databrowser.statusexpand[text] = !databrowser.statusexpand[text] 
	dbgrid.setOptions({ columns :  databrowser.fullcoll })
	dbgrid.refresh();
}

databrowser.GoPrev = function(id){
	var ids=id.split("|");
	 window.open("/datacapturing/customerprofileinfo?customerid="+ids[0]+"&dealno="+ids[1]+"&scrollto=Previous Loan Details (Non X10 loans)")
}
databrowser.GoDet = function(id){
	var ids=id.split("|");
	 window.open("/datacapturing/customerprofileinfo?customerid="+ids[0]+"&dealno="+ids[1]+"&scrollto=Details Pertaining to Bankers")
}
databrowser.GoExis = function(id){
	var ids=id.split("|");
	 window.open("/datacapturing/customerprofileinfo?customerid="+ids[0]+"&dealno="+ids[1]+"&scrollto=Existing Relationship With X10")
}

databrowser.GoProm = function(id){
	var ids=id.split("|");
	 window.open("/datacapturing/customerprofileinfo?customerid="+ids[0]+"&dealno="+ids[1]+"&scrollto=Details of Promoters/Directors/Guarantors")
}

var dbgrid = ""

databrowser.GetDataGrid = function(){
	ajaxPost("/accountdetail/getdatabrowser",{ city : [], product : [], brhead : [], scheme : [], rm : [], ca : [] }, function(data){
		databrowser.normalisasiAD(data.Data);
		dbgrid = $("#griddb").kendoGrid({
			 dataSource: {
			 	data : data.Data,
			 	pageSize: 5
			 },
			 columns : databrowser.fullcoll,
			 scrollable : true,
			 pageable: true,
			 dataBinding: function(x) {
			 	setTimeout(function(){
			 		_.each($(".intable").parent(),function(e){
						$(e).css("padding",0)
					})
			 	},10)
			}
		}).data("kendoGrid");
	})
}

databrowser.normalisasiAD = function(dt){
	_.forEach(dt,function(val){
		_.forEach(val.AD,function(x,i){
		val.AD[i.toLowerCase()] = x;
	});
	});
}

$(document).ready(function(){
	databrowser.GetDataGrid();
})