/* open menu */
var openNav = document.getElementById('openNav');

openNav.addEventListener('click',function(){
    var myNav = document.getElementById('myNav');
    myNav.style.width = '80%';
});

var closeNav = document.getElementById('closeNav');

closeNav.addEventListener('click',function(){
    var myNav =document.getElementById('myNav');
    myNav.style.width = '0px';
});


/* open big picture 1 */
var openPic = document.getElementById('example-img1')

openPic.addEventListener('click',function(){
    var bigPic = document.getElementById('bigPic1');
    bigPic.style.width = '98%';
    // bigPic.style.overflow = 'scroll';
});

var closePic = document.getElementById('closePic1');

closePic.addEventListener('click',function(){
    var bigPic =document.getElementById('bigPic1');
    bigPic.style.width = '0px';
});

/* open big picture 2 */
var openPic2 = document.getElementById('example-img2')

openPic2.addEventListener('click',function(){
    var bigPic = document.getElementById('bigPic2');
    bigPic.style.width = '98%';
});

var closePic2 = document.getElementById('closePic2');

closePic2.addEventListener('click',function(){
    var bigPic =document.getElementById('bigPic2');
    bigPic.style.width = '0px';
});


/* open big picture 3 */
var openPic3 = document.getElementById('example-img3')

openPic3.addEventListener('click',function(){
    var bigPic = document.getElementById('bigPic3');
    bigPic.style.width = '98%';
});

var closePic3 = document.getElementById('closePic3');

closePic3.addEventListener('click',function(){
    var bigPic =document.getElementById('bigPic3');
    bigPic.style.width = '0px';
});

/* open big picture 4 */
var openPic4 = document.getElementById('example-img4')

openPic4.addEventListener('click',function(){
    var bigPic = document.getElementById('bigPic4');
    bigPic.style.width = '98%';
});

var closePic4 = document.getElementById('closePic4');

closePic4.addEventListener('click',function(){
    var bigPic =document.getElementById('bigPic4');
    bigPic.style.width = '0px';
});