$(document).ready(function () {
  // select2
  $('.select2').select2({
    minimumResultsForSearch: -1
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if ((appScroll > 2) && (appScroll < 99999999999)) {
      $(".navbar").addClass("navAnimate");
    };
    if ((appScroll > 0) && (appScroll < 20)) {
      $(".navbar").removeClass("navAnimate");
    };
  });
});
