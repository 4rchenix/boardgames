$(function(){
    $('.diceg,.dicey,.dicer').hide();
    $('.btn-roll').click(function(){
      $('.diceg').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 6) + 1;
        $(this).attr("src", 'dice-' + rol + 'g.png');
      });
      $('.dicey').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 6) + 1;
        $(this).attr("src", 'dice-' + rol + 'y.png');
      });
      $('.dicer').show().not('.dice-selected').each(function() {
	var rol = Math.floor(Math.random() * 6) + 1;
	$(this).attr("src", 'dice-' + rol + 'r.png');
      });
    });
    $('.diceg,.dicey,.dicer').click(function() {
        $(this).toggleClass("dice-selected");
    });
});
