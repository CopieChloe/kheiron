$(document).ready(function (event) {

    //enlever le curseur de base 
    $('body').addClass('cursor_none');

    // animation index
    $(document).on("mousemove", function (event) {
        let x = event.pageX;
        let y = event.pageY;
        let string = 'circle(100px at ' + x + 'px ' + y + 'px)';
        $('body').css('clip-path', string);
        $('.cursor').css({
            'display': 'block',
            'top': y,
            'left': x
        });
    });

    $(document).click(function () {
        $('body').addClass('enlarge');
        $('nav').show();
        $('header').show();
        $('.cursor').remove();
        $('.word:odd').addClass('word_animate_odd');
        $('.word:even').addClass('word_animate_even');
    });

    // switch scene / cinema 
    $('.cinema').click(function () {
        $('.cinema').toggleClass('tab_active');
        $('.live').toggleClass('tab_active');

        $('.cinema').css('color', '#fff');
        $('.cinema').css('border-bottom', '2px solid #fff');
        $('.live').css('color', '#fff');
        $('.main_live').addClass('main_live_away');
        $('.main_cinema').addClass('main_cinema_in');
        $('.main_live').removeClass('main_live_in');
        $('.main_cinema').removeClass('main_cinema_away');
        $('nav').addClass('nav_cinema');
        $('nav').removeClass('nav_live');
    });

    $('.live').click(function () {
        $('.cinema').toggleClass('tab_active');
        $('.live').toggleClass('tab_active');

        $('.cinema').css('color', '#034577');
        $('.live').css('border-bottom', '2px solid #034577');
        $('.live').css('color', '#034577');
        
        $('.main_live').addClass('main_live_in');
        $('.main_cinema').addClass('main_cinema_away');
        $('.main_live').removeClass('main_live_away');
        $('.main_cinema').removeClass('main_cinema_in');
        $('nav').removeClass('nav_cinema');
        $('nav').addClass('nav_live');
    });


});