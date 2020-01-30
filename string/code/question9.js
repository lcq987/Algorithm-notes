function lengthOfLongestSubstring(str){
    let hash = new Map(),
        pre = -1,
        MAX = 0;
    for(let i = 0; i < str.length; i++){
        let len;
        if(hash.has(str[i]) && hash.get(str[i]) > pre){
            len = i - hash.get(str[i]);
            pre = hash.get(str[i]);      
        }else{
            len = i - pre;
        }
        hash.set(str[i], i);
        MAX = len > MAX ? len : MAX;
    }
    return MAX;
}

console.log(lengthOfLongestSubstring("aaaba"));
