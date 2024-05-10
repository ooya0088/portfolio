$(function(){
    //ローディング画面の表示
    $(window).on('load',function(){
        $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $("#loading_box").delay(1200).fadeOut('slow');//ローディング画像を1.2秒（1200ms）待機してからフェードアウト
    });

    const showClass = "show"; 

    $(".content-wrap--bg").each(function(index, content){
        $(window).on("load scroll resize", function(){
            const windowHeight = $(window).height();
            const scroll = $(window).scrollTop();
            const offset = $(content).offset().top;
            const setTiming = windowHeight * 0.5;
            const contentHeight = $(content).height();
            const outTiming = windowHeight * 0.6;

            if (scroll + windowHeight >= offset + setTiming && scroll + windowHeight < offset + contentHeight + outTiming){
            $(content).addClass(showClass);
            } else {
            $(content).removeClass(showClass);
            }
        });
    });


});