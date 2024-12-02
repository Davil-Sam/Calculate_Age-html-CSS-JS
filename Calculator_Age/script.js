const btnA = document.getElementById("btn")
let birthdayA = document.getElementById("birthday")
const resultA = document.getElementById("result")


function CalculateAge() {
    const birthdayV = birthdayA.value;
    if (birthdayV === "") {
        alert("please enter your date of birth");
    } else {
        const age = getAge(birthdayV);
        resultA.textContent = "You're " + (age) + "" +
            "years old", (age) < 1;
        // resultA.style.transition = "3s ease all";

    }
}

function getAge(birthdayV) {
    const currentData = new Date();
    const birthdayData = new Date(birthdayV);
    let age = currentData.getFullYear() - birthdayData.getFullYear();
    let month = currentData.getMonth() - birthdayData.getMonth();
    if (month < 0 || month === 0 && currentData.getDate() - birthdayData.getDate()) {
        age--;
    }

    return age;
}
btnA.addEventListener("click", CalculateAge);