var carouselCell;

for(i = 0; i < projects.length; i++) {
  var card = `
  <!-- CARD -->
    <div class="card mb-2">
      <!-- CAROUSEL -->
      <div id="carouselExampleControls${i}" class="card-img-top carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        ${projects[i].images.map((imageURL, index) => {
          if(index == 0) {
            return `<div class="carousel-item active">
                      <img class="d-block w-100" src="${imageURL}" alt="Second slide">
                    </div>`
          }
          else {
            return `<div class="carousel-item">
                      <img class="d-block w-100" src="${imageURL}" alt="Second slide">
                    </div>`
          }
        }).join("")}
          <a class="carousel-control-prev" href="#carouselExampleControls${i}" role="button"
            data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls${i}" role="button"
            data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <!-- BODY -->
      <div class="card-body">
        <h2 class="card-title">${projects[i].title}</h2>
        <p class="card-text">${projects[i].description}</p>
        <p class="card-text">${projects[i].technologies}</p>
      </div>
      <footer class="card-footer">
        <a class="effect effect-5" href="${projects[i].url}" target="_blank"
          title="Live"><i class="fas fa-eye"></i> LIVE</a>
        <a class="effect effect-5" href="${projects[i].repo}" target="_blank"
          title="Code"><i class="fas fa-code"></i> CODE</a>
      </footer>
    </div>
  `;

  if (i%2 == 0) {
    carouselCell = $(`<div class="carousel-cell card-deck"></div>`);
  }

  carouselCell.append(card);
  $(".desktop.main-carousel").append(carouselCell);

  $(".mobile.main-carousel").append(`<div class="carousel-cell card-deck">${card}</div>`);
}


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
});