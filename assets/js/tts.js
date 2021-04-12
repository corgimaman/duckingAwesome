let arrayFOAAS = [];

function getFOAAS() {
    var endpoint = `https://foaas.com/operations`;

    fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        arrayFOAAS = data;
    })
}

getFOAAS();
console.log(arrayFOAAS);

var testAudio

// var endpoint = `http://api.voicerss.org/?key=dbee783ed6874c4c8d0ec1fe81c18292&hl=en-us&src=Hello,%20world!`

// fetch(endpoint)
//     .then((res) => (res.text()))
    
//     .then((data) => {
//         console.log(data)
//     })

    function fetchAudio(url) {

        return fetch(url)
          .then(res => {
              console.log('RAW RES!!!', res)
            if (!res.ok)
              throw new Error(`${res.status} = ${res.statusText}`);
            // response.body is a readable stream.
            // Calling getReader() gives us exclusive access to
            // the stream's content
            var reader = res.body.getReader();
            // read() returns a promise that resolves
            // when a value has been received
            return reader
              .read()
              .then((result) => {
                return result;
              });
          })
      }

    
    //   fetchAudio()
    //     .then((response) => {
    //         // response.value for fetch streams is a Uint8Array
    //         var blob = new Blob([response.value], { type: 'audio/mp3' });
    //         var url = window.URL.createObjectURL(blob)
    //         testAudio = new Audio(url);
    //         // window.audio.src = url;
    //         // window.audio.play();
    //     })
    //     .catch((error) => {
    //         this.setState({
    //             error: error.message
    //         });
    //     });


      
var button  = document.getElementById('sound')

button.addEventListener('click', function(e) {
    console.log('We got cl9cked!!', e.target.textContent)

    var endpoint = `http://api.voicerss.org/?key=dbee783ed6874c4c8d0ec1fe81c18292&hl=en-us&src=` + e.target.textContent

    fetchAudio(endpoint)
    .then((response) => {
        // response.value for fetch streams is a Uint8Array
        var blob = new Blob([response.value], { type: 'audio/mp3' });
        var url = window.URL.createObjectURL(blob)
        testAudio = new Audio(url);
        testAudio.play()
    })

})
