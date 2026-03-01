function validateform(event){
    event.preventDefault();

    let isValid = true;

    const uname = document.getElementById("un");
    const uemail = document.getElementById("ue");
    const upassword = document.getElementById("up");
    const ugender = document.getElementById("ug");

    document.getElementById("nv").textContent = "";
    document.getElementById("ev").textContent = "";
    document.getElementById("pv").textContent = "";
    document.getElementById("gv").textContent = "";
    document.getElementById("success").textContent = "";

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

    if (upassword.value.trim() === ""){
        document.getElementById("pv").textContent = "Password required";
        document.getElementById("pv").style.color = "red";
        isValid = false;
    }
    else if (upassword.value.length < 6){
        document.getElementById("pv").textContent = "Minimum 6 characters required";
        document.getElementById("pv").style.color = "red";
        isValid = false;
    }

    if (ugender.value === ""){
        document.getElementById("gv").textContent = "Select gender";
        document.getElementById("gv").style.color = "red";
        isValid = false;
    }

    if (isValid){
        alert("Registration Successful!");
        document.getElementById("success").textContent = "Registration Successful!";
        document.getElementById("success").style.color = "green";
    }
}