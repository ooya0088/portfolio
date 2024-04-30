$(function(){
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