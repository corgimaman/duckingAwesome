function censor(text) {

    const regexFuck = /Fuck/gi;
    text = text.replace(regexFuck, 'Duck')
    
    const regexAss = /Ass/gi;
    text = text.replace(regexAss, 'butt')
    
    const regexCock = /Cock/gi;
    text = text.replace(regexCock, 'jeallybean')
    
    const regexBitch = /Bitch/gi;
    text = text.replace(regexBitch, 'fool')
    
    const regexShit = /Shit/gi;
    text = text.replace(regexShit, 'poop')
    
    const regexDick = /Dick/gi;
    text = text.replace(regexDick, 'butt')

    return text
}