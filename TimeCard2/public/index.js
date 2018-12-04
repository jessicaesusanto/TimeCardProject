function checkForm() {
    var Username = document.getElementById("Username").value;
    if (Username == "" || Username == null) {
        alert("Please enter your username!");
        return false
    }
    if (Username.search(/^[0-9a-zA-Z]\w{2,10}$/) === -1) {
        alert("Please only enter characters");
        return false
    }

    var Password = document.getElementById("Password").value;
    if (Password.length < 6) {
        alert("Please enter at least 6 characters!");
        return false;
    }
}