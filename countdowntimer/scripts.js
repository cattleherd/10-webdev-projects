const winter = " Dec 21 2021 10:58:54 GMT-0400 "

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const winterDate = new Date(winter);
    const currentDate = new Date();
    const totalSeconds = (winterDate - currentDate) / 1000;
    const totalDays = totalSeconds / 60 / 60 / 24;
    const totalHours = totalSeconds / 60 / 60;
    const totaMinutes = totalSeconds / 60;


    const daysRemaining = Math.floor(totalDays);
    const hoursRemaining = Math.round((totalSeconds / 60 / 60) % 24);
    const minutesRemaining = Math.floor((totalSeconds / 60) % 60);
    const secondsRemaining = Math.floor(totalSeconds % 60);


    daysEl.innerHTML = daysRemaining;
    hoursEl.innerHTML = hoursRemaining;
    minutesEl.innerHTML = minutesRemaining;
    secondsEl.innerHTML = secondsRemaining;

}

countdown();
setInterval(countdown, 1000)