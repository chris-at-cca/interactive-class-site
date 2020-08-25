// window size
let vw = 0;
let vh = 0;

function windowSize(){
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
}

document.addEventListener('DOMContentLoaded', function() {
    windowSize();
}, false);



