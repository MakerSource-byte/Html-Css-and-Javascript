function cipherString(text, offset){
    let string = text.toLowerCase();
    let result = "";
    for(let i = 0; i < string.length; i+=1){
        let value;

        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            value = string.charCodeAt(i) + offset;
        }else{
            value = string.charCodeAt(i);
        }

        if (value > 122){
            value = 97 + ((value % 97) - 26);
        }
        let char = String.fromCharCode(value);
        result+=char;
    }
    return result;
}

module.exports.cipherString = cipherString;