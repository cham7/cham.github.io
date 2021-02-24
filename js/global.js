$(document).ready(function(){
    $('.page-load').addClass('active');
    $('#about').show();
    setTimeout(function(){
        $('.heading, .about-txt').show();
    }, 1500);
    setTimeout(function(){
        $('.about-txt').addClass('active');
        $('.typewriter h1').css({'animation': 'none', 'border-right': 'unset'});
    }, 3800);
    setTimeout(function(){
        $('.p-txt').addClass('active');
    }, 4000);
    setTimeout(function(){
        $('.center-sec').addClass('active');
        $('.p-txt>span').addClass('paused');
    }, 7200);
    setTimeout(function(){
        $('.p-txt span span').addClass('active');
    }, 8000);
    setTimeout(function(){
        $('.bottom-sec').addClass('active');
    }, 8350);
    // $('[error="bug"]').click(function(){
    //     $('.alert-box').fadeIn();
    //     setTimeout(function(){
    //         $('.alert-box').fadeOut();
    //     }, 2500);
    // });
    $('.file-menu ul li, .right-menu ul.top li').click(function(){
        $('.heading, .about-txt').show();
        $('.about-txt').addClass('active');
        $('.typewriter h1').css({'animation': 'none', 'border-right': 'unset'});
        $('.p-txt').addClass('active');
        $('.center-sec').addClass('active');
        $('.p-txt>span').addClass('paused');
        $('.p-txt span span').addClass('active');
        $('.bottom-sec').addClass('active');
        if($(this).hasClass('active')){
            console.log(1)
        }
        else{
            var _ele = $(this).attr('class');
            console.log(_ele);
            $('.cont-area').removeClass('active');
            setTimeout(function(){
                $('.cont-area').hide();
            }, 950);
            $('.file-menu ul li, .right-menu ul li, .cont-area').removeClass('active');
            $('.file-menu ul li.'+_ele).addClass('active');
            $('.right-menu ul li.'+_ele).addClass('active');
            setTimeout(function(){
                $('.cont-area#'+_ele).show();
                setTimeout(function(){
                    $('.cont-area#'+_ele).addClass('active');
                }, 10);
            }, 1000);
        }
    });
    
});