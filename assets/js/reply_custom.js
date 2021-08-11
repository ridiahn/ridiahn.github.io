$("iframe").one("load", function() {
  $("iframe").contents().find("h1.timeline-header").css( "padding-left", "0");
})