let count = "";
const NAV_ITEM_VEHICLES = "navbar-item-vehicles";
const NAV_ITEM_SHOPPINGTOOLS = "navbar-item-shoppingtools";
$("header #header__navbar > a").click(function () {
  if (count === "") {
    count = $(this).attr("id");
    $(this).addClass("active");
    if (count === NAV_ITEM_VEHICLES) {
      $("#vehicles").removeClass("hide");
      $("#vehicles .vehicles-nav")
        .addClass("animate__fadeInDown")
        .removeClass("animate__fadeOutUp");
      $("#vehicles-list")
        .addClass("animate__fadeInUp")
        .removeClass("animate__fadeOutDown");
      $(".vehicles-close")
        .addClass("animate__fadeInUp")
        .removeClass("animate__fadeOutDown");
    }
  } else {
    if (count === $(this).attr("id")) {
      $(this).removeClass("active");
      if (count === NAV_ITEM_VEHICLES) {
        $("#vehicles .vehicles-nav")
          .removeClass("animate__fadeInDown")
          .addClass("animate__fadeOutUp");
        $("#vehicles-list")
          .addClass("animate__fadeOutDown")
          .removeClass("animate__fadeInUp");
        $(".vehicles-close")
          .addClass("animate__fadeOutDown")
          .removeClass("animate__fadeInUp");
        setTimeout(function () {
          $("#vehicles").addClass("hide");
        }, 300);
      }
      count = "";
    } else {
      $("header #header__navbar > a").removeClass("active");
      $(this).addClass("active");
      //
      $("#vehicles").addClass("hide");
      count = $(this).attr("id");
      //
      if (count === NAV_ITEM_VEHICLES) {
        $("#vehicles").removeClass("hide");
        $("#vehicles .vehicles-nav")
          .addClass("animate__fadeInDown")
          .removeClass("animate__fadeOutUp");
        $("#vehicles-list")
          .addClass("animate__fadeInUp")
          .removeClass("animate__fadeOutDown");
        $(".vehicles-close")
          .addClass("animate__fadeInUp")
          .removeClass("animate__fadeOutDown");
      }
    }
  }
});

$(".vehicles-close").click(function () {
  $("#vehicles .vehicles-nav")
    .removeClass("animate__fadeInDown")
    .addClass("animate__fadeOutUp");
  $("#vehicles-list")
    .addClass("animate__fadeOutDown")
    .removeClass("animate__fadeInUp");
  $(".vehicles-close")
    .addClass("animate__fadeOutDown")
    .removeClass("animate__fadeInUp");
  setTimeout(function () {
    $("#vehicles").addClass("hide");
    $("header #header__navbar > a").removeClass("active");
  }, 300);
  count = "";
});
$(".vehicles-product").addClass("animate__animated animate__fadeInUp");
