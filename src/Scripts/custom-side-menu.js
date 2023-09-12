document.addEventListener("DOMContentLoaded", function () {
    const contentWrapper = window['all-contents-wrapper'];
    window['sidemenu-container'].addEventListener('show.bs.offcanvas', () => {
        var scrollPosition = window.scrollY === 0 ? document.querySelector("main").scrollTop : window.scrollY;
        contentWrapper.classList.remove("shrinkfy-contents");
        contentWrapper.classList.add("shrinkfy-contents");
        const animationTiming = {
            duration: 500,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        };
        const animationKeyframes = [
            {
                transform: 'scale(0.7) translateX(-480px)'
            }
        ];
        contentWrapper.style.maxHeight = '100vh';        
        document.querySelector("main").scroll({
            top: scrollPosition
        });
        contentWrapper.animate(animationKeyframes, animationTiming);
    })

    window['sidemenu-container'].addEventListener('hide.bs.offcanvas', () => {
        let scrollPosition = document.querySelector("main").scrollTop;
        const animationTiming = {
            duration: 500,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        };
        const animationKeyframes = [
            {
                transform: 'scale(1) translateX(0px)',
            }
        ];
        contentWrapper.classList.remove("shrinkfy-contents");
        contentWrapper.style.paddingRight = '10px';
        contentWrapper.animate(animationKeyframes, animationTiming).onfinish = (() => {
            contentWrapper.style.maxHeight = '';
            contentWrapper.style.paddingRight = '0px';
            window.scroll({
                top: scrollPosition
            })
        });
    })
})