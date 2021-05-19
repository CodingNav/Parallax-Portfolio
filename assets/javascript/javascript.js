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

$("#contact-form").submit(function (event) {
  event.preventDefault();

  emailjs.init("user_HmHthuLazlXZ38Tc9emH3");
  var templateParams = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val()
  };

  emailjs.send('service_1i0p0p1', 'template_w4qvkjl', templateParams)
    .then(function (response) {
      $("#contact-form").html("<p class='text-center'>Your email was sent. Thank you for leaving me a message!</p>")
      // console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      $("#contact-form").html("<p class='text-center'>Sorry, the message was not sent. You can email me directly at navleenkaurr@gmail.com</p>")
      // console.log('FAILED...', error);
    });

})



