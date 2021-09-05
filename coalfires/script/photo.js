// Header Photo Randomizer



function randomImg() {
	
var totalImgs = 20;

	
	// Please do not modify the code below: this is the randomizer for feature images - - - - - - - - - - - - - - - - 
	
	var r = Math.round(Math.random()*totalImgs);
	if (r == 0) { r = 1; }
		
	var featureImg = "<img src='images/header" + r + ".png' name='randimg' width='748' height='319' id='randimg' border='0' alt='header photo'>";
	
	if (navigator.appVersion.indexOf('Safari') != '-1') {
	// alert("You are using a Safari web browser. You may see some odd colors in the navigation area of this website. We are working to resolve this problem. In the meantime, you have the option to download and use either Microsoft Internet Explorer or Mozilla Firefox ( http://www.mozilla.com/firefox/ )");
	}	
	else	{	
	var imgdud=""; 	
	}	
	
	// alert(featureImg);
	
	return featureImg;
	
}