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
