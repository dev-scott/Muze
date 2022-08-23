 new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: './images/01.png',
      image2: './images/02.png',
      displacementImage: './images/diss.png',
      imagesRatio: 380 / 300
    })

    // NAVBAR
    TweenMax.staggerFrom(".navbar div", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    }, 0.08);

    // MEDIA
    TweenMax.staggerFrom(".media ul li", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-20",
      ease: Expo.easeInOut
    }, 0.08);

    // TEXT
    TweenMax.from(".text h1 .hidetext", 1.5, {
      delay: 1,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h3 .hidetext", 1.5, {
      delay: 1.2,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text p .hidetext", 1.5, {
      delay: 1.3,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h2", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-10000",
      ease: Expo.easeInOut
    });

    // SPONSOR
    TweenMax.from(".sponsor img", 1.5, {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    TweenMax.from(".sponsor p", 1.5, {
      delay: 1.6,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // DISTORTION
    TweenMax.from(".distortion", 1.5, {
      delay: 2,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // OVERLAY
    TweenMax.to(".first", 1.5, {
      delay: .5,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".second", 1.5, {
      delay: .7,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".third", 1.5, {
      delay: .9,
      top: "-100%",
      ease: Expo.easeInOut
    });



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

// -----------------------------






