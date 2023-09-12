document.addEventListener("DOMContentLoaded", function () {
    const contentWrapper = window['all-contents-wrapper'];
    window['sidemenu-container'].addEventListener('show.bs.offcanvas', (event) => {
        event.stopImmediatePropagation();
        var scrollPosition = window.scrollY === 0 ? document.querySelector("main").scrollTop : window.scrollY;
        contentWrapper.classList.remove("shrinkfy-contents");
        contentWrapper.classList.add("shrinkfy-contents");
        const animationTiming = {
            duration: 500,
            iterations: 1,
            easing: 'ease',
        };
        const animationKeyframes = [
            {
                transform: 'scale(1) translateX(0px)',
                maxHeight: '100vh',
                offset: 0
            },
            {
                transform: 'scale(0.7) translateX(-490px)',
                maxHeight: '100vh',
                offset: 1
            }
        ];
        contentWrapper.style.maxHeight = '100vh';        
        document.querySelector("main").scroll({
            top: scrollPosition
        });
        contentWrapper.animate(animationKeyframes, animationTiming).onfinish = (e) => {
            contentWrapper.style.maxHeight = '100vh'; 
            contentWrapper.style.transform = 'scale(0.7) translateX(-490px)';
        };

    })

    window['sidemenu-container'].addEventListener('hide.bs.offcanvas', (event) => {
        event.stopImmediatePropagation();
        let scrollPosition = document.querySelector("main").scrollTop;
        const animationTiming = {
            duration: 570,
            iterations: 1,
            easing: 'ease',
        };
        const animationKeyframes = [
            {
                transform: 'scale(1) translateX(0px)',
                offset: 1
            }
        ];
        contentWrapper.style.maxHeight = '100vh';
        window.scroll({
            top: scrollPosition
        });
        contentWrapper.style.transform = 'scale(0.7) translateX(-490px)';
        contentWrapper.animate(animationKeyframes, animationTiming).onfinish = (() => {
            contentWrapper.classList.remove("shrinkfy-contents");
            contentWrapper.style.maxHeight = '';
            window.scroll({
                top: scrollPosition
            })
            contentWrapper.style.transform = '';
        });
    })
})