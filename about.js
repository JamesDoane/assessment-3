console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have successfully submitted your form!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
document.getElementById("kitty").addEventListener('mouseover',()=>{
	alert("You is the stronkest, most kindest, and most beautifulest soul in the history of ever")
})