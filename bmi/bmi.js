function getBMI() {
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const result3 = document.getElementById("result3");

  const bmi = (weight / height ** 2).toFixed(2);
  result1.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>`;

  if (age >= 65) {
    if (bmi > 0) {
      bmi < 23
        ? (result2.innerHTML = "Underweight")
        : bmi >= 23 && bmi <= 30
        ? (result2.innerHTML = "Normal weight")
        : bmi > 30
        ? (result2.innerHTML = "Overweight")
        : (result2.innerHTML = "Invalid data!");
    } else {
      result2.innerHTML = "Invalid data!";
    }
  }
  if (age >= 18 && age <= 64) {
    if (bmi > 0) {
      bmi < 18.4
        ? (result2.innerHTML = "Underweight")
        : bmi >= 18.5 && bmi <= 24.9
        ? (result2.innerHTML = "Normal weight")
        : bmi >= 25 && bmi <= 29.9
        ? (result2.innerHTML = "Overweight")
        : bmi >= 30 && bmi <= 34.9
        ? (result2.innerHTML = "Obesity Grade I")
        : bmi >= 35 && bmi <= 39.9
        ? (result2.innerHTML = "Obesity Grade II")
        : bmi >= 40
        ? (result2.innerHTML = "Obesity Grade III")
        : (result2.innerHTML = "Invalid data!");
    } else {
      result2.innerHTML = "Invalid data!";
    }
  }

  if (age < 20) {
    result3.innerHTML =
      "You must be 20 years or older to use this calculator.<br>Please use a pediatric BMI calculator.";
  } else {
    result3.innerHTML = "";
  }

  $(".bmi_table").show();
}

$(function () {
  $(".bmi_table").hide();
});
