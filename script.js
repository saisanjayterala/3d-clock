const secondHand = document.querySelector('.second-hand');  
const minuteHand = document.querySelector('.minute-hand');  
const hourHand = document.querySelector('.hour-hand');  
const dateDisplay = document.querySelector('.date-display');

function setDate() {  
    const now = new Date();  

    const seconds = now.getSeconds();  
    const secondsDegrees = ((seconds / 60) * 360) + 90;  
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;  

    const minutes = now.getMinutes();  
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;  

    const hours = now.getHours();  
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;  
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;  

    // Set the date display
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateDisplay.textContent = dateString;
}  

setInterval(setDate, 1000);  
setDate(); 
