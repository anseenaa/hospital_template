function validate() {
    let x = document.getElementById("a").value;
    let xreg = /^[a-zA-Z0-9]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
    if (x == "") {
        alert("enter the email id");
        return false;
    } else if (!xreg.test(x)) {
        alert("You have entered an invalid email address!");
        return false;
    } else {
        return true;
    }
}
