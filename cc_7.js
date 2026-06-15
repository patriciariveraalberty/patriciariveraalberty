const headlineInput =
    document.getElementById("headlineInput");

const updateButton =
    document.getElementById("updateButton");

const ctaHeading =
    document.getElementById("ctaHeading");
    updateButton.addEventListener("click", function () {

    ctaHeading.textContent =
        headlineInput.value;

});