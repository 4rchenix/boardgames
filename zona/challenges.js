$(function(){
    $('.dice').hide();
    $('.btn-roll').click(function(){
      $('.dice').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 6) + 1;
        $(this).attr("src", 'dice-' + rol + '.png');
      });
    });
    $('.dice').click(function() {
        $(this).toggleClass("dice-selected");
    });
});
