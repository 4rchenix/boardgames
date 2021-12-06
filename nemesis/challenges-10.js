$(function(){
    $('.dice,.diceg').hide();
    $('.btn-roll').click(function(){
      $('.dice').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 10) + 1;
        $(this).attr("src", 'dice-' + rol + '.png');
      });
      $('.diceg').show().not('.dice-selected').each(function() {
        var rol = Math.floor(Math.random() * 6) + 1;
        $(this).attr("src", 'dice-' + rol + 'g.png');
      });
    });
    $('.dice,.diceg').click(function() {
        $(this).toggleClass("dice-selected");
    });
});
