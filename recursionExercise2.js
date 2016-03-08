var tools = ["computer", "books", "text editor"];

function listArray(arr, count) {
    if (count === undefined) {
        count = 0;
    }
    console.log(arr[count]);
    if (count ===arr.length - 1) {
        return "done";
    }
    else {
        return listArray(arr, count += 1);
           
    }
}

listArray(tools);