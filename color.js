
let color1=document.getElementById('color1');
let color2=document.getElementById('color2');
let color3=document.getElementById('color3');
let color4=document.getElementById('color4');

console.log(color1);
color1.addEventListener("click",()=>{


 function_name('red');

 })



color2.addEventListener("click",()=>{

function_name('orange')


	
})


color3.addEventListener("click",()=>{

function_name("blue")

	
})



color4.addEventListener("click",()=>{

function_name("yellowgreen");

	
})



function function_name(color) {

	

	document.body.style.backgroundColor=color;


}
