document.addEventListener("DOMContentLoaded", function () {
    const contentWrapper = window['all-contents-wrapper'];
    const getScrollBarWidth = function () {
        let div = document.createElement("div");
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.overflow = 'scroll';
        div.style.top = '-200px';
        div.style.position = 'absolute';
        div.style.transform = 'translate(-100%)';
        document.body.appendChild(div);
        const scrollBarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        div = undefined;
        return scrollBarWidth;
    }
    window['sidemenu-container'].addEventListener('show.bs.offcanvas', (event) => {
        var scrollPosition = window.scrollY === 0 ? document.querySelector("main").scrollTop : window.scrollY;
        contentWrapper.classList.remove("shrinkfy-contents");
        contentWrapper.classList.add("shrinkfy-contents");
        const animationTiming = {
            duration: 500,
            iterations: 1,
            easing: 'ease',
            // fill: 'forwards'
        };
        const animationKeyframes = [
            {
                transform: 'scale(1) translateX(0px)',
                maxHeight: '100vh',
                offset: 0
            },
            {
                transform: 'scale(0.7) translateX(-480px)',
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
            contentWrapper.style.transform = 'scale(0.7) translateX(-480px)';
        };

    })

    window['sidemenu-container'].addEventListener('hide.bs.offcanvas', (event) => {
        // event.stopImmediatePropagation();
        // event.stopPropagation();
        // debugger
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
        contentWrapper.style.paddingRight = (getScrollBarWidth() + 'px');
        contentWrapper.style.maxHeight = '100vh';
        window.scroll({
            top: scrollPosition
        });
        contentWrapper.style.transform = 'scale(0.7) translateX(-480px)';
        contentWrapper.animate(animationKeyframes, animationTiming).onfinish = (() => {
            contentWrapper.classList.remove("shrinkfy-contents");
            contentWrapper.style.paddingRight = '0px';
            contentWrapper.style.maxHeight = '';
            window.scroll({
                top: scrollPosition
            })
            contentWrapper.style.transform = '';
        });
    })
})