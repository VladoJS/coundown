let time = 3600;
const countDown = document.getElementById('countdown');

function updateCount() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds:seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;

    time--;
}

setInterval(updateCount, 1000);