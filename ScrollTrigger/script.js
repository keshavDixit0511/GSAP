gsap.from("#page1 #box",{
    scale: 0,
    duration: 1,
    rotate: 360,
})
gsap.to("#page2 h1",{
    transform: "translate(-190%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})
gsap.from("#page3 h1",{
    scale: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})
gsap.from("#page3 h2",{
    scale: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})

gsap.from("#page4 h1",{
    scale: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})
gsap.from("#page4 h2",{
    scale: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 h2",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})
