$('document').ready(function(){

    var emoji = ["🌏", "✍️", "☃️", "😞", "👽", "😻", "🐼", "🥇"];
    var randomemoji = Math.floor(Math.random() * emoji.length);

    $('.logo-emoji').html(emoji[randomemoji]);    

    // adding screensaver to the page
    var screensaverUrls = [
        'https://fluxus.cca.edu/~rohan/screensaver2/',
        'https://fluxus.cca.edu/~wangyuyao/interactive1/screensaver/index.html',
        'https://fluxus.cca.edu/~jpardee/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~zhouqilu/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~lphan/interactive2/exercises/screensaver-starterkit/',
        'https://fluxus.cca.edu/~hujenny0318/Interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~morganwash/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~jaderafael/interactive2/screensaver/index.html',
        'https://fluxus.cca.edu/~wangelina/interactive2/screensaver/p2index.html',
        'https://fluxus.cca.edu/~yashmishah/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~mengzihan/interactive2/exercises/screen%20saver/screensaver.html',
        'https://fluxus.cca.edu/~luyxu/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~jie-i/Interactive2/exercise/screensaver/index.html',
        'https://fluxus.cca.edu/~jyu.l/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~hongyuz/interactive2/exercises/screensaver/screensaver.html',
        'https://fluxus.cca.edu/~qingranz/interactive2/exercises/screensaver/',
        'https://fluxus.cca.edu/~aredding/interactive2/screensaver/index.html',
        'https://fluxus.cca.edu/~danqihuang/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~puyan.liu/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~yitong.yang/interactive2/exercises/screensave/index.html',
        'https://fluxus.cca.edu/~dspangler/interactive2/exercises/Screensaver/',
        'https://fluxus.cca.edu/~henna.crowner/interactive2/exercises/screensaver/',
        'https://fluxus.cca.edu/~yujincha/interactive2/exercises/screensaver/index.html',
        'https://fluxus.cca.edu/~brendonlee/screensaver/'

    ]

    var screensaverDesigners = [
        'Rohan',
        'Yuyao',
        'Joanna',
        'Qilu',
        'Linh',
        'Weiran',
        'Morgan',
        'Jade',
        'Elina',
        'Yashmi',
        'Mengzi',
        'Vicky',
        'Jie-i',
        'Yu',
        'Hongyu',
        'Zeno',
        'Anah',
        'Danqi',
        'Percy',
        'Cesare',
        'Dylan',
        'Henna',
        'Yujin',
        'Brendon'
    ]

    const randomScreensaver = Math.floor(Math.random() * screensaverUrls.length);


    var screensaverCode = '<div id="screensaver"><iframe src="'+screensaverUrls[randomScreensaver]+'"></iframe><div id="screensaver-designer">Screensaver by '+screensaverDesigners[randomScreensaver]+'</div></div>';
    $('body').append(screensaverCode);

    var mouseIdle;
    var screensaverState = false;
    var timeIdle = 10;

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