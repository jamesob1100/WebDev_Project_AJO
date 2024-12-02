const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const contactMethod = document.getElementById('contact_method');
const form = document.getElementById('contact');

// Error message elements
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');
const messageError = document.querySelector('.message-error');
const contactMethodError = document.querySelector('.select-error');


form.addEventListener('submit', function(e) {
    let isValid = true;  // Assume the form is valid

    // Clear all previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';
    contactMethodError.textContent = '';

    // Check if the name field is empty
    if (name.value.trim() === '') {
        nameError.textContent = 'Please enter your full name';
        isValid = false;  
    }

    // Check if the email field is empty or has the wrong text
    if (email.value.trim() === '' || !email.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Check if the phone field is empty or has the wrong text
    if (phone.value.trim() === '' || phone.value.length !== 10) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    }

    // Check if the message is empty
    if (message.value.trim() === '') {
        messageError.textContent = 'Please enter a message';
        isValid = false;
    }

    // Check if the contact method is not selected
    if (contactMethod.value === 'Preferred Contact Method') {
        contactMethodError.textContent = 'Please select a contact method';
        isValid = false;
    }

    // If the form is not valid, prevent submission
    if (!isValid) {
        e.preventDefault();
    }
});
