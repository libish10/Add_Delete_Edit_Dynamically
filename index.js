displayRes();

function Display(formval) {

    var user_id = parseInt(formval.Unique_Id.value);
    var isEdit = user_id ? true : false;
    var idValue = Math.floor(Math.random() * 1000);
    var oldItems = JSON.parse(localStorage.getItem("userDetails")) || [];

    if (isEdit) {
        oldItems.map((items, index) => {
            if (items.id === user_id) {
                oldItems[index].fname = formval.First_Name.value;
                oldItems[index].lname = formval.Last_Name.value;
                oldItems[index].email = formval.Email.value;
            }
        });
    } else {

        var newItem = {
            fname: formval.First_Name.value,
            lname: formval.Last_Name.value,
            email: formval.Email.value,
            id: idValue,
        };

        oldItems.push(newItem);
    }

    localStorage.setItem("userDetails", JSON.stringify(oldItems));

    displayRes();
}

function displayRes() {
    var data = JSON.parse(localStorage.getItem("userDetails")) || [];
    if (data) {
        var Result = "";
        data.map(user => {
            Result +=
                `<tr ${user.id}><td class='FName1'>` +
                user.fname +
                `</td><td class='LName1'>` +
                user.lname +
                `</td><td class='Email'>` +
                user.email +
                `</td><td id='deleteicon' ><i onclick='RemoveDetail(${user.id})'class='fas fa-trash' /i></td><td id='editIcon'>
                <i class="fas fa-edit" onclick='EditDetail(${user.id})'></i></td></tr>`;
        });

        var DisplayResult =
            "<table class='Table'><tr><th class='FName Heading'>First Name</th><th class='LName Heading'>Last Name</th> <th class='Email Heading'>Email</th><th class='delete'>Delete</th><th class='edit'>Edit</th></tr>" +
            Result +
            "</table>";
        document.getElementById("root").innerHTML = DisplayResult;
    }
}

function RemoveDetail(id) {


    var storedVal = JSON.parse(localStorage.getItem("userDetails"));

    var RemovedVal = storedVal.filter(element => element.id == id);
    console.log(RemovedVal)
    var RemovedRow = JSON.stringify(RemovedVal);
    console.log("Removed Value >>>>\n");
    console.log(RemovedRow);
    var UpdatedVal = storedVal.filter(element => element.id !== id);
    console.log(UpdatedVal)
    console.log("Updated Value >>>>\n");
    console.log(JSON.stringify(UpdatedVal));
    localStorage.setItem("userDetails", JSON.stringify(UpdatedVal))
    displayRes()

}

function EditDetail(id) {

    var storedVal = JSON.parse(localStorage.getItem("userDetails"));
    var getVal = storedVal.filter(element => element.id == id);
    console.log(getVal);
    document.getElementById("First_Name").value = getVal[0].fname;
    document.getElementById("Last_Name").value = getVal[0].lname;
    document.getElementById("Email").value = getVal[0].email;
    document.getElementById("Unique_Id").value = getVal[0].id;
    document.getElementById("submit").value = "Edit Row"

}