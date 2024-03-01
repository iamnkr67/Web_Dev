function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();


    
    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + (seconds / 60) * 0.5 + 90;
    
    document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();