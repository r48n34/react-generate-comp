function strToSmallAndBig(inputName:string){

    const bigLetterStr = inputName.length >= 1 ? inputName.charAt(0).toUpperCase() + inputName.slice(1) : 'Values';
    const lowLetterStr = inputName.length >= 1 ? inputName.charAt(0).toLowerCase() + inputName.slice(1) : 'values';

    return [ bigLetterStr, lowLetterStr ]
}

export { strToSmallAndBig }