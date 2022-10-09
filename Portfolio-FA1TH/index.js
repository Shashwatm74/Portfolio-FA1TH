// const soundCloud = document.querySelector('.sound-cloud');
// const off = document.querySelector('#off');
// const on = document.querySelector('#on');
// const myAudio = document.querySelector('#myAudio');

// off.addEventListener('click', () => soundTrack('off'));
// on.addEventListener('click', () => soundTrack('on'));

// const soundTrack = (soundState) => {
//     if (soundState === 'off') {
//         on.style.display = 'block';
//         off.style.display = 'none';
//         soundCloud.style.color = "#08fdd8";
//         myAudio.play();
//     }
//     else if (soundState === 'on') {
//         on.style.display = 'none';
//         off.style.display = 'block';
//         soundCloud.style.color = "#f50057";
//         myAudio.pause();
//     }
// }

// // Play music functionality

// const btnBars = document.querySelector('.bars');
// const btnTimes = document.querySelector('.times');
// const SideNav = document.querySelector('.aside');


// btnBars.addEventListener('click', () => myFunc('open'));
// btnTimes.addEventListener('click', () => myFunc('close'));

// const myFunc = (navCondition) => {
//     if (navCondition === 'open') {
//         SideNav.classList.add('show-nav');
//         btnTimes.style.display = "block";
//         btnBars.style.display = "none";
//     }
//     else if (navCondition === 'close') {
//         SideNav.classList.remove('show-nav');
//         btnTimes.style.display = "none";
//         btnBars.style.display = "block";
//     }
// }

// trails

const maxTrail = 100;
let trailIndex = 0;
const moveThreshold = 10;
const maxSpeed = 5000;
const maxSize = 24;
const maxColor = 16777215;
let x = 0;
let y = 0;
let diffX = 0;
let diffY = 0;

window.addEventListener("mousemove", (e) => {
    diffX = Math.abs(x - e.offsetX);
    diffY = Math.abs(y - e.offsetY);
    if (diffX >= moveThreshold || diffY >= moveThreshold) {
        spawnTrail(e);
    }

    x = e.offsetX;
    y = e.offsetY;
});

function spawnTrail(e) {
    if (trailIndex >= maxTrail) return;
    trailIndex++;
    const trail = document.createElement("div");

    let size = Math.floor(Math.random() * maxSize + 1) + "px";
    let speed = Math.floor(Math.random() * maxSpeed + 1);
    let color = "#" + Math.floor(Math.random() * maxColor).toString(16);
    trail.classList.add("trail");
    trail.style.backgroundColor = color;
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    trail.style.width = size;
    trail.style.animation = "trail " + speed + "ms linear forwards";
    setTimeout(function () {
        trail.remove();
        trailIndex--;
    }, speed);

    document.body.appendChild(trail);
}


