function ValidateFirstName() {
    var firstName = document.getElementById("First_Name").value;
    var vaildFname = firstName.match(/\d+/g);

    console.log(firstName);


    if (firstName == " ") {
        document.getElementById("FirstNameError").innerHTML = "Enter a First Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a First Name");
    } else if (vaildFname != null) {
        document.getElementById("FirstNameError").innerHTML = "Enter a valid Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a Name Contains Number")

    } else if (((firstName[0] >= "A" && firstName[0] <= "Z") &&
            ([firstName.substr(1) >= "a" && firstName.substr(1) <= "z"] || (firstName.substr(1) == " ") || [firstName.substr(1) >= "A" && firstName.substr(1) <= "Z"])) && (vaildFname == null)) {

        document.getElementById("FirstNameError").style.display = "none";
        document.getElementById("First_Name").style.border = "3px solid green";
    } else {
        document.getElementById("FirstNameError").innerHTML = "Enter a valid Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a Valid Name")
    }

}

function ValidateLastName() {
    var lastName = document.getElementById("Last_Name").value;
    var vaildLname = lastName.match(/\d+/g);

    console.log(lastName);


    if (lastName == " ") {
        document.getElementById("LastNameError").innerHTML = "Enter a Last Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Last Name");
    } else if (vaildLname != null) {
        document.getElementById("LastNameError").innerHTML = "Enter a valid Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Name Contains Number")

    } else if ((((lastName[0] >= "A" && lastName[0] <= "Z") &&
            ([lastName.substr(1) >= "a" && lastName.substr(1) <= "z"]) || (lastName.substr(1) == " ") || [(lastName.substr(1) >= "A" && lastName.substr(1) <= "Z")]) && (vaildLname == null))) {

        document.getElementById("LastNameError").style.display = "none";
        document.getElementById("Last_Name").style.border = "3px solid green";
    } else {
        document.getElementById("LastNameError").innerHTML = "Enter a valid Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Valid Name")
    }
}

function ValidateEmail() {

    var email = document.getElementById("Email").value;
    var dotPos = email.lastIndexOf(".");
    var atPos = email.indexOf("@");
    var includesItem = "/[^A-Za-z0-9<>()\[\]\\.,;:\~!#$%^&*_-+={}|<>?]/"
    console.log(email);
    if (email == " ") {
        document.getElementById("EmailError").innerHTML = "Enter your Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a email id");
    } else if ((dotPos - atPos) < 2 || dotPos < 1) {
        document.getElementById("EmailError").innerHTML = "Enter your valid Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a email id");
    } else if ((dotPos - atPos) > 2 && ([email.substring(0, atPos).match(includesItem)] || [email.substring(atPos + 1, dotPos).match(includesItem)] || email.substring(dotPos + 1).match["/A-za-z0-9/"])) {
        document.getElementById("EmailError").style.display = "none";
        document.getElementById("Email").style.border = "3px solid green";
        console.log("Valid Mail Id");
    } else {
        document.getElementById("EmailError").innerHTML = "Enter a correct Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a correct email id");
    }
}