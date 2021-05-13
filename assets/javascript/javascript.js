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

// $("#pirate").hover(function(){
//   $(this).find("img").attr('src', './assets/images/game_screen.gif')
// }, function(){
//   $(this).find("img").attr('src', './assets/images/pirate_mockup.png')
// });

