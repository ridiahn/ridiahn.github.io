<script src="./vendor/jquery/jquery-3.5.1"></script>
$("iframe").one("load", function() {
  $("iframe").contents().find("h1.timeline-header").css( "padding-left", "0");
})