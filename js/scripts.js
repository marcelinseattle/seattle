$(document).ready(function() {
  $(".Needle").click(function() {
    $(".space").toggle();
  });

  $(".Market").click(function() {
    $(".pike").toggle();
  });

  $(".TeenSpirit").click(function() {
    $(".teen").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("p").removeClass();
    $("p").addClass("white-text");
});

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("gray-background");
  $("p").removeClass();
  $("p").addClass("purple-text");
});

$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("blue-background");
  $("p").removeClass();
  $("p").addClass("pink-text");

});

  $("p.Lorem").click(function() {
  $("p.Lorem").addClass("highlight");
  $("p.Lorem").addClass("box");
  });
});
