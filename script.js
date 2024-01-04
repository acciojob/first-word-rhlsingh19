function firstWord(str) {
    if (!str || str.indexOf(' ') === -1) {
        return str;
    }

    const spaceIndex = str.indexOf(' ');
    return str.substring(0, spaceIndex);
}

// Examples
console.log(firstWord('see and stop')); // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345')); // Output: '12345'
console.log(firstWord('')); // Output: ''



// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
