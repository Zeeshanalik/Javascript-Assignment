const toKebabCase = str => {

    let subs = []
    let char = ''
    let j = 0

    for( let i = 0; i < str.length; i++ ) {

        char = str[i]

        if(str[i] === char.toUpperCase()) {
            subs.push(str.slice(j, i))
            j = i
        }

        if(i == str.length - 1) {
            subs.push(str.slice(j, str.length))
        }
    }

    console.log(subs.map(el => (el.charAt(0).toLowerCase() + el.substr(1, el.length))).join('-'))
}

toKebabCase('myNameIsZeeshan')