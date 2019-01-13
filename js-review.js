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