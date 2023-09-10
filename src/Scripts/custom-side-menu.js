document.addEventListener("DOMContentLoaded", function () {
    const contentWrapper = window['all-contents-wrapper'];
    window['sidemenu-container'].addEventListener('show.bs.offcanvas', () => {
        var scrollPosition = window.scrollY;
        window['all-contents-wrapper'].classList.remove("expand-contents");
        contentWrapper.classList.add("shrinkfy-contents");
        document.querySelector("main").scroll({
            top: scrollPosition,
            behavior: 'smooth'
          });
    })

    window['sidemenu-container'].addEventListener('hide.bs.offcanvas', () => {
        var scrollPosition = document.querySelector("main").scrollTop;

        const animationTiming = {
            duration: 400,             
            iterations: 1, 
            easing: 'ease',
        };
        const animationKeyframes = [
            {
                transform: 'scale(0.7) translateX(calc((-1 * 400px * 1.2)))',
                maxHeight: '100vh',
                overflowY: 'scroll'
            },
            {
                transform: 'scale(1)',
                maxHeight: '100vh',
                overflowY: 'scroll'
            },
        ];
        contentWrapper.animate(animationKeyframes, animationTiming)
            .onfinish = function (e) {
                window.scroll({
                    top: scrollPosition,
                    behavior: 'smooth'
                })
                
            }
        contentWrapper.classList.remove("shrinkfy-contents");
    })
})