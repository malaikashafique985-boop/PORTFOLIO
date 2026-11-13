
// GET CONTACT FORM

let form = document.getElementById("contactForm");

// ADD SUBMIT EVENT

form.addEventListener("submit", function(event) {

    // PREVENT PAGE RELOAD

    event.preventDefault();

    // GET USER INPUT

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    // DISPLAY RESPONSE

    document.getElementById("response").innerHTML =
        "Thank you, " + name +
        "! Your message has been received.";

    // CLEAR FORM

    form.reset();

});
