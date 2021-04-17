function censor(text) {
    console.log(text)
    var textCensored = text.split(' ')
    

    var badWords = {
        Fuck: 'Fuck',
        Fucking: 'Fucking',
        fuck: 'fuck',
        fucking: 'fucking'
    }
    for (let i = 0; i < textCensored.length; i++) {
        // textCensored[i] = textCensored[i].toLowerCase()
        // if (textCensored[i] == Object.keys(badWords)[i]) {
        // let blocked = Object.keys(badWords)[i]
        // textCensored[blocked] = blocked 
        // }
        let badword = textCensored[i] 
        if (badword === 'fucking') {
            let blocked = textCensored.indexOf('fucking')
            textCensored[blocked] = 'ducking'
        }
        if (badword === 'Fucking') {
            let blocked = textCensored.indexOf('Fucking')
            textCensored[blocked] = 'Ducking'
        }
        if (badword === 'fuck') {
            let blocked = textCensored.indexOf('fuck')
            textCensored[blocked] = 'duck'
        }
        if (badword === 'bitch!') {
            let blocked = textCensored.indexOf('bitch!')
            textCensored[blocked] = 'fool!'
        }
        if (badword === 'fuck-nugget') {
            let blocked = textCensored.indexOf('fuck-nugget')
            textCensored[blocked] = 'duck-nugget'
        }
        if (badword === 'fuck-nugget.') {
            let blocked = textCensored.indexOf('fuck-nugget.')
            textCensored[blocked] = 'duck-nugget.'
        }
        if (badword === 'fuck?') {
            let blocked = textCensored.indexOf('fuck?')
            textCensored[blocked] = 'duck?'
        }
        if (badword === 'fuck.') {
            let blocked = textCensored.indexOf('fuck.')
            textCensored[blocked] = 'duck.'
        }
        if (badword === 'Asshole') {
            let blocked = textCensored.indexOf('Asshole')
            textCensored[blocked] = 'Butthole'
        }
        if (badword === 'Fuck') {
            let blocked = textCensored.indexOf('Fuck')
            textCensored[blocked] = 'Duck'
        }
        if (badword === 'FUCK') {
            let blocked = textCensored.indexOf('FUCK')
            textCensored[blocked] = 'DUCK'
        }
        if (badword === "Fuck's") {
            let blocked = textCensored.indexOf("Fuck's")
            textCensored[blocked] = "Duck's"
        }
        if (badword === "'Fuck") {
            let blocked = textCensored.indexOf("'Fuck")
            textCensored[blocked] = "'Duck"
        }
        if (badword === 'fucks') {
            let blocked = textCensored.indexOf('fucks')
            textCensored[blocked] = 'ducks'
        }
        if (badword === 'fucks.') {
            let blocked = textCensored.indexOf('fucks.')
            textCensored[blocked] = 'ducks.'
        }
        if (badword === 'motherfucker!') {
            let blocked = textCensored.indexOf('motherfucker!')
            textCensored[blocked] = 'motherducker!'
        }
        if (badword === 'motherfuck!') {
            let blocked = textCensored.indexOf('motherfuck!')
            textCensored[blocked] = 'motherduck!'
        }
        if (badword === 'motherfuck') {
            let blocked = textCensored.indexOf('motherfuck')
            textCensored[blocked] = 'motherduck'
        }
        if (badword === 'hide-and-go-fuck-yourself') {
            let blocked = textCensored.indexOf('hide-and-go-fuck-yourself')
            textCensored[blocked] = 'hide-and-go-duck-yourself'
        }
        if (badword === "fuckin'") {
            let blocked = textCensored.indexOf("fuckin'")
            textCensored[blocked] = "duckin'"
        }
        if (badword === "Fuckity'") {
            let blocked = textCensored.indexOf("Fuckity'")
            textCensored[blocked] = "Fuckity'"
        }
        if (badword === 'dickface') {
            let blocked = textCensored.indexOf('dickface')
            textCensored[blocked] = 'duckface'
        }
        if (badword === 'bullshit') {
            let blocked = textCensored.indexOf('bullshit')
            textCensored[blocked] = 'duckpoo'
        }
        if (badword === 'asshole') {
            let blocked = textCensored.indexOf('asshole')
            textCensored[blocked] = 'turd'
        }
        if (badword === 'asshole.') {
            let blocked = textCensored.indexOf('asshole.')
            textCensored[blocked] = 'turd.'
        }
        if (badword === 'asshole...') {
            let blocked = textCensored.indexOf('asshole...')
            textCensored[blocked] = 'turd...'
        }
        if (badword === 'cocks') {
            let blocked = textCensored.indexOf('cocks')
            textCensored[blocked] = 'jellybeans'
        }
        if (badword === 'cocks.') {
            let blocked = textCensored.indexOf('cocks.')
            textCensored[blocked] = 'jellybeans.'
        }
        if (badword === 'shit,') {
            let blocked = textCensored.indexOf('shit,')
            textCensored[blocked] = 'poop,'
        }
        if (badword === 'shit!') {
            let blocked = textCensored.indexOf('shit!')
            textCensored[blocked] = 'poop!'
        }
        if (badword === 'cocksplat') {
            let blocked = textCensored.indexOf('cocksplat')
            textCensored[blocked] = 'paintsplat'
        }
        if (badword === 'dicks.') {
            let blocked = textCensored.indexOf('dicks.')
            textCensored[blocked] = 'jellybeans.'
        }
    }

    //console.log('CENSOR TEST!!',textCensored.join(' '));
    return textCensored.join(' ')
}

