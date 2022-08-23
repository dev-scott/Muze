

// const wipe = document.querySelector('.wipe-transition');
// const TLAnim = new TimelineMax();

// function delay(n) {
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n)
//   })
// }

// barba.init({

//   sync: true,

//   transitions: [
//     {
//       async leave(){

//         const done = this.async();

//               TweenMax.to(".loading-screen", 4, {
//             delay: 6.6,
//             top: "110%",
//             ease: Expo.easeInOut
//       });


//         // TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

//         await delay(1500);
//         done();

//       },
//       enter(){

//         // TLAnim
//         // .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
//         // .set(wipe, {left: '-100%'})

//                      TweenMax.to(".loading-screen", 4, {
//             delay: 6.6,
//             top: "110%",
//             ease: Expo.easeInOut
//       });

//       }
//     }
//   ]

// })










function init(){
    
    const loader = document.querySelector('.loader2');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 10,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, { 
            duration: 0.8, 
            scaleX: 0,
            xPercent: 5, 
            rotation: -10, 
            transformOrigin: 'right center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        transitions: [{
            async leave() {
                await loaderIn();
        
            },
            enter() {
                loaderAway();
            }
        }]
    })

}

window.addEventListener('load', function(){
    init();
});
