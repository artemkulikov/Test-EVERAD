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


let owl = $(".owl-carousel");
owl.owlCarousel({
    loop: true
    , items: 1
    , margin: 50
    , dotsContainer: ".dots"
    , dotsEach: true
    , responsive: {
        0: {
            items: 1
        , }
        , 700: {
            items: 1
        , }
        , 1000: {
            margin: 300
            , items: 1
        , }
    , }
, });

$(".arrow-right").click(function () {
    owl.trigger("next.owl.carousel");
});

$(".arrow-left").click(function () {

    owl.trigger("prev.owl.carousel", [300]);
});
$(".dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});

var dateMy = new Date();
var yar = dateMy.getFullYear();

document.getElementById('year').innerHTML = yar;