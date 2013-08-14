$(document).ready(function() {
$('.accordionButton').click(function() {
$('.arrow').removeClass('rotated');
$('.accordionButton').removeClass('on');
$('.accordionContent').slideUp('slow');
var contentOpened = false;
if ($(this).next().is(':hidden') == true) {
$(this).addClass('on');
$(this).next().slideDown('slow');
$(this).prevAll('.arrow').addClass('rotated');
contentOpened = true;
}
if ($('.accordionContent').is(':hidden') && $('#hide').is(':visible') && (contentOpened == true)) {
$("#hide").slideUp('slow');
} else if ($('.accordionContent').is(':visible') && $('#hide').is(':hidden') && (contentOpened == false)) {
$("#hide").slideDown('slow');
}
});
$('.accordionContent').hide();
})(window.Zepto); 