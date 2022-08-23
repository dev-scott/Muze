

      TweenMax.to(".center", 4, {
            delay: 1.6,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.from(".logo", 3, {
            delay: 1.9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".hero", 3, {
    
        delay:1.5,
        duration:0.5,
        height:0,
        opacity:0,
        } )
      TweenMax.from(".hero2", 3, {

    
        delay:2,
        duration:0.5,
        height:0,
        opacity:0,
      top: "-110%",

        })


//         tl.from('.hero', {
//     duration: 1,
//     height: 0,
//     opacity: 0
// }, "<-0.5")

      TweenMax.from(".contact", 3, {
            delay: 1.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".options", 3, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".copyright", 3, {
            delay: 1.9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 2, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.1);

      TweenMax.from(".menu", 3, {
            delay: 2.3,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p1", 3, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p2", 3, {
            delay: 1.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#one", 3, {
            delay: 1.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#two", 3, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });
  
      var t1 = new TimelineMax();

      t1.from(".ringOne", 4, {
            delay: 0.4,
            opacity: 0,
            y:40,
            ease: Expo.easeInOut
      }).from(".ringTwo", 4, {
            delay: 0.9,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
      }, "-=5").to(".ringOne", 4, {
            delay: 0.4,
            x: 40,
            ease: Expo.easeInOut
      }).to(".ringTwo", 4, {
            delay: 0.9,
            x: 40,
            ease: Expo.easeInOut
      },"-=5");

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 4000 + 50 * i;
    }
  });


//   let tl = gsap.timeline();

//   tl.from('.hero', {
//     duration: 1,
//     height: 0,
//     opacity: 0
// }, "<-0.5")

// tl.from('.hero', {
//     height: 0,
//     duration: 1,
//     opacity: 0
// }, "<-0.5")



//   anime js animation

var svgAttributes = anime({
  targets: '#svgAttributes polygon',
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  easing: 'easeInOutExpo'
});

// animation du menu burgeur




let toggle = document.querySelector('.toggle');
console.log(toggle)
let body = document.querySelector('body');
console.log(body)



let t5 = gsap.timeline();

toggle.addEventListener('click', function() {
    if(body.classList.contains('open')) {
        console.log("ff");
        // //Fermer le menu.
        body.classList.remove('open');
        t5.to('.separation_menu', {
            duration: 0,
            width: 0
        })

        t5.to('.circle_menu', {
            duration: 0,
            opacity: 0
        })
    }
    else {
        console.log("dd")
        // //Ouvrir le menu.
        body.classList.add('open');

        t5.to('.separation_menu', {
            duration: 0.75,
            width: '100%',
            delay: 0.5
        });

        t5.to('.circle_menu', {
            opacity: 1,
            duration: 0.25,
            delay: -0.5
        })

        t5.from('.menu__left__inner__item', {
            y: 40,
            opacity: 0,
            stagger: 0.25
        }, "<-0.5")

        t5.from('.menu__right__inner__item', {
            y: 40,
            opacity: 0,
            stagger: 0.25
        }, "<0.5")
    }
})