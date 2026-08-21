const dynastyItem = document.querySelector(".dynasty-block");
const modalBackground = document.querySelector(".modal-background")
const modalBox = document.querySelector(".modal-box");
const openModalBox = document.querySelector(".btn-add-dynasty");
const closeModalBox = document.querySelector(".close-modal-btn")

// Modal
openModalBox.addEventListener("click", () => {
	modalBox.style.visibility = "visible";
	modalBackground.style.visibility = "visible";
})

closeModalBox.addEventListener("click", () => {
	modalBox.style.visibility = "hidden";
	modalBackground.style.visibility = "hidden";
})

modalBackground.addEventListener("click", () => {
		modalBox.style.visibility = "hidden";
	modalBackground.style.visibility = "hidden";
})

// Dynasties controls logic
// addDynastyButton.addEventListener("click", () => {
// 	const newDynastyItem = document.createElement("div")
// 	newDynastyItem.classList.add(".dynasty-block");
	
// })


// const dynastiesList = [];