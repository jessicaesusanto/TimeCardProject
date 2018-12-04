function checkForm() {

    // var username = document.getElementById("username").value;
    // if (username == "" || username == null) {
    //     alert("Please enter the username!");
    //     return false;
    // }
    // if (username.search(/^[0-9a-zA-Z]\w{2,10}$/) === -1) {
    //     alert("Please enter valid username with a maximum of 10 characters!");
    //     return false;
    // }

    var firstname = document.getElementById("FirstName").value;
    if(firstname==""||firstname==null) {
        alert("Please enter the first name!");
        return false;
    }
    if (firstname.search(/^[a-zA-Z]+$/) === -1) {
        alert("Please enter valid first name!");
        return false;
    }

    var lastname = document.getElementById("LastName").value;
    if(lastname==""||lastname==null) {
        alert("Please enter the last name!");
        return false;
    }
    if (lastname.search(/^[a-zA-Z]+$/) === -1) {
        alert("Please enter valid last name!");
        return false;
    }

    var dob = document.getElementById("dob").value;
    if(dob==""||dob==null) {
        alert("Please enter the date of birth!");
        return false;
    }

    var Address = document.getElementById("Address").value;
    if(Address==""||Address==null) {
        alert("Please enter your address!");
        return false;
    }

    var PhoneNo = document.getElementById("PhoneNo").value;
    if(PhoneNo==""||PhoneNo==null) {
        alert("Please enter the phone number!");
        return false;
    }
    if (PhoneNo.search(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) === -1) {
        alert("Please enter valid phone number!");
        return false;
    }

    var Email = document.getElementById("Email").value;
    if(Email==""||Email==null) {
        alert("Please enter the email address!");
        return false;
    }
    if (Email.search(/^([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]\w{2,4})$/ === -1)) {
        alert("Please enter valid email address!");
        return false;
    }

    // var Dependents = document.getElementById("Dependents").value;
    // if(Dependents==""||Dependents==null) {
    //     alert("Please enter the dependent name!");
    //     return false;
    // }
    // if (Dependents.search(/^[a-zA-Z]+$/) === -1) {
    //     alert("Please enter valid dependent name!");
    //     return false;
    // }

    var Position = document.getElementById("Position").value;
    if(Position==""||Position==null) {
        alert("Please enter the position name!");
        return false;
    }
    if (Position.search(/^[a-zA-Z]+$/) === -1) {
        alert("Please enter valid position name!");
        return false;
    }

    // var Salary = document.getElementById("Salary").value;
    // if(Salary==""||Salary==null) {
    //     alert("Please enter the salary amount!");
    //     return false;
    // }
    // if (Salary.search(/^[0-9]/) === -1) {
    //     alert("Please enter valid salary amount!");
    //     return false;
    // }

//     var StartDate = document.getElementById("StartDate").value;
//     if(StartDate==""||StartDate==null) {
//         alert("Please enter the start date!");
//         return false;
//     }
//
//
//     var Benefits = document.getElementById("Benefits").value;
//     if(Benefits==""||Benefits==null) {
//         alert("Please enter the benefits information!");
//         return false;
//     }
//
//     var PaidLeave = document.getElementById("PaidLeave").value;
//     if(PaidLeave==""||PaidLeave==null) {
//         alert("Please enter the paid leave days!");
//         return false;
//     }
//     if (Paidleave.search(/^[0-9]/) === -1) {
//         alert("Please enter valid paid leave days!");
//         return false;
//     }
//
//     var UnpaidLeave = document.getElementById("UnpaidLeave").value;
//     if(UnpaidLeave==""||UnpaidLeave==null) {
//         alert("Please enter the unpaid leave days!");
//         return false;
//     }
//     if (UnpaidLeave.search(/^[0-9]/) === -1) {
//         alert("Please enter valid unpaid leave days!");
//         return false;
//     }
// }