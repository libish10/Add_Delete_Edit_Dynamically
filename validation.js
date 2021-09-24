function validate() {


    //FirstName
    var firstName = document.getElementById("First_Name").value;
    var vaildFname = firstName.match(/\d+/g);
    console.log(firstName);

    //LastName
    var lastName = document.getElementById("Last_Name").value;
    var vaildLname = lastName.match(/\d+/g);
    console.log(lastName);

    //Email
    var email = document.getElementById("Email").value;
    var dotPos = email.lastIndexOf(".");
    var atPos = email.indexOf("@");
    console.log("atPos->>>>" + atPos + "\ndotPos->>>>" + dotPos)
    var includesItem = " /^[a-zA-Z_0-9@\!#\$\^%&*()+=\-[]\\\';,\.\/\{\}\|\":<>\? ]+$/"
    console.log(email);

    var flag = false;


    if (firstName == " ") {
        document.getElementById("FirstNameError").innerHTML = "Enter a First Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a First Name");
        flag = true;
    } else if (vaildFname != null) {
        document.getElementById("FirstNameError").innerHTML = "Enter a valid Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a Name Contains Number");
        flag = true;

    } else if (((firstName[0] >= "A" && firstName[0] <= "Z") &&
            ([firstName.substr(1) >= "a" && firstName.substr(1) <= "z"] || (firstName.substr(1) == " ") || [firstName.substr(1) >= "A" && firstName.substr(1) <= "Z"])) && (vaildFname == null)) {

        document.getElementById("FirstNameError").style.display = "none";
        document.getElementById("First_Name").style.border = "3px solid green";
        flag = false;
    } else {
        document.getElementById("FirstNameError").innerHTML = "Enter a valid Name";
        document.getElementById("First_Name").style.border = "3px solid red";
        console.log("Enter a Valid Name");
        flag = true;
    }





    if (lastName == " ") {
        document.getElementById("LastNameError").innerHTML = "Enter a Last Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Last Name");
        flag = true;
    } else if (vaildLname != null) {
        document.getElementById("LastNameError").innerHTML = "Enter a valid Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Name Contains Number");
        flag = true;

    } else if (((lastName[0] >= "A" && lastName[0] <= "Z") &&
            ([lastName.substr(1) >= "a" && lastName.substr(1) <= "z"] || (lastName.substr(1) == " ") || [lastName.substr(1) >= "A" && lastName.substr(1) <= "Z"])) && (vaildLname == null)) {

        document.getElementById("LastNameError").style.display = "none";
        document.getElementById("Last_Name").style.border = "3px solid green";
        flag = false;
    } else {
        document.getElementById("LastNameError").innerHTML = "Enter a valid Name";
        document.getElementById("Last_Name").style.border = "3px solid red";
        console.log("Enter a Valid Name");
        flag = true;
    }





    if (email == " ") {
        document.getElementById("EmailError").innerHTML = "Enter your Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a email id");
        flag = true;
    } else if (((dotPos - atPos) < 2) || (atPos < 2) || (email.endsWith(".") == true)) {
        document.getElementById("EmailError").innerHTML = "Enter your valid Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a email id");
        flag = true;
    } else if ((atPos > 2) && ((dotPos - atPos) > 2) && ([email.substring(0, atPos).match(includesItem)] || [email.substring(atPos + 1, dotPos).match(includesItem)] || email.substring(dotPos + 1).match["/A-za-z0-9/"])) {
        document.getElementById("EmailError").style.display = "none";
        document.getElementById("Email").style.border = "3px solid green";
        console.log("Valid Mail Id");
        flag = false;
    } else {
        document.getElementById("EmailError").innerHTML = "Enter a correct Email Id";
        document.getElementById("Email").style.border = "3px solid red";
        console.log("Enter a correct email id");
        flag = true;
    }

    if (flag) {
        return false;
    }
}