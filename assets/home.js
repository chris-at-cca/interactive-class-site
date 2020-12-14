$('document').ready(function(){
    
    // random emoji

    var i;
    for (i = 0; i < 1; i++) {
        
        var emoji = ["🌏", "☃️", "😞", "👽", "😻", "🐼", "🥇"];
        var randomemoji = Math.floor(Math.random() * emoji.length);

        var wW = $(window).innerWidth();
        var wH= $(window).innerHeight();

        var randPosX = Math.floor((Math.random()*wW));
        var randPosY = Math.floor((Math.random()*wH));

        $('body').append('<div class="random-emoji" style="left: '+randPosX+'px; top:'+randPosY+'px;">'+emoji[randomemoji]+'</div>');

    }

    var j;
    for (j = 0; j < 1; j++) {
        
        var image = ["assets/img/cory-arcangel-cca.gif", "assets/img/mindy-seu.gif", "assets/img/scs.png", "assets/img/yhsong.gif", "assets/img/one-line-to-motion.gif"];
        var randomimage = Math.floor(Math.random() * image.length);

        var colpos = ["first", "second", "third", "fourth"];
        var randomcol = Math.floor(Math.random() * colpos.length);
        var rowpos = ["one", "two", "three"];
        var randomrow = Math.floor(Math.random() * rowpos.length);
        $('#landing-grid').append('<img class="random-image '+colpos[randomcol]+' '+rowpos[randomrow]+'" src="'+image[randomimage]+'" />');
    }

    var colpos = ["first", "second", "third", "fourth"];
    var randomcol = Math.floor(Math.random() * colpos.length);
    var rowpos = ["one", "two", "three"];
    var randomrow = Math.floor(Math.random() * rowpos.length);
    $('.intro-text').addClass(''+colpos[randomcol]+', '+rowpos[randomrow]+'');


    // drawing tool
    var canvas = document.getElementById("drawing");
    canvas.width  = $(window).width();
    canvas.height = $(window).height();

    var ctx = canvas.getContext("2d");
    
    var drawx=0;
    var drawy=0;


    $(document).mousemove(function(event){
        $(".coordinates").text(event.pageX + ", " + event.pageY);
    });

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        if (drawx==0 && drawy==0) {
            drawx=mousePos.x;
            drawy=mousePos.y;
        }
        
        ctx.moveTo(drawx,drawy);
        ctx.lineTo(mousePos.x,mousePos.y);
        ctx.stroke();

        drawx=mousePos.x;
        drawy=mousePos.y;

    }, false);

});