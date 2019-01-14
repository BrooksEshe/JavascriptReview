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

//countBs using countChar
function countBs(sentence){
    countChar(sentence, "B");
}

countBs("Brooks was from Boston.");

//counts number of specified char in an sentence
function countChar(sentence, character){
    console.log(sentence);
    var numChars = 0;
    for(var i = 0; i < sentence.length-1; i++){
        if (sentence.charAt(i) == character){
            numChars++;
        }
    }
    console.log("Number of " + character + "'s: " + numChars);
}

countChar("Brooks was from Boston","o");