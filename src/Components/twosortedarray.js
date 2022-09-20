function runProgram(input) {
    input = input.trim().split("\n")
    let testcases = Number(input[0])
    let line = 1;
    for(let i = 0; i < testcases; i++) {
        let N = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        let arr1 = input[line++].trim().split(" ").map(Number)
     //   console.log(arr,arr1)
        twoSortedArrays(arr, arr1)
      
    }
  }
  
  function twoSortedArrays(arr, arr1){
    let left = 0;
     let right = arr.length - 1;
     let count = 0;
    while(left < arr.length && right >= 0) {
       if (arr[left] < arr1[right])  {
        left++;
       }
       else if (arr[left] > arr1[right]) {
        right--;
       }
       else{
           count++;
           left++;
           right--;
       }
   }
   console.log(count);
  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }