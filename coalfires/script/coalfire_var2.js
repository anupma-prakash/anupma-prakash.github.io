 /***********************************************
*	(c) Ger Versluis 2000 version 13.20 October 12, 2005    *
*	You may use this script on non commercial sites.	          *
*	www.burmees.nl/menu			          *
*	You may remove all comments for faster loading	          *		
************************************************/
	var NoOffFirstLineMenus=7;			// Number of main menu  items
						// Colorvariables:
						// Color variables take HTML predefined color names or "#rrggbb" strings
						//For transparency make colors and border color ""
	var LowBgColor="";			// Background color when mouse is not over
	var HighBgColor="";			// Background color when mouse is over
	var FontLowColor="white";			// Font color when mouse is not over
	var FontHighColor="#c9c9c9";			// Font color when mouse is over
	var BorderColor="";			// Border color
	var BorderWidthMain=2;			// Border width main items
	var BorderWidthSub=1;			// Border width sub items
 	var BorderBtwnMain=2;			// Border width between elements main items
	var BorderBtwnSub=1;			// Border width between elements sub items
	var FontFamily="arial";	// Font family menu items
	var FontSize=11;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered="left";		// Item text position left, center or right
	var MenuCentered="left";			// Menu horizontal position can be: left, center, right
	var MenuVerticalCentered="top";		// Menu vertical position top, middle,bottom or static
	var ChildOverlap=-.008;			// horizontal overlap child/ parent
	var ChildVerticalOverlap=0;			// vertical overlap child/ parent
	var StartTop=-25;				// Menu offset x coordinate
	var StartLeft=15;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=2;				// Multiple frames x correction
	var DistFrmFrameBrdr=5;			// ***** Distance between main menu and frame border
	var LeftPaddng=9;				// Left padding
	var TopPaddng=5;				// Top padding. If set to -1 text is vertically centered
	var FirstLineHorizontal=1;			// Number defines to which level the menu must unfold horizontal; 0 is all vertical
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var UnfoldDelay=100;			// delay before sub unfolds	
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame="";			// Frame where first level appears
	var SecLineFrame="";			// Frame where sub levels appear
	var DocTargetFrame="";			// Frame where target documents appear
	var TargetLoc="nav";			// span id for relative positioning
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var BottomUp=0;				// enables/ disables Bottom up unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var MaskHeaderPhoto=0;			//***SCM*** 1 allows masking effect over header photo
	var BaseHref= "";
	
						// document.location.href.substring(0,document.location.href.lastIndexOf("/")+1);				
						// BaseHref lets you specify the root directory for relative links. 
						// The script precedes your relative links with BaseHref
						// For instance: 
						// when your BaseHref= "http://www.MyDomain/" and a link in the menu is "subdir/MyFile.htm",
						// the script renders to: "http://www.MyDomain/subdir/MyFile.htm"
						// Can also be used when you use images in the textfields of the menu
						// "MenuX=new Array("<img src=\""+BaseHref+"MyImage\">"
						// For testing on your harddisk use syntax like: BaseHref="file:///C|/MyFiles/Homepage/"

	var Arrws=[BaseHref+"tri.gif",5,10,BaseHref+"tridown.gif",10,5,BaseHref+"trileft.gif",5,10,BaseHref+"triup.gif",10,5];

						// Arrow source, width and height.
						// If arrow images are not needed keep source ""

	var MenuUsesFrames=0;			// MenuUsesFrames is only 0 when Main menu, submenus,
						// document targets and script are in the same frame.
						// In all other cases it must be 1

	var RememberStatus=0;			// RememberStatus: When set to 1, menu unfolds to the presetted menu item. 
						// When set to 2 only the relevant main item stays highligthed
						// The preset is done by setting a variable in the head section of the target document.
						// <head>
						//	<script type="text/javascript">var SetMenu="2_2_1";</script>
						// </head>
						// 2_2_1 represents the menu item Menu2_2_1=new Array(.......

	var BuildOnDemand=0;			// 1/0 When set to 1 the sub menus are build when the parent is moused over
	var BgImgLeftOffset=10;			// Only relevant when bg image is used as rollover
	var ScaleMenu=0;				// 1/0 When set to 0 Menu scales with browser text size setting
	var OverFormElements=0;			// Set this to 0 when the menu does not need to cover form elements.

	var HooverBold=0;				// 1 or 0
	var HooverItalic=0;				// 1 or 0
	var HooverUnderLine=0;			// 1 or 0
	var HooverTextSize=0;			// 0=off, number is font size difference on hoover
	var HooverVariant=0;			// 1 or 0

						// Below some pretty useless effects, since only IE6+ supports them
						// I provided 3 effects: MenuSlide, MenuShadow and MenuOpacity
						// If you don't need MenuSlide just leave in the line var MenuSlide="";
						// delete the other MenuSlide statements
						// In general leave the MenuSlide you need in and delete the others.
						// Above is also valid for MenuShadow and MenuOpacity
						// You can also use other effects by specifying another filter for MenuShadow and MenuOpacity.
						// You can add more filters by concanating the strings
	var MenuSlide="";
	var MenuSlide="progid:DXImageTransform.Microsoft.RevealTrans(duration=.5, transition=19)";
	var MenuSlide="progid:DXImageTransform.Microsoft.GradientWipe(duration=.5, wipeStyle=1)";

	var MenuShadow="";
	var MenuShadow="progid:DXImageTransform.Microsoft.DropShadow(color=#888888, offX=2, offY=2, positive=1)";
	var MenuShadow="progid:DXImageTransform.Microsoft.Shadow(color=#888888, direction=135, strength=3)";

	var MenuOpacity="";
	var MenuOpacity="progid:DXImageTransform.Microsoft.Alpha(opacity=100)";

	function BeforeStart(){return}
	function AfterBuild(){return}
	function BeforeFirstOpen(){return}
	function AfterCloseAll(){return}

