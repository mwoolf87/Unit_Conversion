/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("inputEl");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const convertLength = document.getElementById("length-conversion");
const convertVolume = document.getElementById("volume-conversion");
const convertMass = document.getElementById("mass-conversion");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

function calcVals() {
  baseVal = inputEl.value;

  convertLength.textContent = `${baseVal} meters = ${(
    baseVal * meterToFeet
  ).toFixed(3)} | ${baseVal} feet = ${(baseVal / meterToFeet).toFixed(
    3
  )} meters`;
  convertVolume.textContent = `${baseVal} meters = ${(
    baseVal * literToGallon
  ).toFixed(3)} | ${baseVal} feet = ${(baseVal / literToGallon).toFixed(
    3
  )} meters`;
  convertMass.textContent = `${baseVal} meters = ${(
    baseVal * kilogramToPound
  ).toFixed(3)} | ${baseVal} feet = ${(baseVal / kilogramToPound).toFixed(
    3
  )} meters`;
}

convertBtn.addEventListener("click", function () {
  calcVals();
});

function resetVals() {
  inputEl.value = "";
  convertLength.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters";
  convertVolume.textContent =
    "0 liters = 0.000 gallons | 0 gallons = 0.000 liters";
  convertMass.textContent = "0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos";
}

resetBtn.addEventListener("dblclick", function () {
  resetVals();
});
