var toName = 'Bob'
var message = 'keep/'
var from = 'everyone'


// var foURL = `https://foaas.com/${message}${toName}/:${from}`
var foURL = `https://foaas.com/operations`
let urlSplit = foURL.split('/');
console.log(foURL);
if (urlSplit = 'toName') {

    
}


function apiCalls() {   
    var jsonTransfer
    fetch(foURL)
    .then(response => response.json())
    .then(data => jsonTransfer = data)
    .then(() => handleMessage(jsonTransfer));
}

// function apiCalls() {   
//     var jsonTransfer
//     fetch(foURL, {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
//     .then(response => response.json())
//     .then(data => jsonTransfer = data)
//     .then(() => handleMessage(jsonTransfer));
// }

function handleMessage(jsonTransfer) {
    
    jsonTransfer,
    removeValFromIndex = [0, 5, 13, 23, 32, 39, 47, 63, 65, 69, 72];
    

     for (var i = removeValFromIndex.length - 1; i >= 0; i--)
    jsonTransfer.splice(removeValFromIndex[i], 1);
     console.log(jsonTransfer[1]);
    
     var test = jsonTransfer[1].url

     for (let i = 0; i < jsonTransfer.length; i++) {
         let url = jsonTransfer[i].url;
         url = url.replace(":from", from)
         url = url.replace(":name", toName)
         console.log(url)
         
     }
    //  test.replace(":from", from)
     
     var test2 = test.indexOf(':from')
     test[test2] = from

    //  test2 = [from]
     var URL = `https://foaas.com`

    function newCall() {   
        var jasonTransfer
        fetch(URL + test, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
        .then(response => response.json())
        .then(data => jasonTransfer = data)
        .then(() => printMessage(jasonTransfer))
    }
    
    function printMessage(jasonTransfer) {
        var subtitle = jasonTransfer.subtitle
        var subtitlePer = subtitle.replace(":from", from)
        console.log(`${jasonTransfer.message} ` + subtitlePer)
        nextCall(subtitle)
        
    }
    // for (let i = 0; i < jsonTransfer.length; i++) {
        
        
        function nextCall(subtitle){
            var theMessage = jsonTransfer[i].subtitle.toLowerCase()

            
            for (let i = 0; i < jsonTransfer.length; i++) {
                console.log(...theMessage);
                
                
            }
            
        }
    
       

    //     if(theMessage[i] === 'fucking') {
    //         var blocked = theMessage.indexOf('fucking')
    //         theMessage[blocked] = 'ducking'

    //     }
        
//         if(theMessage[i] === 'fuck') {
//             var blocked = theMessage.indexOf('fuck')
//             theMessage[blocked] = 'duck'

//         }
        
//         if(theMessage[i] === 'dickface') {
//             var blocked = theMessage.indexOf('dickface')
//             theMessage[blocked] = 'duckface'

//         }
//    }
   // console.log(...theMessage);

}

apiCalls()