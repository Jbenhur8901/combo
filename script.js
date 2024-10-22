// script.js

const activateBtn = document.getElementById('activateBtn');
const activatingText = document.getElementById('activatingText');

// Function to dial the USSD code
const dialUSSD = () => {
    // The USSD code you want to dial
    const ussdCode = "*121*0#";
    const encodedUSSDCode = ussdCode.replace("#", "%23"); // Encode the # character

    // Create a tel link and redirect
    window.location.href = "tel:" + encodedUSSDCode;
};

// Handle the activation process
const handleActivate = () => {
    // Show the activating text
    activatingText.style.display = 'block';

    // Dial the USSD code
    dialUSSD();
};

// Automatically trigger the dialUSSD function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    dialUSSD(); // Automatically dial USSD code on first load
});

// Add click event listener to the button
activateBtn.addEventListener('click', handleActivate);