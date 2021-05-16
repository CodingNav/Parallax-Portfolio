$("#svg-1").load("candy-background.html", function () {
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
});

$("#svg-2").load("night-background.html", function () {
  var rellax = new Rellax('.night-rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
});

$('.main-carousel').flickity({
  groupCells: '100%',
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

$('#carouselExampleControls1').on('slide.bs.carousel', function (event) {
  var height = $(".carousel-text").height();
  if (height == 0) {
    $(".carousel-text").removeClass("carousel-item");
  }
  else {
    $(".carousel-text").addClass("carousel-item");
  }
})

