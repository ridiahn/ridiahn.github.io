import jQuery from "./vendor/jquery/jquery-3.5.1";
window.$ = window.jQuery = jQuery;

var _iframe = $('.utterances-comments iframe');
$(_iframe).on("load", function(e) {
  e.preventDefault();
  let head = $(_iframe).contents().find("head");
  let css = '<style>.timeline-header{ padding-left : 0; }</style>';
  $(head).append(css);
});