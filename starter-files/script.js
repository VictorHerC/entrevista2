// API
let data = [{ 
    "answer": "yes",
    "title": "Bernal",
    "forced":false,
    "image":"https://yesno.wtf/assets/no/6-4bf0a784c173f70a0cab96efd9ff80c9.gif"
    },]

const API_ENDPOINT = 'https://yesno.wtf/api';
function fetchAnswer(url){
    return fetch(url);
}


button.addEventListener("click", function() {
    if(input.value.length > 0){
        fetchAnswer(API_ENDPOINT).then(response => response.json())
        .then(data => answer.innerHTML = "<br>"+data.answer);
    }
    setTimeout(() => {
        input.value = "";
        answer.innerHTML = "";
    }, 5000);
});   
button.addEventListener("click", function() {
    if(input.value.length > 0){
        fetchAnswer(data).then(response => response.json())
        .then(data => answer.innerHTML = "<br>"+data.answer);
    }
    setTimeout(() => {
        input.value = "";
        answer.innerHTML = "";
    }, 5000);
});   
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
