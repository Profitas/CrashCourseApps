// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Crash Course Tab Start 

var firstWindow = Titanium.UI.createWindow({  
    title:'Crash Course',
    navBarHidden: true,
    backgroundColor:'#fff'
});


var firstWebView = Titanium.UI.createWebView({  
	url: 'index.html',
    backgroundColor:'#fff'
});

firstWindow.add(firstWebView);

var firstTab = Titanium.UI.createTab({  
    icon:'cc_course@2x.png',
    title:'Crash Course',
    window:firstWindow
});


firstWindow.orientationModes = [
    Titanium.UI.PORTRAIT,
    Titanium.UI.UPSIDE_PORTRAIT,
    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT,
    Titanium.UI.FACE_UP,
    Titanium.UI.FACE_DOWN
];
tabGroup.addTab(firstTab);

// Crash Course Tab End

// Cheat Sheet Tab Start 

var secondWindow = Titanium.UI.createWindow({  
    title:'Cheat Sheet',
    navBarHidden: true,
    backgroundColor:'#fff'
});


var secondWebView = Titanium.UI.createWebView({  
	url: 'cheat-sheet.html',
    backgroundColor:'#fff'
});

secondWindow.add(secondWebView);

if (Titanium.Network.online == false)
{
        var dlg = Titanium.UI.createAlertDialog({
        'title' : 'Error Loading',
        'message' : 'No Internet Connection',
        'buttonNames' : [ 'OK' ]
    });
    dlg.show();
Titanium.App.fireEvent('hide_indicator');
}

var secondTab = Titanium.UI.createTab({  
    icon:'cheatsheet@2x.png',
    title:'Cheat Sheet',
    window:secondWindow
});


secondWindow.orientationModes = [
    Titanium.UI.PORTRAIT,
    Titanium.UI.UPSIDE_PORTRAIT,
    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT,
    Titanium.UI.FACE_UP,
    Titanium.UI.FACE_DOWN
];
tabGroup.addTab(secondTab);

// Cheat Sheet Tab End

// Forum Tab Start 

var thirdWindow = Titanium.UI.createWindow({  
    title:'Forum',
    navBarHidden: true,
    backgroundColor:'#fff'
});

if (Titanium.Network.online == false)
{
        var dlg = Titanium.UI.createAlertDialog({
        'title' : 'Error Loading',
        'message' : 'No Internet Connection',
        'buttonNames' : [ 'OK' ]
    });
    dlg.show();
Titanium.App.fireEvent('hide_indicator');
}


var thirdWebView = Titanium.UI.createWebView({  
	url: 'http://crashcourseapps.com/get-ex-boyfriend-back-forum/',
    backgroundColor:'#fff'
});

thirdWindow.add(thirdWebView);

var thirdTab = Titanium.UI.createTab({  
    icon:'forum@2x.png',
    title:'Forum',
    window:thirdWindow
});

///
   // create a back button image
    var back_button = Ti.UI.createButton({
       image: 'back@2x.png',enabled:true
    });
    back_button.addEventListener('click', function(){
        thirdWebView.goBack();
    });
    // create a forward button image
    var forward_button = Ti.UI.createButton({
       image: 'forwards@2x.png',enabled:true
    });
    forward_button.addEventListener('click', function(){
        thirdWebView.goForward();
    });
    var refresh_button = Ti.UI.createButton({
        systemButton:Ti.UI.iPhone.SystemButton.REFRESH
    });
    refresh_button.addEventListener('click', function(){
        thirdWebView.reload();
    });
    // add the control buttons to the toolbar
    thirdWindow.toolbar = [back_button,refresh_button,forward_button];
    
        // show activity when loading
    thirdWebView.addEventListener('beforeload',function(e){
        loadIndBg.show();
        loadInd.show();
    }); 
    thirdWebView.addEventListener('load',function(e){
        loadIndBg.hide();
        loadInd.hide();

      // set the control buttons
        if(thirdWebView.canGoForward()){
            forward_button.enabled = true;
        } else {            
            forward_button.enabled = false;
        }
        if(thirdWebView.canGoBack()){
            back_button.enabled = true;
        } else {            
            back_button.enabled = false;
        }
        current_url = e.url;
    });

////

thirdWindow.orientationModes = [
    Titanium.UI.PORTRAIT,
    Titanium.UI.UPSIDE_PORTRAIT,
    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT,
    Titanium.UI.FACE_UP,
    Titanium.UI.FACE_DOWN
];
tabGroup.addTab(thirdTab);

// Forum Tab End

// Download Tab Start 

var fourthWindow = Titanium.UI.createWindow({  
    title:'Download',
    navBarHidden: true,
    backgroundColor:'#fff'
});

if (Titanium.Network.online == false)
{
        var dlg = Titanium.UI.createAlertDialog({
        'title' : 'Error Loading',
        'message' : 'No Internet Connection',
        'buttonNames' : [ 'OK' ]
    });
    dlg.show();
Titanium.App.fireEvent('hide_indicator');
}


var fourthWebView = Titanium.UI.createWebView({  
	url: 'http://crashcourseapps.com/download_request/exboyfriend.html',
    backgroundColor:'#fff'
});

fourthWindow.add(fourthWebView);

var fourthTab = Titanium.UI.createTab({  
    icon:'star@2x.png',
    title:'Download',
    window:fourthWindow
});

///
   // create a back button image
    var back_button2 = Ti.UI.createButton({
       image: 'back@2x.png',enabled:true
    });
    back_button2.addEventListener('click', function(){
        fourthWebView.goBack();
    });
    // create a forward button image
    var forward_button2 = Ti.UI.createButton({
       image: 'forwards@2x.png',enabled:true
    });
    forward_button2.addEventListener('click', function(){
        fourthWebView.goForward();
    });
    var refresh_button2 = Ti.UI.createButton({
        systemButton:Ti.UI.iPhone.SystemButton.REFRESH
    });
    refresh_button2.addEventListener('click', function(){
        fourthWebView.reload();
    });
    // add the control buttons to the toolbar
    fourthWindow.toolbar = [back_button2,refresh_button2,forward_button2];
    
        // show activity when loading
    fourthWebView.addEventListener('beforeload',function(z){
        loadIndBg.show();
        loadInd.show();
    }); 
    fourthWebView.addEventListener('load',function(z){
        loadIndBg.hide();
        loadInd.hide();

      // set the control buttons
        if(fourthWebView.canGoForward()){
            forward_button2.enabled = true;
        } else {            
            forward_button2.enabled = false;
        }
        if(fourthWebView.canGoBack()){
            back_button2.enabled = true;
        } else {            
            back_button2.enabled = false;
        }
        current_url = z.url;
    });

////

fourthWindow.orientationModes = [
    Titanium.UI.PORTRAIT,
    Titanium.UI.UPSIDE_PORTRAIT,
    Titanium.UI.LANDSCAPE_LEFT,
    Titanium.UI.LANDSCAPE_RIGHT,
    Titanium.UI.FACE_UP,
    Titanium.UI.FACE_DOWN
];
tabGroup.addTab(fourthTab);

// Download Tab End

// open tab group
tabGroup.open();
