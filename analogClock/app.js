
function clock(){
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hourHand = document.querySelector('.hour')

    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secondsAngle = 6 * seconds;
    let minutesAngle = 6 * minutes + (seconds * 0.1);
    let hoursAngle = 30*hours + minutes/2 + seconds/120;

    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}

clock();

setInterval(clock, 1000);

