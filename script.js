const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthOutputMessage = document.getElementById("length-output")
let volumeOutputMessage = document.getElementById("volume-output")
let massOutputMessage = document.getElementById("mass-output")
const checkboxEl = document.getElementById("change-color-el")

function convertLength(){
	let inputNumber = inputEl.value

	let meterToFeet = (Number(inputNumber) * 3.281).toFixed(3)
	let feetToMeter = (Number(inputNumber) / 3.281).toFixed(3)
	lengthOutputMessage.innerHTML = `${inputNumber} meters = ${meterToFeet} feet | ${inputNumber} feet = ${feetToMeter} meters`

	let litresToGallons = (Number(inputNumber) * 0.264).toFixed(3)
	let gallonsToLitres = (Number(inputNumber) / 0.264).toFixed(3)
	volumeOutputMessage.innerHTML = `${inputNumber} litres = ${litresToGallons} gallons | ${inputNumber} gallons = ${gallonsToLitres} litres`

	let kilosToPounds = (Number(inputNumber) * 2.204).toFixed(3)
	let poundsToKilos = (Number(inputNumber) / 2.204).toFixed(3)
	massOutputMessage.innerHTML = `${inputNumber} kilos = ${kilosToPounds} pounds | ${inputNumber} pounds = ${poundsToKilos} kilos`

	inputEl.value= ""
}

convertBtn.addEventListener("click", convertLength)

checkboxEl.addEventListener("change", function changeTheme(){
	const outputContainer = document.querySelector(".conversion-container")
	const outputBoxEls = document.querySelectorAll(".output-box")
	let paraEls = document.querySelectorAll("p")

	if(checkboxEl.checked){
		outputContainer.classList.add("dark-theme")
		outputBoxEls.forEach(outputBoxEl => {
			outputBoxEl.classList.add("output-dark-theme")
		paraEls.forEach(paraEl =>{
			paraEl.classList.add("new-text-sm")
		})
		})
	} else {
		outputContainer.classList.remove("dark-theme")
		outputBoxEls.forEach(outputBoxEl => {
			outputBoxEl.classList.remove("output-dark-theme")
		paraEls.forEach(paraEl =>{
			paraEl.classList.remove("new-text-sm")
		})
	})
	}
})
