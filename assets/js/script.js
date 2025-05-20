// Navbar text change


// header
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
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





// section smoother

document.querySelector('a[href="#aboutSection"]').addEventListener('click', function (e) {
  e.preventDefault();
  const section = document.querySelector('#aboutSection');
  section.scrollIntoView({
    behavior: 'smooth'
  });
});


// Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2, // Scroll animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease function
  smoothWheel: true
});

let isScrolling = false;
const scrollDelay = 100; // Delay in milliseconds

lenis.on('scroll', (e) => {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, scrollDelay);
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// aboutgallery

const images = document.querySelectorAll('.gallery img');

// Load saved active image index
const savedIndex = localStorage.getItem('activeImageIndex');
if (savedIndex !== null && images[savedIndex]) {
  images[savedIndex].classList.add('active');
} else {
  images[0].classList.add('active'); // Default to first image
}

// On hover: update active class and save index
images.forEach((img, index) => {
  img.addEventListener('mouseover', () => {
    images.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
    localStorage.setItem('activeImageIndex', index);
  });
});


// letstalk
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".letstalk .letstalk-content", {
    duration: 1,
    x: -300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".letstalk .letstalk-content",
        start: "top 20%",
        end: "bottom 0%",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
    },
  })
});


// astraunet
gsap.registerPlugin(ScrollTrigger);

gsap.to(".abt-astr img", {
  x: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".abt-astr",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});
gsap.to(".abt-astr img", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
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

// gradient text

// change text
$(document).ready(function () {
  var changebox = $(".changebox");

  var firstclone = changebox.children(":first").clone();
  changebox.append(firstclone);

  var fsstr = changebox.parent().css("font-size");
  fsstr = fsstr.slice(0, fsstr.indexOf("p"));
  var fs = parseInt(fsstr);

  changebox.css("height", changebox.parent().css("line-height"));
  ChangeSize(0);
  setInterval(Next, 2000);

  function Next() {
    if (typeof Next.i == 'undefined') {
      Next.i = 0;
    }
    Next.i++;
    if (Next.i == changebox.children("span").length) {
      Next.i = 1;
      changebox.scrollTop(0);
    }
    changebox.animate({
      scrollTop: (fs * Next.i) + Next.i * 5 + 3
    }, 500);
    setTimeout(function () {
      ChangeSize(Next.i);
    }, 500);
  }

  function ChangeSize(i) {
    var word = changebox.children("span").eq(i);
    var wordsize = word.css("width");
    changebox.css("width", wordsize);
  }
});



// discover

gsap.to(".discover-border", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});



// video container
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".zr-hu-video video", {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".zr-hu-video",
//     start: "top bottom",
//     end: "top top",
//     scrub: true,
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".zr-hu-video video", {
    width: "100%",
    scrollTrigger: {
      trigger: ".zr-hu-video",
      start: "top bottom", // video enters viewport
      end: "top top",      // video reaches top
      scrub: true,
      markers: false // Optional for debugging
    }
  });
});




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
const tl = gsap.timeline({
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
tl.from('.loader-logo', {
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




// who we are
gsap.from(".about-content", {
  duration: 1.5,
  x: 100, // Changed from y: -100 to x: 100 for right side entry
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 90%",
    end: "bottom 50%",
    scrub: 1.5, // Increased for smoother animation
    markers: false,
    toggleActions: "play reverse play reverse",
  },
  ease: "power2.out" // Added easing for smoother motion
});


gsap.from(".gallery", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".gallery",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});

// services
gsap.from(".service .section-title", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".service .section-title",
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});



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





// floating-element

gsap.to('.floating-element', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top top',
    end: 'bottom center',
    scrub: 1,
    markers: false
  },
  x: -window.innerWidth, // Move left (negative value)
  y: window.innerHeight, // Move down, // Counter-clockwise rotation
  ease: 'none',
  duration: 3
});


gsap.to('.floating-element11', {
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top top',
    end: 'bottom center',
    scrub: 1,
    markers: false
  },
  x: -window.innerWidth, // Move left (negative value)
  y: window.innerHeight, // Move down, // Counter-clockwise rotation
  ease: 'none',
  duration: 3
});


// event 
gsap.from(".event-head-title", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".event-head-title",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});
gsap.from(".what-we-do-section .mix-btn-out", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".what-we-do-section .mix-btn-out",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});

// projects 
gsap.from(".left-portfolio-head", {
  duration: 1,
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".left-portfolio-head",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});
gsap.from(".portfolio-head .mix-btn-out", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".portfolio-head .mix-btn-out",
      start: "top 90%",
      end: "bottom 50%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
  }
});

gsap.to('.floating-element-2', {
  scrollTrigger: {
    trigger: '.what-we-do-section',
    start: 'top top',   // animation starts when section enters the viewport
    end: 'bottom top',     // animation ends when section scrolls out
    scrub: true,
    markers: false
  },
  x: window.innerWidth + 300,    // move right
  y: window.innerHeight + 200,   // move down
  ease: 'none'
});


gsap.set(['.floating-logos-m', '.floating-logos-i', '.floating-logos-x'], {
    clearProps: 'all'  // Clear any existing properties
});


// floating text
document.addEventListener('DOMContentLoaded', function () {
  const floatingLogo = document.querySelector('.floating-logo');
  const bounds = floatingLogo.getBoundingClientRect();

  floatingLogo.addEventListener('mousemove', (e) => {
    const offsetX = e.clientX - bounds.left - bounds.width / 2;
    const offsetY = e.clientY - bounds.top - bounds.height / 2;

    const deltaX = offsetX / 10; // smaller divisor = more movement
    const deltaY = offsetY / 10;

    gsap.to(floatingLogo, {
      x: deltaX,
      y: deltaY,
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    });
});

    floatingLogo.addEventListener('mouseleave', () => {
      gsap.to(floatingLogo, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });






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


// partners
/* 2nd slider */
$(document).ready(function(){ 
  console.log("Owl Carousel init running"); // Check this shows in console

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
          0: { items: 1, stagePadding: 50 },
          600: { items: 1, stagePadding: 150 },
          700: { items: 3, stagePadding: 50 },
          1000: { items: 3, stagePadding: 100 }
      }
  });
});



///  /// ////
// about page start here
document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline");
    const line = document.querySelector(".timeline::after"); // You can't directly select pseudo-elements like this, so:
    
    // Instead, create a separate div inside .timeline to act as the line
    const lineEl = document.createElement("div");
    lineEl.classList.add("timeline-line");
    timeline.appendChild(lineEl);

    // Set its height dynamically
    const timelineHeight = timeline.offsetHeight;
    lineEl.style.height = timelineHeight + "px";
});





