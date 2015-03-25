$( "form" ).submit(function( event ) {

  	var requestBody = "{'Jeff':'','Evergreen':'','Jeff@evergreensys.com':'','+12837465748':''}"; 

	/*var client = new XMLHttpRequest();
	client.open("post","https://mktgcalg14.service-now.com/api/now/table/x_snc_conference_c_conference_companion_table?&sysparm_fields=sys_id", true);

	client.setRequestHeader('Accept','application/json');
	client.setRequestHeader('Content-Type','application/json');
	
	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));


	client.onreadystatechange = function() { 
		if(this.readyState = this.DONE) {
			alert("This is the response: " + this.status + this.response);
		}
	}; 
	
	client.send(requestBody);*/

	var trackingJSON = JSON.stringify(requestBody);
	var urlAjax =  "https://mktgcalg14.service-now.com/api/now/table/x_snc_conference_c_conference_companion_table?&sysparm_fields=sys_id";

	$.ajax({
	    type: "POST",
	    url: urlAjax,
	    accept: "application/json",
	    contentType: "application/json",
	    data: trackingJSON,
	    //beforeSend: function() { $.mobile.showPageLoadingMsg("b", "Loading...", true) },
	    //complete: function() { $.mobile.hidePageLoadingMsg() },
	    success: function(data) { alert("ajax worked"); },
	    error: function(data) {alert("ajax error"); },
	    dataType: 'json'
	});

  	
});