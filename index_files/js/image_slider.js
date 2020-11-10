// Two methods for timers - setTimeout and SetInterval (single / repeating)
// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("banner_image");

var imageArray = ["./index_files/images/promo_2.jpg","./index_files/images/promo_1.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,3000);









