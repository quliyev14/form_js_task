const country = document.getElementById("country");
const header = document.getElementById("header");


let countries = ["Azerbaycan", "Turkiye", "Gurcustan", "Canada", "ABD"];

for (let i = 0; i < countries.length; i++) {
    const option = document.createElement("option");

    option.textContent = countries[i];
    option.value = countries[i];

    country.appendChild(option);
}
header.textContent = country.value;

country.addEventListener("change", function () {
    header.textContent = country.value;
});

let form = {
    fullName:"",
    emailAddress:"",
    plan:"",
    country:"",
    password:"",
    confirmPasword:""
}

form.password = "Quliyev2003";


console.log(form.password)