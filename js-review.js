function print() {
    alert("Introduction to Javascript");
}

print();

function FizzBuzz(){
    var counter = 1;
    while(counter <= 100){
        if (counter % 5 == 0 && counter % 3 ==0){
            console.log("FizzBuzz")
            counter++;
        }
        else if(counter % 3 == 0){
            console.log("Fizz");
            counter++;
        }else if (counter % 5 == 0 && counter % 3 != 0){
            console.log("Buzz")
            counter++;
        }else{
            console.log(counter);
            counter++;
        }
    }
}

FizzBuzz();

function countBs(sentence){
    console.log(sentence);
    var numBs = 0;
    for(var i = 0; i < sentence.length-1; i++){
        if (sentence.charAt(i) == "B"){
            numBs++;
        }
    }
    console.log("Number of Bs: " + numBs)
}

countBs("Brooks was from Boston.");