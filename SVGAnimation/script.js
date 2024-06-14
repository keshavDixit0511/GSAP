var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
    path = `M 10 100 Q ${e.clientX} ${e.clientY} 990 100`;
    console.log(path)

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", (e) => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    });
});
