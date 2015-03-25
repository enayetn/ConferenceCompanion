function takePicture() {
  navigator.camera.getPicture(function(imageURI) {

    // imageURI is the URL of the image that we can use for
    // an <img> element or backgroundImage.
	 $( "#take-img" ).css( "background-image", "data:image/jpeg;base64,"+imageURI);
	 //alert(imageURI)


  }, function(err) {

    // Ruh-roh, something bad happened
    alert(err);

  });
}