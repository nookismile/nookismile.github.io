$('.mouse-parallax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    
    $('.mouse-parallax--background').css(
        'transform',
        'translate(-' + x * 30 +'px, -' + y * 30 + 'px)'
    );
    
    $('.mouse-parallax--content').css(
        'transform',
        'translate(' + x * 60 +'px, ' + y * 60 + 'px)'
    );
    
});