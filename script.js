function validateform(event){
    let isValid = true;
    const uname = document.getElementById("un");
    const uemail = document.getElementById("ue");
    const upassword = document.getElementById("up");
    const ugender = document.getElementById("ug");
    if (uname.value.trim() === ""){
        document.getElementById("nv").textContent = "Name required";
        document.getElementById("nv").style.color = "red";
        isValid = false;
    }
    if (uemail.value.trim() === ""){
        document.getElementById("ev").textContent = "Email required";
        document.getElementById("ev").style.color = "red";
        isValid = false;
    }
    if (upassword.value.trim().length < 6){
        document.getElementById("pv").textContent = "Minimum 6 characters required";
        document.getElementById("pv").style.color = "red";
        isValid = false;
    }
    if (ugender.value.trim() === ""){
        document.getElementById("gv").textContent = "Select gender";
        document.getElementById("gv").style.color = "red";
        isValid = false;
    }
    if (isValid){
        window.alert("Registration Successful!");
        document.getElementById("success").textContent = "Registration Successful!";
        document.getElementById("success").style.color = "green";
    }
    if (!isValid) {
        event.preventDefault();
    }
    return isValid;
}