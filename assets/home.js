$('document').ready(function(){
    
    // random emoji

    var emoji = ["🌏", "☃️", "😞", "👽", "😻", "🐼", "🥇"];
    var randomemoji = Math.floor(Math.random() * emoji.length);

    var colpos = ["first", "second", "third", "fourth"];
    var randomcol = Math.floor(Math.random() * colpos.length);

    var rowpos = ["one", "two", "three", "four"];
    var randomrow = Math.floor(Math.random() * rowpos.length);

    $('#landing-grid').append('<div class="emoji '+rowpos[randomrow]+' '+colpos[randomcol]+'">'+emoji[randomemoji]+'</div>');

    // drawing tool
    var canvas = document.getElementById("drawing");
    canvas.width  = $(window).width();
    canvas.height = $(window).height();

    var ctx = canvas.getContext("2d");
    
    var drawx=0;
    var drawy=0;


    $(document).mousemove(function(event){
        $("span").text(event.pageX + ", " + event.pageY);
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