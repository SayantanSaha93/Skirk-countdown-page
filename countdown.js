// Set the target date (Modify as needed)
const targetDate = new Date("June 18, 2025 08:30:00 GMT +5:30");

// Function to update countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "Time's up!";
    }
}

// Function to display release date dynamically
function displayReleaseDate() {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById("release-date").textContent = targetDate.toLocaleDateString('en-US', options);
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set everything on page load
updateCountdown();
displayReleaseDate();
