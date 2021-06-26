function validateForm() {

    const form = document.getElementsByClassName('get-notified')[0];
    const emailField = document.getElementById("email")
    const emailValue = emailField.value;
    const errorMessage = form.children[1];

    if (emailValue === '' || emailValue === null) {
        emailField.classList.add('error');
        errorMessage.classList.add('error');
        return false;
    }
    return true;
}


