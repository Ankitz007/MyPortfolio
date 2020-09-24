$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

var a = 0;
$(window).scroll(function () {
  var oTop = $("#projects").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 8, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 359, duration: 3000 });
    $("#number4").jQuerySimpleCounter({ end: 246, duration: 3000 });
    a = 1;
  }
});
