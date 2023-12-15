const countdownDisplay = document.getElementById("countdown-display");
const currentYear = new Date().getFullYear();
const christmas = new Date("December 25 2023 00:00:00");

function renderCountdown(){
    const currentTime = new Date();
    const diff = christmas - currentTime;

    
    
    const d = Math.floor(diff / 1000 / 60 / 60 /24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60 ;
    const s = Math.floor(diff / 1000 ) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}
 
setInterval(renderCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.