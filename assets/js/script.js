var speechURL = 'https://ibm-watson/assistant/v2';

fetch(speechURL)
.then(response => response.json())
.then(data => console.log(data));