function isValid() {
    if (firstName() && lastName() && email() && phone() &&username() && password()
        && address() && city() && state() && country() && zipcode())
      return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match(/^[a-zA-Z]+$/)===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}


LastName.addEventListener('blur', lastName, false);
function lastName() {
    // 1) Create variable
    var validLastname = false;

    // 2) Read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    // 3) Do validation
    if (lastname === "" || lastname.length > 20) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters.</p>";
        console.log("Last name invalid — length");
    } else if (!lastname.match(/^[a-zA-Z]+$/)) {
        errorMessages += "<p>Last name must contain only alphabetic characters (A–Z or a–z).</p>";
        console.log("Last name invalid — bad characters");
    } else {
        validLastname = true;
        console.log("Last name valid");
    }

    // 4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    // 5) Return status
    return validLastname;
}


Email.addEventListener('blur', email, false);
function email() {
    // 1) Create variable
    var validEmail = false;

    // 2) Read value from HTML
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";

    // 3) Do validation
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (userEmail === "") {
        errorMessages += "<p>Email is required.</p>";
        console.log("Email invalid — empty");
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email format. Must include '@' and a valid domain (e.g., .com, .net).</p>";
        console.log("Email invalid — bad format");
    } else {
        validEmail = true;
        console.log("Email valid");
    }

    // 4) Send error message to HTML
    document.getElementById("emailerror").innerHTML = errorMessages;

    // 5) Return status
    return validEmail;
}


Phone.addEventListener('blur', phone, false);
function phone() {
    // 1) Create variable
    var validPhone = false;

    // 2) Read value from HTML
    var phoneField = document.getElementById("Phone");
    var rawPhone = phoneField.value.replace(/\D/g, ""); // strip non-numeric

    var errorMessages = "";

    // 3) Do validation
    if (rawPhone === "") {
        errorMessages += "<p>Phone number is required.</p>";
        console.log("Phone invalid — empty");
    } else if (!/^\d+$/.test(rawPhone)) {
        errorMessages += "<p>Phone number must contain digits only.</p>";
        console.log("Phone invalid — non-digit characters");
    } else if (rawPhone.length > 15) {
        errorMessages += "<p>Phone number must not exceed 15 digits.</p>";
        console.log("Phone invalid — too long");
    } else {
        validPhone = true;
        console.log("Phone valid");

        // Optional formatting if exactly 10 digits
        if (rawPhone.length === 10) {
            const formatted = `${rawPhone.slice(0,3)}-${rawPhone.slice(3,6)}-${rawPhone.slice(6)}`;
            phoneField.value = formatted;
        }
    }

    // 4) Send error message to HTML
    document.getElementById("phoneerror").innerHTML = errorMessages;

    // 5) Return status
    return validPhone;
}


Username.addEventListener('blur', username, false);
function username() {
    // 1) Create variable
    var validUsername = false;

    // 2) Read value from HTML
    var user = document.getElementById("Username").value.trim();
    var errorMessages = "";

    // 3) Do validation
    if (user === "") {
        errorMessages += "<p>Username is required.</p>";
        console.log("Username invalid — empty");
    } else if (user.length > 12) {
        errorMessages += "<p>Username must not exceed 12 characters.</p>";
        console.log("Username invalid — too long");
    } else {
        validUsername = true;
        console.log("Username valid");
    }

    // 4) Send error message to HTML
    document.getElementById("usernameerror").innerHTML = errorMessages;

    // 5) Return status
    return validUsername;
}


