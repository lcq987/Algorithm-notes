const kmp = require('./kmp')

function rotateStr(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let bigStr = str1+str1;
    return kmp(bigStr, str2);
}

console.log(rotateStr('abcd', 'cdba'));