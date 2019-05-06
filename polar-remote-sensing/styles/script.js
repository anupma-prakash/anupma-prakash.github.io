// JavaScript Document


function detectBrowser () {
	
	var browserName=navigator.appName; 
	 
	 document.styleSheets[0].href = "styles.css";
	 
	 if (browserName=="Microsoft Internet Explorer")
		 {
		  alert(browserName);
		  document.styleSheets[0].href = "styles_ie.css";
		 }
	
}