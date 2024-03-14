function inverterString(name){
    let invertedString = ' ';
    for(let i = name.length - 1; i >= 0; i--){
        invertedString += name[i];
    }
    return invertedString;
}

const stringNormal = "Vitorio";
console.log(inverterString(stringNormal));