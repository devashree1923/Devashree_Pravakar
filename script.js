// Wait till the DOM is ready.
$(function () {
    var roles = [ "Student","Cook","Coder", "VITian"];
    var count = 0;
    var $typeSpan = $("#intro .content h2 span").typist({
      text: roles[count]
    });
    setInterval(() => {
      $typeSpan
        .typistRemove(roles[count++ % roles.length].length)
        .typistPause(2000)
        .typistAdd(roles[count % roles.length]);
    }, 5000);
    $(".navbar").hide();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 40) {
        $(".navbar").slideDown(100);
      } else {
        $(".navbar").slideUp(100);
      }
    });
    $(".go-down a").click(function (e) {
      e.preventDefault();
      var top = $($(this).attr("href")).position().top - 70;
      $("html, body").animate(
        {
          scrollTop: top
        },
        1000
      );
    });
  });
  $(".go-top").click(function (e) {
    e.preventDefault();
    var top = $("#intro").position().top;
    $("html, body").animate(
    {
        scrollTop: top
    },
    1000
    );
});
$(".go-about").click(function (e) {
    e.preventDefault();
    var top = $("#about").position().top;
    $("html, body").animate(
    {
        scrollTop: top
    },
    1000
    );
});
$(".go-experience").click(function (e) {
    e.preventDefault();
    var top = $("#experience").position().top;
    $("html, body").animate(
    {
        scrollTop: top
    },
    1000
    );
});
$(".go-contact").click(function (e) {
    e.preventDefault();
    var top = $("#contact").position().top;
    $("html, body").animate(
    {
        scrollTop: top
    },
    1000
    );
});


