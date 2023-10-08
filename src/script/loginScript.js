// Declaração de constantes que serão usadas
const userEmail = document.getElementById("userEmail"); 
const userPassword = document.getElementById("userPassword"); 
const submitBtn = document. getElementById("submitBtn"); 

submitBtn.addEventListener("click", () => {
	console.log(`O email do usuário é: ${userEmail.value} e a senha é ${userPassword.value}`);
	validateUserData()


})

function validateUserData () {
	console.log(userEmail.value)	// body... 
	if(userPassword.value.lenght <= 8){
		alert("não foi possível cadastrar")
	}
}