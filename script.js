const alerts = [
    { gestureType: 'SOS', location: 'Main Street Camera 1', timestamp: '12:45 PM' },
    { gestureType: 'Help', location: 'Park Entrance Camera 5', timestamp: '1:15 PM' },
    { gestureType: 'Emergency', location: 'Mall Exit Camera 3', timestamp: '2:30 PM' }
];
// JavaScript to handle notification
let alertMessageClicked = 0;  // Counter for alert message clicks

// Select the Alert Message link
const alertLink = document.getElementById('alert-link');

// Function to add red notification
function showAlertNotification() {
    // Increase the click count
    alertMessageClicked++;

    // Add the red notification after a certain number of clicks
    if (alertMessageClicked >= 3) {  // Example: show notification after 3 clicks
        alertLink.innerHTML = 'Alert Message <span class="alert-notification">New</span>';
    }
}

// Add event listener for click
alertLink.addEventListener('click', showAlertNotification);



