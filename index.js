const form = document.querySelector("form");

const country = document.getElementById("l-country");
const billing  = document.getElementById("l-billing");
const header = document.getElementById("header");
const fullname = document.getElementById("l-fullname");
const emailadress = document.getElementById("l-email");
const phonenumber = document.getElementById("l-phone");
const plan = document.getElementById("l-plan");
const streetadress = document.getElementById("l-street");
const city = document.getElementById("l-city");
const zippostalcode = document.getElementById("l-zip");
const password = document.getElementById("l-password");
const confirmpassword = document.getElementById("l-confirm");
const province = document.getElementById("l-province");
//h1
const h_fullname = document.getElementById("out-fullname");
const h_city = document.getElementById("out-city");
const h_email = document.getElementById("out-email");
const h_plan = document.getElementById("out-plan");
const h_phone = document.getElementById("out-phone");
const h_zip = document.getElementById("out-zip");
const h_street = document.getElementById("out-street");
const h_country = document.getElementById("out-country");
const h_province = document.getElementById("out-province");
const h_billing = document.getElementById("out-billing");
const h_password = document.getElementById("out-password");

const reset_button = document.getElementById("cancel");
const submit_button = document.getElementById("submit");


let countries = ["Azerbaijan","Turkey","Russia"];
let billingInterval = ["Monthly","Year"]


let provinceAz = ["Baku", "Ganja", "Sumqayit", "Lankaran", "Sheki"];
let provinceTr = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];
let provinceRu = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск", "Сочи"];

for (let i = 0; i < billingInterval.length; i++) {
    const option = document.createElement("option");
    option.textContent = billingInterval[i];
    option.value = billingInterval[i];
    billing.appendChild(option);
}

for (let i = 0; i < countries.length; i++) {
    const option = document.createElement("option");
    option.textContent = countries[i];
    option.value = countries[i];
    country.appendChild(option);
}

function fillProvinces() {
    let list = [];

    if (country.value === "Azerbaijan") list = provinceAz;
    else if (country.value === "Turkey") list = provinceTr;
    else if (country.value === "Russia") list = provinceRu;

    province.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const option = document.createElement("option");
        option.textContent = list[i];
        option.value = list[i];
        province.appendChild(option);
    }
}

fillProvinces();                                  
country.addEventListener("change", fillProvinces);




// ------------------
// h_billing.innerHTML = "Billing: " + billing.value;
// h_plan.innerHTML = "Plan: " + plan.value;
// h_email.innerHTML = "Email: " + emailadress.value;
// h_password.innerHTML = "Password: " + password.value;
// h_phone.innerHTML = "Phone: " + phonenumber.value;

// h_street.innerHTML = "Street adress: " + streetadress.value;
// h_province.innerHTML = "Province: " + province.value;
// h_country.innerHTML = "Country: " + country.value;
// h_city.innerHTML = "City: " + city.value;
// h_phone.innerHTML = "Zip: " + zippostalcode.value;

// h_fullname.innerHTML = "Full name: " + fullname.value;


const inputs = [fullname, emailadress, phonenumber, plan, streetadress, city, zippostalcode, password, confirmpassword];

function checkInputs() {
    let allFilled = true;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            allFilled = false;
            break;
        }
    }

    submit_button.disabled = !allFilled;
    submit_button.style.backgroundColor = allFilled ? "#5b8fc7" : "gray";
    submit_button.style.cursor = allFilled ? "pointer" : "not-allowed";
}

checkInputs();

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", checkInputs);
}

reset_button.addEventListener("click", function () {
    setTimeout(checkInputs, 0);
});


let person = {};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (password.value !== confirmpassword.value) {
        alert("Passwords do not match!");
        return;
    }

    // Şifreler aynıysa buraya girer
    h_fullname.textContent = "Full name: " + fullname.value;
    h_email.textContent    = "Email: " + emailadress.value;
    h_phone.textContent    = "Phone: " + phonenumber.value;
    h_plan.textContent     = "Plan: " + plan.value;
    h_billing.textContent  = "Billing: " + billing.value;
    h_street.textContent   = "Street adress: " + streetadress.value;
    h_city.textContent     = "City: " + city.value;
    h_province.textContent = "Province: " + province.value;
    h_zip.textContent      = "Zip: " + zippostalcode.value;
    h_country.textContent  = "Country: " + country.value;
    h_password.textContent = "Password: " + password.value;

    person = {
        fullName: fullname.value,
        emailAddress: emailadress.value,
        phoneNumber: phonenumber.value,
        plan: plan.value,
        billingInterval: billing.value,
        streetAddress: streetadress.value,
        city: city.value,
        province: province.value,
        zipPostalCode: zippostalcode.value,
        country: country.value,
        password: password.value
    };
    console.log(person);
});