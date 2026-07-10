const form = document.querySelector('form')
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const observe = document.querySelector("#observe");

    if (height === "" || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height";
    }
    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show results on the page
        results.innerHTML = bmi;

        if (bmi < 18.6) {
            observe.innerHTML = "Under Weight";
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            observe.innerHTML = "Normal Weight";
        }
        else {
            observe.innerHTML = "Over Weight";
        }
    }
});