$(document).on('ready',function(){
    "use strict";
    
    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );
        });
        return false;
    });  
        
    (function ($) { 
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').on('click', function(g){ 
         var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

    g.preventDefault();
    } );
    })(jQuery);


    /*** FIXED Menu APPEARS ON SCROLL DOWN ***/ 
    $(window).on('scroll', function(){  
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
        $("header").addClass("sticky");
        }
        else{
        $("header").removeClass("sticky");
        $("header").addClass("");
        }
    });

    // Get Header Height //
    var stick = $("header.bg").height();
    $("header.bg").parent().css({
        "padding-top": stick
    });

    if($(window).width() <= 1200){
      $("header").on("click",function(e){
        e.stopPropagation();
        });
        $(".menu-item-has-children > a").on("click",function(){
            $(this).parent().siblings().children("ul").slideUp();
            $(this).parent().siblings().removeClass("active");
            $(this).parent().children("ul").slideToggle();
            $(this).parent().toggleClass("active");
            return false;
        });
    }  

    $('#toggle-widget .content').hide();
        $('#toggle-widget h2:first').addClass('active').next().slideDown('slow');
        $('#toggle-widget h2').on("click", function(){
        if($(this).next().is(':hidden')) {
        $('#toggle-widget h2').removeClass('active').next().slideUp('slow');
        $(this).toggleClass('active').next().slideDown('slow');
        }
    });


    $('.scrollup a,.scrolldown a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    /* Responsive menu */
    $('.open-minimal-menu.resopen').on('click', function(){
        $('.menusec nav').toggleClass('slidein');
        $('.open-minimal-menu.resopen #hamburger-two').toggleClass('active');
        $(this).toggleClass('active');
    });
    

    var tabs =  $(".ctabs li a");
  
    tabs.click(function() {
        var content = this.hash.replace('/','');
        tabs.removeClass("active");
        $(this).addClass("active");
    $("#content").find('div.ccontent').hide();
    $(content).fadeIn(200);
    });

});



$(window).on('load',function(){
    "use strict";

    $('.page-loading').fadeOut();

    var full_height = $(window).height();
    $(".full-bg").css({"height":full_height});

});