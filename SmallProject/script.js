var tl = gsap.timeline();

tl.from("#nav h2",{
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
})
tl.from("h4",{
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})
tl.from("h1",{
    y: -30,
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
})