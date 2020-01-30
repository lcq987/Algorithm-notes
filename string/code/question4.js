function reverse(str){
    let strArr = str.split(" ");
    for(let i = 0, j = strArr.length-1; i < j; i++, j--){
        let front = strArr[i],
            end = strArr[j];
        strArr.splice(i, 1, end);
        strArr.splice(j, 1, front);
    }
    return strArr.join(" ");
}

console.log(reverse("I'm a student."));