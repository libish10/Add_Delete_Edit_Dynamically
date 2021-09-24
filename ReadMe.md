if (confirm("Are you want to remove the current detail ?")) {

     } else {
        console.log("Not Remove the current the element");
    }
 var lastName = formval.Last_Name.value;

    
    if (lastName == " ") {
        document.getElementById("LastNameError").innerHTML = "Enter a First Name";
        document.getElementById("Last_Name").style.borderColor = "2px solid red";
        flag = true;
    } else if ((lastName[0] >= "a" && lastName[0] <= "z") || (lastName >= 0 && lastName <= 9)) {
        document.getElementById("LastNameError").innerHTML = "Enter a Valid Name";
        document.getElementById("Last_Name").style.borderColor = "2px solid red";
        flag = true;
    } else if ((lastName[0] >= "A" && lastName[0] <= "Z") && !(lastName >= 0 && lastName <= 9) && (lastName.substr(1) >= "a" && lastName.substr(1) <= "z")) {
        document.getElementById("LastNameError").style.display = "none";
        document.getElementById("Last_Name").style.borderColor = "2px solid green";
        flag = false;
    } else {
        document.getElementById("LastNameError").innerHTML = "Enter a Valid Name";
        document.getElementById("Last_Name").style.borderColor = "2px solid red";
        flag = true;
    }
    if (flag) {
        return false;
    }