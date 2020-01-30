var strStr = function(haystack, needle) {
    if(needle.length === 0){
        return 0;
    }
    var next = [-1],
        j = 0,
        k = -1;
    while(j < needle.length-1){
        if(k == -1 || needle[j] == needle[k]){
            j++;
            k++;
            if(needle[j] != needle[k]){
                next[j] = k;
            }else{
                next[j] = next[k];
            }
        }else{
            k = next[k];
        }
    }

    var m = 0,
        n = 0;
    while(m < haystack.length && n < needle.length){
        if(n == -1 || haystack[m] === needle[n]){
            m++;
            n++;
        }else{
            n = next[n];
        }
    }

    return n === needle.length;
};

module.exports = strStr;