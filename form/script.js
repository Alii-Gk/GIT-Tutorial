document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const requiredFields = document.querySelectorAll('#contact-form [required]');
    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
        }
    });

    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        isValid = false;
    }

    if (isValid) {
        document.getElementById('success-message').style.display = 'block';
    }
});
