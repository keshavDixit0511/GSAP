// gsap.to("#box1",{
//     x: 1000,
//     duration:2,
//     delay:1,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     rotate: 360,
//     repeat: -1,
//     yoyo: true
// })

// gsap.from("#box2",{
//     x: 1000,
//     duration:2,
//     delay:1
// })
// gsap.to("#box3",{
//     y: 200,
//     duration:2,
//     delay:1
// })



//timeline
var tl = gsap.timeline();


tl.to("#box1",{
    x: 1000,
    duration:2,
    delay:1,
    backgroundColor: "blue",
    borderRadius: "50%",
    rotate: 360,
    repeat: -1,
    yoyo: true
})
tl.to("#box2",{
    x: 1000,
    duration:2,
    backgroundColor: "green",
    borderRadius: "50%",
    rotate: 360,
    repeat: -1,
    yoyo: true
})
tl.to("#box3",{
    x: 1000,
    duration:2,
    backgroundColor: "salmon",
    borderRadius: "50%",
    rotate: 360,
    repeat: -1,
    yoyo: true
})

