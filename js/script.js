// start bottom header


// start scroll button

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

// end scroll button

// END BOTTOM HEADER


//START KNOWLEDGES

$(document).ready(function() {
  $('.show-frontend').click(function() {
    $('.hidden-frontend').slideToggle("slow");
  });
});

$(document).ready(function() {
  $('.show-backend').click(function() {
    $('.hidden-backend').slideToggle("slow");
  });
});

$(document).ready(function() {
  $('.show-outils').click(function() {
    $('.hidden-outils').slideToggle("slow");
  });
});


//END KNOWLEDGES


// START PROJETS

var app = new Vue({
  el: '#app',
  data: {
      currentSlide: 0,
      isPreviousSlide: false,
      isFirstLoad: true,
      slides: [
          {
            headlineFirstLine: "Projets",
            sublineFirstLine: "",
            bgImg: "../img/knowledgesdiv1.jpg",
            rectImg: "../img/knowledgesdiv1.jpg"
          },
          {
              headlineFirstLine: "Explorateur",
              sublineFirstLine: "BACK-END",
              bgImg: "../img/knowledgesdiv2.jpg",
              rectImg: "../img/knowledgesdiv2.jpg"
          },
          {
              headlineFirstLine: "Le Gondola",
              sublineFirstLine: "FRONT-END",
              bgImg: "../img/knowledgesdiv3.jpg",
              rectImg: "../img/knowledgesdiv3.jpg"
          },
          {
            headlineFirstLine: "",
            sublineFirstLine: "",
            bgImg: "../img/knowledgesbg.jpg",
            rectImg: "../img/knowledgesbg.jpg"
        }

      ]
  },
mounted: function () {
  var productRotatorSlide = document.getElementById("app");
      var startX = 0;
      var endX = 0;

      productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

      productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

      productRotatorSlide.addEventListener("touchend", function(event) {
          var threshold = startX - endX;

          if (threshold < 150 && 0 < this.currentSlide) {
              this.currentSlide--;
          }
          if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
              this.currentSlide++;
          }
      }.bind(this));
},
  methods: {
      updateSlide(index) {
          index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
          this.currentSlide = index;
          this.isFirstLoad = false;
      }
  }
})

// END PROJETS