function isDeformed(str1, str2){
    let hash1 = new Map(),
        hash2 = new Map();
    for(let i = 0; i < str1.length; i++){
        if(hash1.has(str1[i])){
            hash1.set(str1[i], hash1.get(str1[i])+1);
        }else{
            hash1.set(str1[i], 1);
        }
    }

    for(let j = 0; j < str2.length; j++){
        if(hash2.has(str2[j])){
            hash2.set(str2[j], hash2.get(str2[j])+1);
        }else{
            hash2.set(str2[j], 1);
        }
    }

    for(let [key, value] of hash1){
        if(hash2.has(key)){
            if(value != hash2.get(key)){
                return false;
            }
        }else{
            return false;
        }
    }

    return true;
}

let str1 = "1233",
    str2 = '2312';

console.log(isDeformed(str1, str2))