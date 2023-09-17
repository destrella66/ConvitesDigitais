// let testCard = document.getElementById("testCard"); 
// let title = "";
// let phrase = "";
// let linkname = "";
// let testName = () => testCard.innerHTML = `<div><h2>${title}</h2><br/><a href="#a">${linkname}</a><br/><p>${phrase}</p><br/></div>`;


// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/chucknorris',
//     headers: { 'X-Api-Key': 'wfIpi0vYerODfZPDs44l2g==Ld1zzgibJCPM6Qde'},
//     contentType: 'application/json',
//     success: function(result) {
//         title = result.joke; 
//         console.log(result);
//         testName();

//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// var paragraphs = '1'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/loremipsum?paragraphs=' + paragraphs,
//     headers: { 'X-Api-Key': 'wfIpi0vYerODfZPDs44l2g==Ld1zzgibJCPM6Qde'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//         phrase = result.text; 
//         testName();

    
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });var gender = 'boy'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/babynames?gender=' + gender,
//     headers: { 'X-Api-Key': 'wfIpi0vYerODfZPDs44l2g==Ld1zzgibJCPM6Qde'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//         linkname = result;
//         testName();
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });