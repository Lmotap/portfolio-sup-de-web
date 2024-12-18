

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.set('.about', { opacity: 0, y: 50 });

ScrollTrigger.create({
  trigger: '.hero',
  start: 'bottom 80%',
  onEnter: () => {
    gsap.to('.about', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    });
  }
});

document.querySelector('.cta-hero').addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: '.about',
    ease: 'power2.inOut'
  });
  
  gsap.to('.about', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });
});

// Initial setup
gsap.set('.wave-emoji', { opacity: 0, y: -50 });

// Create the animation sequence
gsap.timeline()
  .to('.wave-emoji', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
  .to('.wave-emoji', {
    rotation: 20,
    duration: 0.2,
    repeat: 5,
    yoyo: true,
    ease: 'none'
  })
  .to('.wave-emoji', {
    opacity: 0,
    y: 50,
    delay: 0.5,
    duration: 0.5,
    ease: 'power2.in'
  });