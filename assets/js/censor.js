function censor(text) {
    var textCensored = text.split(' ')


    var badWords = {
        Fuck: 'Fuck',
        Fucking: 'Fucking',
        fuck: 'fuck',
        fucking: 'fucking'
    }
        for (let i = 0; i < textCensored.length; i++) {
           // textCensored[i] = textCensored[i].toLowerCase()
        
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
        
        
    //console.log('CENSOR TEST!!',textCensored.join(' '));
    return textCensored.join(' ')
    
}

