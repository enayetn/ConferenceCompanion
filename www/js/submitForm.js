$( "form" ).submit(function( event ) {

  	var requestBody = {'contact_name':'Jeff','contact_company':'Evergreen','contact_e_mail':'Jeff@evergreensys.com','contact_phone':'+12837465748'}; 
	/*
	var client = new XMLHttpRequest();
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
	
	client.send(requestBody);
	*/
	
	var trackingJSON = JSON.stringify(requestBody);
	var urlAjax =  "https://mktgcalg14.service-now.com/api/now/table/x_snc_conference_c_conference_companion_table?&sysparm_fields=sys_id";

	$.ajax({
	    type: "POST",
	    url: urlAjax,
		username: 'admin',
		password: 'admin',
	    accept: "application/json",
	    contentType: "application/json",
	    data: trackingJSON,
	    //beforeSend: function() { $.mobile.showPageLoadingMsg("b", "Loading...", true) },
	    //complete: function() { $.mobile.hidePageLoadingMsg() },
	    success: function(data) { alert("ajax worked"); },
	    error: function(data) {alert("ajax error: " + JSON.stringify(data)); },
	    dataType: 'json'
	});

  	
});
