//Akan names arrays
const maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get fiorm and result elements
const form = document.getElementById ('akan form')
const resultDiv = document.getElementById ('result')

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();

// Get user inputs
const day = parseInt(document.getElementById('day').value);
const month = parseInt(document.getElementById('month').value);
const year = parseInt(document.getElementById('year').value);
const gender = document.querySelector('input[name="gender"]:checked').value;
    
// Validate inputs
if (!validateDate(day, month, year)) {
        alert('Please enter a valid date! Day must be 1-31 and month must be 1-12.');
        return;
    }
// Calculate day of week
    const dayOfWeek = calculateDayOfWeek(day, month, year);

// Get Akan name
    const akanName = getAkanName(dayOfWeek, gender);

// Display result
    displayResult(akanName, daysOfWeek[dayOfWeek]);
});

// Validation function
function validateDate(day, month, year) {
    if (day < 1 || day > 31) return false;
    if (month < 1 || month > 12) return false;
    if (year < 1990 || year > 2026) return false;
    return true;
}

// Calculate day of week using the formula
function calculateDayOfWeek(DD, MM, YYYY) {
    const CC = Math.floor(YYYY / 100); // Century
    const YY = YYYY % 100; // Year within century
    
    const dayOfWeek = Math.floor(
        ((CC / 4) - 2 * CC - 1) + 
        ((5 * YY) / 4) + 
        ((26 * (MM + 1)) / 10) + 
        DD
    ) % 7;
    
    return (dayOfWeek + 7) % 7;
}

// Get Akan name based on day and gender
function getAkanName(dayOfWeek, gender) {
    if (gender === 'female') {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }
}

// Display the result
function displayResult(name, day) {
    resultDiv.innerHTML = `Your Akan name is <strong>${name}</strong>! You were born on a ${day}.`;
    resultDiv.classList.add('show');
}

