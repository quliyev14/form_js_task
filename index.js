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
const confirmpassword = document.getElementById("l-password-confirm");
const province = document.getElementById("l-province");

const r_country = document.getElementById("r-country");
const r_billing  = document.getElementById("r-billing");
const r_header = document.getElementById("header");
const r_fullname = document.getElementById("r-fullname");
const r_emailadress = document.getElementById("r-email");
const r_phonenumber = document.getElementById("r-phone");
const r_plan = document.getElementById("r-plan");
const r_streetadress = document.getElementById("r-street");
const r_city = document.getElementById("r-city");
const r_zippostalcode = document.getElementById("r-zip");
const r_password = document.getElementById("r-password");
const r_confirmpassword = document.getElementById("r-password-confirm");
const r_province = document.getElementById("r-province");


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
// r_fullname.value = billing.value;

// billing.addEventListener("change", function () {
//         r_fullname.value = billing.value;
// });
// // ------------------





let form = {
    fullName:"",
    emailAdress:"",
    phoneNumber:"",
    plan:"",
    bilingInterval:"",
    streetAdress:"",
    city:"",
    province:"",
    zipPostalCode:"",
    country:"",
    password:"",
    confirmPasword:""
};


fullname.addEventListener("input", function () {
   form.fullName = fullname.value;
   console.log(form.fullName);
});