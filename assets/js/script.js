var toName = 'Bob'
var message = 'keep/'
var from = 'everyone'


var baseURL = `https://foaas.com`
var foURL = `https://foaas.com/operations`

let foArray = [];
let apiArray = [];
let btnArray = [];
let spanArray = [];

function apiCalls() {   
    var jsonTransfer
    fetch(foURL)
    .then(response => response.json())
    .then(data => jsonTransfer = data)
    .then(() => handleMessage(jsonTransfer));

}

function handleMessage(jsonTransfer) {

    jsonTransfer,
    removeValFromIndex = [0, 5, 13, 20, 23, 32, 39, 47, 63, 65, 69, 72, 89];
    
    // using the following for loop to remove the specific values from the array
     for (var i = removeValFromIndex.length - 1; i >= 0; i--)
    jsonTransfer.splice(removeValFromIndex[i], 1);
    // shuffle the json
    jsonTransfer.sort(() => Math.random() - .5);
    //console.log(jsonTransfer)
    

    // taking the entire array and replacing the api queries
     for (let i = 0; i < jsonTransfer.length; i++) {
         //this is for the URLs for the api call
         let url = jsonTransfer[i].url;
         url = url.replace(":from", from);
         url = url.replace(":name", toName);
         url = baseURL + url;
         foArray.push(url);
         //this is for the name that will display on the button
         let foName = jsonTransfer[i].name;
         btnArray.push(foName);
     }

     //console.log(foArray);

     //pull the first 20 URLs for the API call
     apiArray = foArray.slice(0, 20);
    //  console.log('Api aray $$$$',apiArray);

     //pull the first 20 names for the button
     btnArray = btnArray.slice(0, 20)

     console.log(btnArray);


     function hiddenSpan(){
        for (let i = 0; i < apiArray.length; i++) {
            //if apiArray.length === 0 return, else run function
            fetch(apiArray[i], { headers: {  'Content-Type': 'text/plain', 'Accept': 'text/plain' } })
            .then(response => response.text())
            .then(text => censor(text))
        } 
    
    hiddenSpan();


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
    
    function censor(text) {
        var textCensored = text.split(' ')
        // console.log(textCensored);


        var badWords = {
            Fuck: 'Fuck',
            Fucking: 'Fucking',
            fuck: 'fuck',
            fucking: 'fucking'
        }
            for (let i = 0; i < textCensored.length; i++) {
            
            //     if (textCensored[i] == Object.keys(badWords)[i]) {
            //     let blocked = Object.keys(badWords)[i]
            //     textCensored[blocked] = blocked 
                
            // }

            if(textCensored[i] === 'fucking') {
                let blocked = textCensored.indexOf('fucking')
                textCensored[blocked] = 'ducking'
            }
            
            if(textCensored[i] === 'Fucking') {
                let blocked = textCensored.indexOf('Fucking')
                textCensored[blocked] = 'Ducking'
            }
            
            if(textCensored[i] === 'fuck') {
                let blocked = textCensored.indexOf('fuck')
                textCensored[blocked] = 'duck'   
            }
            
            if(textCensored[i] === 'fuck-nugget') {
                let blocked = textCensored.indexOf('fuck-nugget')
                textCensored[blocked] = 'duck-nugget'   
            }
            
            if(textCensored[i] === 'fuck-nugget.') {
                let blocked = textCensored.indexOf('fuck-nugget.')
                textCensored[blocked] = 'duck-nugget.'   
            }
            
            if(textCensored[i] === 'fuck?') {
                let blocked = textCensored.indexOf('fuck?')
                textCensored[blocked] = 'duck?'   
            }
           
            if(textCensored[i] === 'Fuck') {
                let blocked = textCensored.indexOf('Fuck')
                textCensored[blocked] = 'Duck'
            }

            if(textCensored[i] === 'FUCK') {
                let blocked = textCensored.indexOf('FUCK')
                textCensored[blocked] = 'DUCK'
            }

            if(textCensored[i] === "Fuck's") {
                let blocked = textCensored.indexOf("Fuck's")
                textCensored[blocked] = "Duck's"
            }
            
            if(textCensored[i] === 'fucks') {
                let blocked = textCensored.indexOf('fucks')
                textCensored[blocked] = 'ducks'
            }
            
            if(textCensored[i] === 'fucks.') {
                let blocked = textCensored.indexOf('fucks.')
                textCensored[blocked] = 'ducks.'
            }
            
            if(textCensored[i] === 'motherfucker!') {
                let blocked = textCensored.indexOf('motherfucker!')
                textCensored[blocked] = 'motherducker!'
            }
            
            if(textCensored[i] === 'hide-and-go-fuck-yourself') {
                let blocked = textCensored.indexOf('hide-and-go-fuck-yourself')
                textCensored[blocked] = 'hide-and-go-duck-yourself'
            }
            
            if(textCensored[i] === "fuckin'") {
                let blocked = textCensored.indexOf("fuckin'")
                textCensored[blocked] = "duckin'"
            }
            
            if(textCensored[i] === 'dickface') {
                let blocked = textCensored.indexOf('dickface')
                textCensored[blocked] = 'duckface'
            }

            if(textCensored[i] === 'bullshit') {
                let blocked = textCensored.indexOf('bullshit')
                textCensored[blocked] = 'duckpoo'
            }
            
            if(textCensored[i] === 'asshole') {
                let blocked = textCensored.indexOf('asshole')
                textCensored[blocked] = 'turd'
            }
            
            if(textCensored[i] === 'cocks') {
                let blocked = textCensored.indexOf('cocks')
                textCensored[blocked] = 'jellybeans'
            }
            
            if(textCensored[i] === 'cocks.') {
                let blocked = textCensored.indexOf('cocks.')
                textCensored[blocked] = 'jellybeans.'
            }

            if(textCensored[i] === 'shit,') {
                let blocked = textCensored.indexOf('shit,')
                textCensored[blocked] = 'poo,'
            }
            
            if(textCensored[i] === 'shit!') {
                let blocked = textCensored.indexOf('shit!')
                textCensored[blocked] = 'poo!'
            }

            if(textCensored[i] === 'cocksplat') {
                let blocked = textCensored.indexOf('cocksplat')
                textCensored[blocked] = 'paintsplat'
            }
            
            if(textCensored[i] === 'dicks.') {
                let blocked = textCensored.indexOf('dicks.')
                textCensored[blocked] = 'jellybeans.'
            }
        }
            
            
        console.log(...textCensored);
    }
}
                
                apiCalls()

     //console.log(spanArray);

}