// Menu tree:
// MenuX=new Array("ItemText","Link","background image",number of sub elements,height,width,"bgcolor","bghighcolor",
//	"fontcolor","fonthighcolor","bordercolor","fontfamily",fontsize,fontbold,fontitalic,"textalign","statustext");
// Color and font variables defined in the menu tree take precedence over the global variables
// Fontsize, fontbold and fontitalic are ignored when set to -1.
// For rollover images ItemText or background image format is:  "rollover?"+BaseHref+"Image1.jpg?"+BaseHref+"Image2.jpg" 

var subheight = '22';
var subwidth  = '170';
var bgcolor   = '#e7e6e5';
var bghighcolor = '#9b9b9c';
var myfontcolor = '#302e2d';
var fonthighcolor = '#FFFFFF';
var bordercolor = '#535353';
var fontfamily = 'Verdana';
var myfontsize = '-1';

var mainbg = '#302e2d';

/*var pgTheme = extractFileName(document.styleSheets[1].href);

pgTheme = "home";

var menuTheme = "nav2/" + pgTheme;*/

// alert ("menuTheme = " + menuTheme);


Menu1=new Array("About Coal Fires","#","",5,24,100,mainbg,"","","","","",-1,-1,-1,"","About DOH");
	Menu1_1=new Array("Introduction","coalfires.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_2=new Array("Causes and Hazards","causes_hazards.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_3=new Array("Global Distribution","global_distribution.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_4=new Array("Spontaneous Combustion","spontaneous_combustion.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_5=new Array("CO2 Emission","co2_emission.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu2=new Array("Coal Fires in India","india.html","",2,24,100,mainbg,"","","","","",-1,-1,-1,"","");
	Menu2_1=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu2_2=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
Menu3=new Array("Coal Fires in China","china.html","",2,24,105,mainbg,"","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu3_2=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
Menu4=new Array("Photo Gallery","photos.html","",2,24,80,mainbg,"","","","","",-1,-1,-1,"","");
	Menu4_1=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_2=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
Menu5=new Array("Public Interest","public_interest.html","",2,24,85,mainbg,"","","","","",-1,-1,-1,"","");
	Menu5_1=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu5_2=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
Menu6=new Array("FAQs on Coal Fires","faq.html","",3,24,110,mainbg,"","","","","",-1,-1,-1,"","");
	Menu6_1=new Array("General FAQ","faq_general.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu6_2=new Array("China FAQ","faq_china.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu6_3=new Array("India FAQ","faq_india.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
Menu7=new Array("Related Links","links.html","",2,24,80,mainbg,"","","","","",-1,-1,-1,"","");
	Menu7_1=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu7_2=new Array("","#","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	
