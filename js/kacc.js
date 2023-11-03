$(document).ready(function(){
    //상단메뉴 mouseenter & focus
    $("#menu a").on("mouseenter focus" , function(){
        $("#menu ul li > a").removeClass("ent");
        $(this).addClass("ent");
    });
    $("#menu a").mouseleave(function(){
        $("#menu ul li > a").removeClass("ent");
    });
    $("#menu .sub-down").on("mouseenter focus" , function(){
        $(".sub-menu").stop().slideUp();
        $(this).children().next().stop().slideDown();
    });
    $(".sub-menu a").on("mouseenter focus" , function(){
        $(".sub-menu a").removeClass("ent");
        $(this).addClass("ent");
        $("#menu a").removeClass("ent");
        $(this).parent().prev().addClass("ent");
    });
    $("#menu li").mouseleave(function(){
        $("#menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu li").blur(function(){
        $("#menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu").mouseleave(function(){
        $("#menu ul li > a").removeClass("ent");
        $(".sub-menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu").blur(function(){
        $("#menu ul li > a").removeClass("ent");
        $(".sub-menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    // -------------
    let bigSlide = setInterval( leftSlide , 3200 );
    function leftSlide (){
        $("#slide").stop().animate({ "left" : "-1440px"}, 3000,function(){
            $("#slide").append( $("#slide").children().first() );
            $("#slide").css( "left" , 0);
        });
    }

    $("#slider").hover(
        function(){
            clearInterval( bigSlide );
        }, 
        function(){
            bigSlide = setInterval( leftSlide , 3200 );
        });
    // -------------
    // 텍스트배너 위로 슬라이드
    setInterval( txtTopSlide , 3200 );
    function txtTopSlide(){
        $("#txtSlide").stop().animate({ "top" : "-40px"}, 3000, function(){
            $("#txtSlide").append( $("#txtSlide").children().first() );
            $("#txtSlide").css( "top", 0 );
        });
    }

    // 보호중인 동물 버튼 누르면 한칸씩 이동한다
    const careLB = $("#careAnimal-thum button.left");
    const careRB = $("#careAnimal-thum button.right");
    const careSlide = $("#care-slide");
    careLB.click(function(){
        $("#careAnimal-thum button").removeClass("btn-ent");
        $(this).addClass("btn-ent");
        careSlide.stop().animate( { "left" : "-=320px"},100, function(){
            careSlide.append( careSlide.children().first() );
            careSlide.css( "left" , 0 );
        });
    });     

    careRB.click(function(){
        $("#careAnimal-thum button").removeClass("btn-ent");
        $(this).addClass("btn-ent");
        careSlide.stop().animate( {"left" : "+=320px"}, 100 ,function(){
            careSlide.prepend( careSlide.children().last() );
            careSlide.css( "left" , 0 );
        });
    });

    $("#careAnimal-thum button").mouseleave(function(){
        $("#careAnimal-thum button").removeClass("btn-ent");
    });

    //입양가족 버튼 누르면 한칸씩 이동한다
    const adopLB = $("#adoption-thum button.left");
    const adopRB = $("#adoption-thum button.right");
    const adopSlide = $("#adop-slide");

    adopLB.click(function(){
        $("#adoption-thum button").removeClass("btn-ent");
        $(this).addClass("btn-ent");
        adopSlide.stop().animate( { "left" : "-=320px"},100, function(){
            adopSlide.append( adopSlide.children().first() );
            adopSlide.css( "left" , 0 );
        });
    });     

    adopRB.click(function(){
        $("adopption-thum button").removeClass("btn-ent");
        $(this).addClass("btn-ent");
        adopSlide.stop().animate( {"left" : "+=320px"}, 100 ,function(){
            adopSlide.prepend( adopSlide.children().last() );
            adopSlide.css( "left" , 0 );
        });
    });

    $("#adoption-thum button").mouseleave(function(){
        $("#adoption-thum button").removeClass("btn-ent");
    });
        
    $("#enter-contact a:not(:last-child)").hover(
        function(){
            $("#enter-contact a").removeClass("ent");
            $(this).addClass("ent");
            $(this).children("img").attr("src","./img/speech-bubble-y.png");
        },
        function(){
            $("#enter-contact a").removeClass("ent");
            $(this).children("img").attr("src","./img/speech-bubble.png");
        });
});//and All