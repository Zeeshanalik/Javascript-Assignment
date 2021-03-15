let stringcreation = (string) => {
    let first_ch = string.substring(0,1);
    return first_ch + string + first_ch;

};
console.log(stringcreation('Zeeshan'));