const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const onClickStart = document.querySelector('[data-action="start"]');
const onClickStop = document.querySelector('[data-action="stop"]');

onClickStart.addEventListener('click', intervalStartShow);
onClickStop.addEventListener('click', intervalStopShow);
console.log(onClickStart);
console.log(onClickStop);

const min = 0;
const max = colors.length - 1;
const INTERVAL = 1000;
let showId = null;
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
function intervalStartShow() {
    showId = setInterval(() => {
        const index = randomIntegerFromInterval(min, max);
        const color = colors[index];
        document.body.style.backgroundColor = color;
        console.log(color)
    }, INTERVAL)
    onClickStart.disabled = true
}

function intervalStopShow() {
    clearInterval(showId)
    onClickStart.disabled = false
}