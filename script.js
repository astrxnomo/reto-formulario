function showAlert() {

    let nameInput = document.getElementById("nameInput").value;
    let nameInUpperCase = nameInput.toUpperCase();

    if (nameInput) {
        alert(`El nombre ingresado en mayúsculas es: ${nameInUpperCase}`);
    }
}

function showButton() {
    let button = document.getElementById("submitButton");
    button.disabled = false;
}