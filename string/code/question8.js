function isCompleteBrackets(str){
    let num = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "("){
            num++;
        }else if(str[i] === ")"){
            num--;
            if(num < 0){
                return false;
            }
        }else{
            return false;
        }
    }
    return num === 0;
}

console.log(isCompleteBrackets("(()())()"));