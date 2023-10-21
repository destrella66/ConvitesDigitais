// Curl exemple 
// curl -X 'POST' \
//   'http://168.75.98.244:8080/auth/register' \
//   -H 'accept: */*' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "login": "string",
//   "password": "stringst",
//   "role": "ADMIN"
// }'



// const urlRegister = 'http://168.75.98.244:8080/auth/register';
// const _data = {
//     login: 'daviestrella6@gmail.com',
//     password: '#123dev123',
//     role: 'USER'
// }

// fetch(urlRegister, {
//     method: "POST",
//     body: JSON.stringify(_data),
//     headers: {
//         "Content-type": "application/json"
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err));
import  { userEmail, userPassword, submitBtn, userPasswordRep }  from '/src/script/main.js';

submitBtn.addEventListener("click", () => {
	console.log(`O email do usuário é: ${userEmail.value} e a senha é ${userPassword.value}`);
	validateUserData()

});


function validateUserData () {
	console.log(userEmail.value)	// body... 
	if(userPassword.value.lenght <= 8){
		alert("não foi possível cadastrar")
	}
	else if(userPassword.value != userPasswordRep.value){
		alert("As senhas precisam ser iguais!")
		return; 
	}
	else{
		createUser();
	}
}


const loginUser = () => {

	const urlLogin = 'http://168.75.98.244:8080/auth/login';
	const requestData = {
		login: "login-teste@gmail.com",
		password: "senha-teste"
	};

	fetch(urlLogin, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	})
	.then(response => {
	if (!response.ok) {
		throw new Error('Erro na solicitação');
	}
	return response.json();
	console.log("Passou!")
	})
	.then(data => {
	console.log(data);
	})
	.catch(error => {
	console.error('Erro:', error);
	});
}
