import  { userEmail, userPassword, submitBtn }  from '/src/script/main.js';

submitBtn.addEventListener("click", () => {
	console.log(`O email do usuário é: ${userEmail.value} e a senha é ${userPassword.value}`);
	validateUserData()

});


const validateFields = () => {
	if(userEmail.value == '' || userPassword.value == ''){
	  alert("Preencha todos os dados");
	  return; 
	}
  }
  
  function validateUserData () {
	validateFields();
	  if(userPassword.value.lenght <= 8){
		  alert("não foi possível cadastrar")
	  }
	  else{
		  loginUser();
	  }
  }

const loginUser = () => {

	const urlLogin = 'http://168.75.98.244:8080/auth/login';
	

	fetch(urlLogin, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json', 
		'login': userEmail.value,
		'password': userPassword.value,
		'role': 'USER'
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
