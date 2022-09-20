function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let str = input[1].trim().split("").map(Number)
    let count = 0;
    let ans = 0;
    for(let i = 0; i < N; i++) {
        if(str.length > 1) {
        if(str[i] == 0 && str[i-1] == 0) {
            count++;
        } else {
            ans = Math.max(ans, count);
            count = 1
        }
    } else {
        ans = 0
    }
    }
    
    
    ans = Math.max(count,ans)
      console.log(ans)
    
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`7
      1000100`);
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
    