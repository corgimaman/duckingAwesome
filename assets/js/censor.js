function censor(text) {

    const regexFuck = /Fuck/i;
    text = text.replace(regexFuck, 'Duck')
    
    const regexfuck = /fuck/i;
    text = text.replace(regexfuck, 'duck')
    
    const regexAss = /Ass/i;
    text = text.replace(regexAss, 'butt')
    
    const regexCock = /Cock/i;
    text = text.replace(regexCock, 'jeallybean')
    
    const regexBitch = /Bitch/i;
    text = text.replace(regexBitch, 'fool')
    
    const regexShit = /Shit/i;
    text = text.replace(regexShit, 'poop')
    
    const regexDick = /Dick/i;
    text = text.replace(regexDick, 'butt')

    return text
}