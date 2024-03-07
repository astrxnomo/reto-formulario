function showAlert() {
    const element = this;
    console.log(element)
    console.log(document.getElementById("nameInput"))
    const nameEntered = element.value.trim();

    if (nameEntered) {
        const nameInUpperCase = nameEntered.toUpperCase();
        alert(`El nombre ingresado en mayúsculas es: ${nameInUpperCase}`);
    }
}