function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});

$('.slider__wrapper').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

var dateMy = new Date();
var yar = dateMy.getFullYear();

document.getElementById('year').innerHTML = yar;
