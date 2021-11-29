function validateform() {
    var zipcode = document.validation.zipcode.value;
    var username = document.validation.username.value;
    var email = document.validation.email.value;

    regexp = /^[1-9][0-9]{5}$/;

    if (!regexp.test(zipcode)) {
        window.alert("Enter correct zipcode");
        return false;
    }
    if (username.length != 6 && username.length != 7 && username.length != 8) {
        window.alert("Enter correct username");
        return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        window.alert("Enter correct email address");
        return false;
    }
    return true;
}