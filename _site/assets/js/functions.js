//Youtube Section
$(window).scroll(function() {
    youtubeVidScroll();
});

function youtubeVidScroll() {

    var wScroll = $(window).scrollTop();

    //console.log(wScroll);
    $('.video-strip').css('background-position','center -'+ wScroll +'px');
}

//tada effect
$(function() {
    setInterval(function(){articleTada()}, 4000);
});

function articleTada(){
    var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1
    $('.article-thumb').eq(randNum).addClass('is-emph')
        .siblings().removeClass('is-emph');
}

function startArticles(){
    var wScroll = $(window).scrollTop();

    if($('section.articles').offset().top - $(window).height()/1.2 < wScroll) {
        $('.article-thumb').each(function(i){
            setTimeout(function(){
                $('.article-thumb').eq(i).addClass('is-visible');
            }, 200 * i);
        });
    }
}

$(window).scroll(function(){
    startArticles();
});