Password.addEventListener('blur', password, false);
function password() {
    // 1) Create variable
    var validPassword = false;

    // 2) Read value from HTML
    var pass = document.getElementById("Password").value;
    var errorMessages = "";

    // 3) Do validation
    if (pass === "") {
        errorMessages += "<p>Password is required.</p>";
        console.log("Password invalid — empty");
    } else if (pass.length > 7) {
        errorMessages += "<p>Password must not exceed 7 characters.</p>";
        console.log("Password invalid — too long");
    } else if (!pass.match(/[A-Z]/)) {
        errorMessages += "<p>Password must include at least one uppercase letter.</p>";
        console.log("Password invalid — missing uppercase");
    } else if (!pass.match(/[a-z]/)) {
        errorMessages += "<p>Password must include at least one lowercase letter.</p>";
        console.log("Password invalid — missing lowercase");
    } else if (!pass.match(/[0-9]/)) {
        errorMessages += "<p>Password must include at least one number.</p>";
        console.log("Password invalid — missing number");
    } else if (!pass.match(/[^A-Za-z0-9]/)) {
        errorMessages += "<p>Password must include at least one special character.</p>";
        console.log("Password invalid — missing special char");
    } else {
        validPassword = true;
        console.log("Password valid");
    }

    // 4) Send error message to HTML
    document.getElementById("passworderror").innerHTML = errorMessages;

    // 5) Return status
    return validPassword;
}


Address.addEventListener('blur', address, false);
function address() {
    // 1) Create variable
    var validAddress = false;

    // 2) Read value from HTML
    var addr = document.getElementById("Address").value;
    var errorMessages = "";

    // 3) Do validation
    if (addr === null || addr.trim() === "") {
        errorMessages += "<p>Address is required.</p>";
        console.log("Address invalid — empty");
    } else {
        validAddress = true;
        console.log("Address valid");
    }

    // 4) Send error message to HTML
    document.getElementById("addresserror").innerHTML = errorMessages;

    // 5) Return status
    return validAddress;
}


City.addEventListener('blur', city, false);
function city() {
    // 1) Create variable
    var validCity = false;

    // 2) Read value from HTML
    var cityValue = document.getElementById("City").value;
    var errorMessages = "";

    // 3) Do validation
    if (cityValue === null || cityValue.trim() === "") {
        errorMessages += "<p>City is required.</p>";
        console.log("City invalid — empty");
    } else {
        validCity = true;
        console.log("City valid");
    }

    // 4) Send error message to HTML
    document.getElementById("cityerror").innerHTML = errorMessages;

    // 5) Return status
    return validCity;
}


State.addEventListener('blur', state, false);
function state() {
    // 1) Create variable
    var validState = false;

    // 2) Read value from HTML
    var stateValue = document.getElementById("State").value;
    var errorMessages = "";

    // 3) Do validation
    if (stateValue === "") {
        errorMessages += "<p>State is required.</p>";
        console.log("State invalid — not selected");
    } else {
        validState = true;
        console.log("State valid");
    }

    // 4) Send error message to HTML
    document.getElementById("stateerror").innerHTML = errorMessages;

    // 5) Return status
    return validState;
}

Country.addEventListener('blur', country, false);
function country() {
    // 1) Create variable
    var validCountry = false;

    // 2) Read value from HTML
    var countryValue = document.getElementById("Country").value;
    var errorMessages = "";

    // 3) Do validation
    if (countryValue === "") {
        errorMessages += "<p>Country is required.</p>";
        console.log("Country invalid — not selected");
    } else {
        validCountry = true;
        console.log("Country valid: " + countryValue);
    }

    // 4) Send error message to HTML
    document.getElementById("countryerror").innerHTML = errorMessages;

    // 5) Return status
    return validCountry;
}


Zip.addEventListener('blur', zipcode, false);
function zipcode() {
    // 1) Create variable
    var validZip = false;

    // 2) Read values
    var zip = document.getElementById("Zip").value.trim();
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    // 3) Conditional validation
    if (country === "USA") {
        if (zip === "" || zip.length !== 5 || !/^\d{5}$/.test(zip)) {
            errorMessages += "<p>Zip code is required (exactly 5 digits) for USA.</p>";
            console.log("Zip invalid for USA");
        } else {
            validZip = true;
            console.log("Zip valid for USA");
        }
    } else {
        validZip = true; // Zip not required for non-USA countries
        console.log("Zip skipped — not USA");
    }

    // 4) Output error message
    document.getElementById("ziperror").innerHTML = errorMessages;

    // 5) Return status
    return validZip;
}
