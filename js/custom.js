$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=L0IUPRNt9Wo',
        containment: '.u_box',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
        opacity: 0.9,
        useOnMobile: true,
        optimizeDisplay: true,
        abundance: 0.002
    })
})

$(function () {
    const MainBest = new Swiper('.main_best_slide', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_best .arrows .next',
            prevEl: '.main_best .arrows .prev',
        },
        autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay: 3000,   // 시간 설정
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });
})