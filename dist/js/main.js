var click = document.getElementById("burger");
var headerNav = document.getElementById("headerNav");

$("main").before('<div class="overlay"></div>');

click.addEventListener("click", function () {
  click.classList.toggle("burger-active");
  headerNav.classList.toggle("menu-active");
  $("body").find(".overlay").toggleClass("overlay--active");
  $(".header").toggleClass("fixed");
  $("main").toggleClass("is-header-fixed");
});

$("#language-drop").on("click", function () {
  $(this).toggleClass("active");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// C A R T + and -

// $(function () {
//   (function quantityProducts() {
//     var $quantityArrowMinus = $(".quantity-arrow-minus");
//     var $quantityArrowPlus = $(".quantity-arrow-plus");
//     var $quantityNum = $(".quantity-num");

//     $quantityArrowMinus.click(quantityMinus);
//     $quantityArrowPlus.click(quantityPlus);

//     function quantityMinus() {
//       if ($quantityNum.val() > 1) {
//         $quantityNum.val(+$quantityNum.val() - 1);
//       }
//     }

//     function quantityPlus() {
//       $quantityNum.val(+$quantityNum.val() + 1);
//     }
//   })();
// });

// MODAL shop compare

$("#compareBtn").on("click", function () {
  $("#compareModal").css("display", "block");
});
$(".close").on("click", function () {
  $("#compareModal").css("display", "none");
});
$("#compareModal").on("click", function (event) {
  if (event.target == this) {
    $(this).css("display", "none");
  }
});

// show-hide password
$(".eye").on("click", function () {
  $(this).toggleClass("eye-show");

  var input = $($(".password"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
  },
});

new Swiper("#swiper-service", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      scrollbar: {
        hide: false,
      },
    },
    1024: {
      draggable: false,
      scrollbar: {
        hide: true,
      },
    },
    1240: {
      slidesPerView: 3,
    },
  },
});

new Swiper("#swiper-compare", {
  direction: "horizontal",
  // loop: true,
  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1240: {
      slidesPerView: 3,
    },
  },
});