// this function gets the string of text that the TTS will read
function hiddenSpan(){
    let counter = 0
    // for loop runs through each api call and adds each response to spanArray 
    for (let i = 0; i < apiArray.length; i++) {
        //if apiArray.length === 0 return, else run function
        fetch(apiArray[i], { headers: {  'Content-Type': 'application/json', 'Accept': 'text/plain' } })
        .then(response => response.text())
        .then(text => {
            
            // console.log('PUSHING into span!!!!')
            spanArray[i] = text
            counter ++
            // console.log('APIR ARRAY lengthhhh',  apiArray.length - 1)
           
            if(counter === apiArray.length) {
                console.log('THIS IS i!!!!', counter)
                makeBtn()
            }
        })
        //.then(makeBtn())
    } 
    
}

function makeBtn(){
    console.log('Span array!!!',spanArray);
    console.log('Btn Array %%%%%', btnArray)
    var btnArea = document.getElementById("btnArea");


    for (let i = 0; i < spanArray.length; i++) {
        // console.log('THIS SHOULD B SENTENCE', spanArray[i])

        console.log('BTN ARRAy i', btnArray[i])
        var btn = document.createElement("button");
        btn.innerHTML = censor(btnArray[i])// + '<span class="speakSpan" style="display: none;">' + spanArray[i] + '</span>';
        btn.classList.add("button", "is-large", "is-info", "is-outlined", "speakClass");
        btn.setAttribute('name', censor(spanArray[i]));
        btn.setAttribute('id', 'btn' + [i]);
        btnArea.appendChild(btn);
    }
}

// trigger function
apiCalls();

