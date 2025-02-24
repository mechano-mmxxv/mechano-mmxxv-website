// Select the elements where the countdown values will be displayed
const daysElement = document.querySelector(".days .number"),
      hoursElement = document.querySelector(".hours .number"),
      minutesElement = document.querySelector(".minutes .number"),
      secondsElement = document.querySelector(".seconds .number");

// Set the target date for the event (March 20, 2025)
const targetDate = new Date("March 20, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const timeFunction = setInterval(() => {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the difference between the target date and the current date
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in respective HTML elements
    daysElement.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    hoursElement.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    minutesElement.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    secondsElement.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

    // If the countdown has finished, display a message
    if (distance < 0) {
        clearInterval(timeFunction);
        document.querySelector(".timer-container").innerHTML = "The event has started!";
    }
}, 1000); //1000ms = 1 second
