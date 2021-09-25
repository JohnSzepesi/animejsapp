// anime({
//     targets: "div.box.red",
//     translateY: [
//         { value: 200, duration: 1000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//     },
// });

// anime({
//     targets: "div.box.blue",
//     translateY: [
//         { value: 200, duration: 1000, delay: 1000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         //ez a delay az egész akciót eltolja
//         delay: 1000,
//     },
// });

// anime({
//     targets: "div.box.green",
//     translateY: [
//         { value: 200, duration: 1000, delay: 2000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         //ez a delay az egész akciót eltolja
//         delay: 2000,
//     },
// });

// anime({
//     targets: "div.box.yellow",
//     translateY: [
//         { value: 200, duration: 1000, delay: 3000 },
//         { value: 0, duration: 800 },
//     ],
//     rotate: {
//         value: "1turn",
//         easing: "easeInOutSine",
//         //ez a delay az egész akciót eltolja
//         delay: 3000,
//     },
// });

//ez a function miatt ugyanzt csinálja, mint a felső 4
const playPause = anime({
    targets: "div.box",
    translateY: [
        { value: 200, duration: 1000 },
        { value: 0, duration: 800 },
    ],
    rotate: {
        value: "1turn",
        easing: "easeInOutSine",
    },
    // backgroundColor: "pink",
    opacity: "0.3",
    delay: function (el, i, l) {
        return i * 1000;
    },
    autoplay: false,
    loop: true,
});

document.querySelector("#boxes .play").onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;
