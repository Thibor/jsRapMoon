$(window).resize(function(){
$('.rapMoon').each(function(){
	this.Render();
});
});

(function($){
$.fn.jsRapMoon = function(options){

return this.each(function(){

this.Render = function(){
var w = $(this).width();
$(this).height(w).addClass('rapMoon');
$('<div>').addClass('light').appendTo(this);
$('<div>').addClass('texture').appendTo(this);
this.opt = $.extend({},options);
var synodicMonth = 29.530588853;
var date = new Date();
var origDate = new Date(2012, 7, 31);
var mills = date.getTime() - origDate.getTime();
var daysElapsed = parseInt(mills/1000/60/60/24);
var daysSinceLast = daysElapsed % synodicMonth; 
var phase = daysSinceLast / synodicMonth;
if(phase < 0.25)
	$('.light').css({'border-right-width':(phase * 2 * w),'border-left-color':'white','background-color':'white','border-right-color':'black'});
else if(phase < 0.5)
	$('.light').css({'border-left-width':((0.5 - phase) * 2 * w),'border-left-color':'white','background-color':'black','border-right-color':'black'});	
else if(phase < 0.75)
	$('.light').css({'border-right-width':((phase - 0.5) * 2 * w),'border-left-color':'black','background-color':'black','border-right-color':'white'});
else
	$('.light').css({'border-left-width':((1 - phase) * 2 * w),'border-left-color':'black','background-color':'white','border-right-color':'white'});
}

this.Render();
})

}})(jQuery);