$(window).resize(function(){
$('.rapMoon').each(function(){
	this.Render();
});
});

(function($){
$.fn.jsRapMoon = function(options){

return this.each(function(){

this.Render = function(){
	this.opt = $.extend({},options);	
	var w = $(this).width();
	$(this).height(w).addClass('rapMoon');
	$('<div>').addClass('light').appendTo(this);
	$('<div>').addClass('texture').appendTo(this);
	var dark = '#444';
	var synodicMonth = 29.530588853;
	var curDate = new Date();
	var orgDate = new Date(2012, 7, 31);
	var milSec = curDate.getTime() - orgDate.getTime();
	var daysElapsed = parseInt(milSec / 1000 / 60 / 60 / 24);
	var daysSinceLast = daysElapsed % synodicMonth; 
	var phase = daysSinceLast / synodicMonth;
	$('.light').css('filter','blur(' + (w / 24) + 'px)');
	if(phase < 0.25)
		$('.light').css({'border-right-width':(phase * 2 * w),'border-left-color':'#fff','background-color':'#fff','border-right-color':dark});
	else if(phase < 0.5)
		$('.light').css({'border-left-width':((0.5 - phase) * 2 * w),'border-left-color':'#fff','background-color':dark,'border-right-color':dark});	
	else if(phase < 0.75)
		$('.light').css({'border-right-width':((phase - 0.5) * 2 * w),'border-left-color':dark,'background-color':dark,'border-right-color':'#fff'});
	else
		$('.light').css({'border-left-width':((1 - phase) * 2 * w),'border-left-color':dark,'background-color':'#fff','border-right-color':'#fff'});
}

this.Render();
})

}})(jQuery);