var toName = 'Bob'
var message = 'keep/'
var from = 'everyone'


var baseURL = `https://foaas.com`
var foURL = `https://foaas.com/operations`

let foArray = [];
let btnArray = [];
let apiArray = [];

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
    removeValFromIndex = [0, 5, 13, 23, 32, 39, 47, 63, 65, 69, 72, 89];
    
    // using the following for loop to remove the specific values from the array
     for (var i = removeValFromIndex.length - 1; i >= 0; i--)
    jsonTransfer.splice(removeValFromIndex[i], 1);
    // shuffle the json
    jsonTransfer.sort(() => Math.random() - .5);
    //console.log(jsonTransfer)
    

    // taking the entire array and replacing the api queries
     for (let i = 0; i < jsonTransfer.length; i++) {
         let url = jsonTransfer[i].url;
         url = url.replace(":from", from);
         url = url.replace(":name", toName);
         url = baseURL + url;
         foArray.push(url);
     }
     
     console.log(foArray);

     //pull the first 20 URLs for the API call
     apiArray = foArray.slice(0, 20);
     console.log(apiArray);

     // call 

     function hiddenSpan(){
        for (let i = 0; i < apiArray.length; i++) {
            //if apiArray.length === 0 return, else run function
            fetch(apiArray[i], { headers: {  'Content-Type': 'application/json', 'Accept': 'text/plain' } })
            .then(response => response.text())
            .then(text => console.log(text))  
        } 
        // fetch(apiArray[0], { headers: { 'Content-Type': 'application/json', 'Accept': 'text/plain' }} )
        // .then(response => response.text())
        // .then(text => console.log(text))

        
     }

     hiddenSpan();
     
    //  var test2 = test.indexOf(':from')
    //  test[test2] = from

    function newCall() {   
        var jasonTransfer
        fetch(baseURL + test, { headers: { 'Content-Type': 'application/json', 'Accept': 'text/plain' } })
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