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
	var FontHighColor="black";			// Font color when mouse is over
	var BorderColor="";			// Border color
	var BorderWidthMain=2;			// Border width main items
	var BorderWidthSub=1;			// Border width sub items
 	var BorderBtwnMain=1;			// Border width between elements main items
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
	var StartTop=21;				// Menu offset x coordinate
	var StartLeft=15;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
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

var subheight = '24';
var subwidth  = '230';
var bgcolor   = '#e7e6e5';
var bghighcolor = '#9b9b9c';
var myfontcolor = '#535353';
var fonthighcolor = '#FFFFFF';
var bordercolor = '#535353';
var fontfamily = 'Verdana';
var myfontsize = '-1';

var pgTheme = extractFileName(document.styleSheets[1].href);

pgTheme = "home";

var menuTheme = "nav2/" + pgTheme;

// alert ("menuTheme = " + menuTheme);


Menu1=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"1a.png?"+BaseHref+"/images/"+menuTheme+"1b.png","/about/about.html","",4,24,197,"","","","","","",-1,-1,-1,"","About DOH");
	Menu1_1=new Array("Purpose & Beliefs","/about/beliefs.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_2=new Array("Worship & Prayer","/about/worship.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_3=new Array("Salvation & Baptism","/about/salvation.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu1_4=new Array("DOH Staff","/about/staff.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu2=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"2a.png?"+BaseHref+"/images/"+menuTheme+"2b.png","/children/children.html","",3,24,120,"","","","","","",-1,-1,-1,"","");
	Menu2_1=new Array("Nursery","/children/nursery.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu2_2=new Array("Preschool","/children/preschool.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu2_3=new Array("Elementary","/children/elementary.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu3=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"3a.png?"+BaseHref+"/images/"+menuTheme+"3b.png","/youth/youth.html","",2,24,120,"","","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("Jr High","/youth/jrhigh.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu3_2=new Array("Sr High","/youth/srhigh.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu4=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"4a.png?"+BaseHref+"/images/"+menuTheme+"4b.png","/adults/adults.html","",7,24,120,"","","","","","",-1,-1,-1,"","");
	Menu4_1=new Array("Classes","/adults/classes.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_2=new Array("Equipping Tracks","/adults/equipping.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_3=new Array("Beacon Institute of Ministry","/adults/beacon.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_4=new Array("Small Groups","/adults/groups.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_5=new Array("Married","/adults/married.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_6=new Array("Women","/adults/women.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu4_7=new Array("Men","/adults/men.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu5=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"5a.png?"+BaseHref+"/images/"+menuTheme+"5b.png","/community/community.html","",2,24,120,"","","","","","",-1,-1,-1,"","");
	Menu5_1=new Array("Community Resources","/community/resources.html","",7,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_1=new Array("CareNet Pregnancy Resource Center","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_2=new Array("Food Bank","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_3=new Array("Healing Rooms","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_4=new Array("Inter-Varsity (UAF)","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_5=new Array("Joel\"s Place","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_6=new Array("Love INC","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
		Menu5_1_7=new Array("Rescue Mission","/community/resources.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu5_2=new Array("Counseling","/community/counseling.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu6=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"6a.png?"+BaseHref+"/images/"+menuTheme+"6b.png","/missions/missions.html","",3,24,120,"","","","","","",-1,-1,-1,"","");
	Menu6_1=new Array("Missionaries","/missions/missionaries.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu6_2=new Array("Alaska Medical Missions","/missions/medical.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu6_3=new Array("Mission Trips","/missions/trips.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
Menu7=new Array("rollover?"+BaseHref+"/images/"+menuTheme+"7a.png?"+BaseHref+"/images/"+menuTheme+"7b.png","/giving/giving.html","",4,24,120,"","","","","","",-1,-1,-1,"","");
	Menu7_1=new Array("Tithes & Offerings","/giving/tithes.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu7_2=new Array("Registrations & Payments","/giving/reg.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu7_3=new Array("Volunteering","/giving/volunteer.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
	Menu7_4=new Array("Creative Giving","/giving/creative.html","",0,subheight,subwidth,bgcolor,bghighcolor,myfontcolor,fonthighcolor,bordercolor,fontfamily,myfontsize,-1,-1,"","");
