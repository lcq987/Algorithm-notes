function splicingStr(strs){
    let str = "";
    strSort(strs, 0, strs.length-1);
    for(let i = 0; i < strs.length; i++){
        str += strs[i];
    }
    return str;
}

// 比较两个字符串的字典序顺序
function strCompare(str1, str2){
    let oat = str1+str2,
        tao = str2+str1;
    for(let i = 0; i < oat.length; i++){
        if(oat.charCodeAt(i) > tao.charCodeAt(i)){
            return false;
        }else if(oat.charCodeAt(i) < tao.charCodeAt(i)){
            return true;
        }else{
            continue;
        }
    }
}

// 快排
function strSort(strs, l, r){
    if(l >= r){
        return;
    }
    let m = Math.floor((l+r)/2),
        mStr = strs[m],
        j = -1;
    [strs[r], strs[m]] = [strs[m], strs[r]];
    for(let i = 0; i < r; i++){
        if(strCompare(strs[i], mStr)){
            [strs[i], strs[j+1]] = [strs[j+1], strs[i]];
            j++;
        }
    }
    [strs[r], strs[j+1]] = [strs[j+1], strs[r]];
    strSort(strs, 0, j);
    strSort(strs, j+2, r);
}

let strArr = ["b", "ba"];

console.log(splicingStr(strArr));