$('document').ready(function(){

    // adding screensaver to the page
    var screensaverUrls = [
        'https://fluxus.cca.edu/~rohan/screensaver2/',
        'https://fluxus.cca.edu/~wangyuyao/interactive1/screensaver/index.html',
        'https://fluxus.cca.edu/~jpardee/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~zhouqilu/interactive2/exercises/screensaver/index.html'
    ]

    var screensaverDesigners = [
        'Rohan',
        'Yuyao',
        'Joanna',
        'Qilu'
    ]

    const randomScreensaver = Math.floor(Math.random() * screensaverUrls.length);


    var screensaverCode = '<div id="screensaver"><iframe src="'+screensaverUrls[randomScreensaver]+'"></iframe><div id="screensaver-designer">Screensaver by '+screensaverDesigners[randomScreensaver]+'</div></div>';
    // $('body').append(screensaverCode);

    var mouseIdle;
    var screensaverState = false;
    var timeIdle = 3;

    function displayScreensaver(){
        $('#screensaver').addClass('show');
        screensaverState = true;
    }
    
    function stopScreensaver(){
        $('#screensaver').removeClass('show');
        screensaverState = false;
    };
    
    $(document).click(function(){
        clearTimeout(mouseIdle);
        
        if (screensaverState){
            stopScreensaver();
        }
        
        mouseIdle = setTimeout(function(){
            displayScreensaver();
        }, 1000 * timeIdle);
    });
    
    $(document).mousemove(function(){
        clearTimeout(mouseIdle);
        
        if (screensaverState){
            stopScreensaver();
        }
        
        mouseIdle = setTimeout(function(){
            displayScreensaver();
        }, 1000 * timeIdle);
    });

});