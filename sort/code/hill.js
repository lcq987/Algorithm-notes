let test = [6, 5, 3, 1, 8, 7, 2, 4];

function hillSort(arr, step){
    while(step > 0){
        for(let i = step; i < arr.length; i++){
            let temp = i;
            while(temp > 0){
                if(arr[temp] < arr[temp-step]){
                    [arr[temp], arr[temp-step]] = [arr[temp-step], arr[temp]];
                    temp -= step;
                }else{
                    break;
                }
            }
        }
        step--;
    }
    return arr;
}

console.log(hillSort(test, 3));