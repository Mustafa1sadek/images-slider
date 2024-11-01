
var imgList = Array.from(document.querySelectorAll('.item img'));
var layer = document.querySelector('.layer');
var slider = document.querySelector('.slider');
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var close = document.querySelector(".close");
var currentSliderIndex;

for (var i = 0; i < imgList.length; i++)
{
    imgList[i].addEventListener('click' , function (e) {
        var imgSrc = e.target.src;
        layer.style='display:flex;';
        slider.style = `background-image:url(${imgSrc})`
        currentSliderIndex = imgList.indexOf(e.target);
        eventPtn();      
    })
}

function eventPtn() {
    left.addEventListener('click' ,  () => {
        var x = currentSliderIndex-1;
        if (x == -1) {x = imgList.length-1;};
        slider.style = `background-image:url(${imgList[x].src})`;
        currentSliderIndex = x ;
    })

    right.addEventListener('click' ,  () => {
        var x = currentSliderIndex+1;
        if (x == imgList.length ) {x = 0;};
        slider.style = `background-image:url(${imgList[x].src})`;
        currentSliderIndex = x ;
    })
}

close.addEventListener('click' , () => {
    layer.style='display:none;';
})




