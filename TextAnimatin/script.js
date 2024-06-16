function breakTheText(){
    var h1 = document.querySelector('h1')
    var text = h1.textContent

    var splitText = text.split('')
    var halfvalue = Math.floor(splitText.length / 2)
    var clutter = ""

    splitText.forEach((char, index) => {
        if(index < halfvalue){
            clutter += `<span class="a">${char}</span>`
        }else{
            clutter += `<span class="b">${char}</span>`
        }
    })

    h1.innerHTML = clutter
}


breakTheText()

gsap.from("h1 .a",{
    y: 90,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.10
})
gsap.from("h1 .b",{
    y: 90,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    stagger: -0.10
})