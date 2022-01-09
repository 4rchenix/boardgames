$(function(){
    $('.diceb,.dicer').hide();
    $('.btn-roll').click(function(){
      $('.diceb').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 10) + 1;
        $(this).attr("src", 'dice-' + rol + 'b.png');
      });
      $('.dicer').show().not('.dice-selected').each(function() {
	var rol = Math.floor(Math.random() * 6) + 1;
	$(this).attr("src", 'dice-' + rol + 'r.png');
      });
    });
    $('.diceb,.dicer').click(function() {
        $(this).toggleClass("dice-selected");
    });
});
