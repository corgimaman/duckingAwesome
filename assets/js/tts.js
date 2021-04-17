var testAudio

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



      
var button  = document.getElementById('sound')
var buttonSpan = document.getElementsByClassName('speakSpan')
var audioPlayingArray = []

$(document).on('click', '.speakClass', function(e) {

    var endpoint = `https://api.voicerss.org/?key=dbee783ed6874c4c8d0ec1fe81c18292&hl=en-us&src=` + $(this).attr('name')

    fetchAudio(endpoint)
    .then((response) => {
        // response.value for fetch streams is a Uint8Array
        var blob = new Blob([response.value], { type: 'audio/mp3' });
        var url = window.URL.createObjectURL(blob)
        testAudio = new Audio(url);
        testAudio.play()
        audioPlayingArray.push(testAudio)
    })

})

$('#stop').on('click', function(){
  for (let i = 0; i < audioPlayingArray.length; i++) {
    audioPlayingArray[i].pause();
    
  }
  
})