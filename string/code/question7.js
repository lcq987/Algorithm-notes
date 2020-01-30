function replaceBlank(str){
    let newStrArr = [],
        len = str.length,
        blkNum = 0;
    for(let i = 0; i < len; i++){
        if(str[i] === " "){
            blkNum++;
        }
    }

    for(let j = len-1, k = len+2*blkNum-1; j > -1; j--){
        if(str[j] === " "){
            newStrArr[k] = "0";
            newStrArr[k-1] = "2";
            newStrArr[k-2] = "%"
            k -= 3;
        }else{
            newStrArr[k] = str[j];
            k--;
        }
    }

    return newStrArr.join('');
}

console.log(replaceBlank('a b c '));