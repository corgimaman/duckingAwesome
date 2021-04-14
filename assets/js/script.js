var toName = 'Bob'
var message = 'keep/'
var from = 'everyone'


var baseURL = `https://foaas.com`
var foURL = `https://foaas.com/operations`

let foArray = [];
let btnArray = [];

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
    
    // using the following for loop to remove the specific values from the array
     for (var i = removeValFromIndex.length - 1; i >= 0; i--)
    jsonTransfer.splice(removeValFromIndex[i], 1);
     console.log(jsonTransfer[1]);
    
     var test = jsonTransfer[1].url

    // taking the entire array and replacing the api queries
     for (let i = 0; i < jsonTransfer.length; i++) {
         let url = jsonTransfer[i].url;
         url = url.replace(":from", from)
         url = url.replace(":name", toName)
         foArray.push(url);
     }
     
     console.log(foArray);

     //shuffle the array
     let shuffledFoArray = foArray.sort(() => Math.random() - .5);
     btnArray = shuffledFoArray.slice(0, 20);
     console.log(btnArray);

     
     var test2 = test.indexOf(':from')
     test[test2] = from

    function newCall() {   
        var jasonTransfer
        fetch(baseURL + test, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
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