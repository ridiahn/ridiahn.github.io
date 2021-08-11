var $;
$ = require('jquery');

var _iframe = $('.utterances-comments iframe');
$(_iframe).on("load", function() {
  let head = $(_iframe).contents().find("head");
  let css = '<style>.timeline-header{ padding-left : 0; }</style>';
  $(head).append(css);
});