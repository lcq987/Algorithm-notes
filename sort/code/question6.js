let testArr = [1, 5, 4, 3, 2, 6, 7];

function needSort(arr){
    let MAX = 0,
        MIN = Infinity,
        left = 0,
        right = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= MAX){
            MAX = arr[i];
        }else{
            right = i;
        }
    }

    for(let j = arr.length-1; j > -1; j--){
        if(arr[j] <= MIN){
            MIN = arr[j];
        }else{
            left = j;
        }
    }

    return right - left + 1;
}

console.log(needSort(testArr));