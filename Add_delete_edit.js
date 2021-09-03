displayRes();

function Validate(formval) {
    var idValue = Math.floor(Math.random() * 1000);
    var oldItems = JSON.parse(localStorage.getItem("userDetails")) || [];

    var newItem = {
        fname: formval.First_Name.value,
        lname: formval.Last_Name.value,
        email: formval.Email.value,
        id: idValue,
    };

    oldItems.push(newItem);

    localStorage.setItem("userDetails", JSON.stringify(oldItems));

    displayRes();
}

function displayRes() {
    var data = JSON.parse(localStorage.getItem("userDetails")) || [];
    if (data) {
        var Result = "";
        data.map((user, index) => {
            Result +=
                `<tr><td class='FName1'>` +
                user.fname +
                `</td><td class='LName1'>` +
                user.lname +
                `</td><td class='Email'>` +
                user.email +
                `</td><td id='deleteicon' ><i onclick='Remove(id)'class='fas fa-trash' /i> Delete</td></tr>`;
        });

        var DisplayResult =
            "<table class='Table'><tr><th class='FName Heading'>First Name</th><th class='LName Heading'>Last Name</th> <th class='Email Heading'>Email</th><th class='delete'>Delete</th></tr>" +
            Result +
            "</table>";
        document.getElementById("root").innerHTML = DisplayResult;
    }
}

function clear() {
    alert("clear the table and localStorage");
    localStorage.clear()
    displayRes();
}