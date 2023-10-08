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


const urlRegister = 'http://168.75.98.244:8080/auth/register';
const requestData = {
  login: 'daviestrella5@gmailcom',
  password: '#123User#',
};

fetch(urlRegister, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Erro na solicitação');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Erro:', error);
});