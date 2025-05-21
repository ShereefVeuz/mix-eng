// nav bar scrolled
const navbar = document.getElementById('navbar');
const lenis = new Lenis({
    smooth: true
});
lenis.on('scroll', ({
    scroll
}) => {
    if (scroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


//cursor pointer
$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});
//END cursor pointer


// loader
document.body.style.overflow = 'hidden'; // Prevent scrolling during loader
window.scrollTo(0, 0); // Ensure loader is visible at top
const presvg = document.getElementById('presvg');
const tl2 = gsap.timeline({
  defaults: {
    ease: 'power2.out',
    duration: 1.5,
  },
  onComplete: () => {
    setTimeout(() => {
      document.body.style.overflow = 'visible';
    }, 500);
    document.body.style.overflow = 'visible';
    // Start text animation after loader
  }
});
const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
// Animate the logo image
tl2.from('.loader-logo', {
    y: 300,
    skewY: 15,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })
  .to('.loader-logo', {
    y: -600,
    skewY: 0,
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
  }, '+=0.3')
  // Morph SVG to curve
  .to(presvg, {
    attr: {
      d: curve
    },
    duration: 1,
    ease: 'power3.inOut',
  }, '-=0.6')
  // Morph SVG to flat
  .to(presvg, {
    attr: {
      d: flat
    },
    duration: 1,
    ease: 'power3.inOut',
  })
  // Slide loader up and out
  .to('.loader-wrap', {
    y: '-100vh',
    duration: 1.2,
    ease: 'expo.inOut',
  }, '+=0.3')
  // Hide loader after animation
  .to('.loader-wrap', {
    zIndex: -1,
    display: 'none',
    duration: 0,
  });
// END loader


// reveal type
gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type')
splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const text = new SplitType(char, {
        types: 'words'
    })
    gsap.fromTo(text.words, {
        color: bg,
    }, {
        color: fg,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'bottom 40%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
        }
    })
})
requestAnimationFrame(raf)

// what we do
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".what-we-do-section",
            start: "top top",
            end: "+=800", // increase/decrease based on scroll length
            scrub: true,
            pin: true,
            markers: false // set true for debugging
        }
    });

    // Step 1: Reveal Middle
    tl.from(".event-column-middle", {
        opacity: 0,
        y: 250,
        duration: 5,
        ease: "power2.out"
    });

    // Step 2: Reveal Right
    tl.from(".event-column-left", {
        opacity: 0,
        y: 100,
        duration: 3,
        ease: "power2.out"
    });

    // Step 3: Reveal Left
    tl.from(".event-column-right", {
        opacity: 0,
        y: 100,
        duration: 3,
        ease: "power2.out"
    });
});


//// mobile header
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;

let isOpen = false;

// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 992;
}

// Function to open the menu
function openMenu() {
  html.classList.add('no-scroll');
  body.classList.add('no-scroll');

  // Slide in menu from right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: '0%',
    ease: 'power3.out'
  });

  // Animate menu links
  gsap.fromTo(menuItems,
    { opacity: 0, x: 20 },
    {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.1,
      delay: 0.2,
      ease: 'power3.out'
    }
  );
}

// Function to close the menu
function closeMenu() {
  html.classList.remove('no-scroll');
  body.classList.remove('no-scroll');

  // Animate links out
  gsap.to(menuItems, {
    duration: 0.3,
    opacity: 0,
    x: 20,
    stagger: -0.1
  });

  // Slide out menu to the right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: isMobileView() ? '-100%' : '-50%',
    delay: 0.3,
    ease: 'power3.in'
  });
}

// Toggle menu on button click
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});

//// END mobile header

//// dropdown menu
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parent = toggle.closest('.menu-dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.menu-dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('open');
  });
});

//// END dropdown menu


// portfolio
document.querySelectorAll('.portfolio-items').forEach(item => {
  const content = item.querySelector('.portfolio-items-cont');

  item.addEventListener('mouseenter', () => {
    gsap.killTweensOf(content);
    gsap.to(content, {
      y: -30,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out"
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.killTweensOf(content);
    
    gsap.to(content, {
      y: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in"
    });
  });
});


// why mix 
        document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".step").forEach((step, index) => {
            gsap.from(step, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: step,
                start: "top 80%", 
                toggleActions: "play none none reverse"
            }
            });
        });
        });


// cta
gsap.from(".cta-content", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
        trigger: ".cta-content",
        start: "top 50%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
        onEnter: () => startCounting(),
    }
});


// astraunet 2
gsap.registerPlugin(ScrollTrigger);

gsap.to(".abt-astr2 img", {
  x: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".abt-astr2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});
gsap.to(".abt-astr2 img", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});



// inner banner
var tl = gsap.timeline({
  defaults: {
    autoAlpha: 0,
    ease: "power2",
    duration: 1
  }
});

tl.from(".inner-banner img", { scale: 1.2, duration: 10 })
 .from(".inner-banner-cnt h2", { x: -50 }, 0.5)
  .from(".inner-banner-cnt p", { x: -50 }, 0.9)

// tl.to(".inner-banner img", { scale: 1.2, opacity: 1, duration: 10 })
  //   .from(".inner-banner img", { opacity: 0, duration: 1 }, "<")
  //   .from("h2", { x: -30 }, 0.7)
//   .from(".inner-banner", { duration: 2, x: 30 }, 1.1)
//   .from(".button", { y: 30 }, 1.3);


// partners
gsap.registerPlugin(ScrollTrigger);

gsap.from(".partners-item-out.owl-carousel .item", {
  duration: 200,
  x: 100,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".partners-item-out.owl-carousel .item",
    start: "top 100%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".partners-item-out2.owl-carousel .item", {
  duration: 200,
  x: -100,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".partners-item-out2.owl-carousel .item",
    start: "top 100%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});


// partners about
$(document).ready(function(){ 
        let owl2 = $(".partners-item-out");
        owl2.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true, 
        stagePadding: 0, 
        responsive: {
            0: { 
                items: 1
            },
            400: { 
                items: 2
            },
            700: { 
                items: 3
            },
            1000: { 
                items: 5
            }
        }
    });
    });

// partners about
$(document).ready(function(){ 
        let owl2 = $(".partners-item-out2");
        owl2.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true, 
        rtl: true,
        stagePadding: 0, 
        responsive: {
            0: { 
                items: 1
            },
            400: { 
                items: 2
            },
            700: { 
                items: 3
            },
            1000: { 
                items: 5
            }
        }
    });
    });


// teams about
gsap.from(".team-block-three", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".team-block-three",
        start: "top 60%",
        toggleActions: "play none none reverse",
    }
});

// service page
gsap.from(".inner-serv-cont .serv-inner-items-out", {
    duration: 1,
    x: 100,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".inner-serv-cont .serv-inner-items-out",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
});
