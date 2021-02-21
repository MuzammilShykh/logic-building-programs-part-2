
var div1 = document.getElementById("divProgram1");
var pTag1 = document.createElement("p");
div1.appendChild(pTag1);

function numberHider() {
    var cardInput = document.getElementById("number").value;
    cardInputTag = document.getElementById("number")
    //for (let i = 0; i < cardInput.length; i++) {
    if (cardInput.length == 16) {
        var hiddenWords = cardInput.slice(0, 12);
        hiddenWords = "************";
        var finalOuput = hiddenWords + cardInput.slice(12, 16);
        //alert(`Your Privacy is Our Priority: ${finalOuput}`)
        pTag1.style.color = "green";
        pTag1.innerHTML = `Your Privacy is Our Priority: ${finalOuput}`;
        // var textNode = document.createTextNode(`Your Privacy is Our Priority: ${finalOuput}`)
        // pTag.appendChild(textNode);
    }
    else {
        pTag1.style.color = "red";
        pTag1.innerHTML = `Invalid Number`
        //alert(`Invalid Number`)
        //        pTag.style.color = "red"
        //  var textNode = document.createTextNode(`Invalid Number`)
        //     pTag.appendChild(textNode)
    }

    // }






    console.log("output is", finalOuput);

}

// Program no 2

var div2 = document.getElementById("divProgram2");
var pTag2 = document.createElement("p");
div2.appendChild(pTag2);

function potatoFinder() {

    var stringInput = document.getElementById("string").value;
    stringInput = stringInput.toLowerCase()

    var stringSearch = stringInput.search("potato");
    if (stringSearch !== -1) {

        var strFinal = stringInput.match(/potato/g).length;

        pTag2.style.color = "green"
        pTag2.innerHTML = `You have entered word "potato": ${strFinal} time`;
        //    var textNode = document.createTextNode(`You have entered word "potato": ${strFinal} time`);
        //    pTag.appendChild(textNode); 
        // console.log("available",strFinal);

    } else {
        //console.log("not available");

        pTag2.style.color = "red"
        pTag2.innerHTML = `You have entered word "potato": 0 times`;
        // var textNode = document.createTextNode(`You have entered word "potato": 0 times` ) 
        // pTag.appendChild(textNode); 
    }



}




// program 3

function stringRepeater() {
    var stringInput = document.getElementById("string2").value;
    
for (let i = 1; i < stringInput.length; i++) {
 
    stringInput = stringInput[i] 
   
}
    // strRepeat = stringInput.repeat("2");
    console.log();

}

//for (let i = 0; i < stringInput.length; i++) {

//     stringInput[i] = stringInput[i].repeat("2");
//     var str = stringInput[i]
//     console.log(str);

// }




// program 4

var div4 = document.getElementById("divProgram4");
var pTag4 = document.createElement("p");
div4.appendChild(pTag4);

function salaryCalculator() {
    var salaryInput = parseInt(document.getElementById("salary").value);


    if (salaryInput <= 10000) {
        var hra = (salaryInput * 20) / 100;
        var da = (salaryInput * 80) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
        //  console.log(`your gross salary is ${grossSalary}`);
        pTag4.style.color = "green";
        pTag4.innerHTML = `Your Gross Salary is: ${grossSalary} Pkr`
    }
    else if (salaryInput <= 20000) {
        var hra = (salaryInput * 25) / 100;
        var da = (salaryInput * 90) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
        // console.log(`your gross salary is ${grossSalary} Pkr`);
        pTag4.style.color = "green";
        pTag4.innerHTML = `Your Gross Salary is: ${grossSalary} Pkr`
    }
    else if (salaryInput > 20000) {
        var hra = (salaryInput * 30) / 100;
        var da = (salaryInput * 95) / 100;
        var grossSalary = parseInt(salaryInput + hra + da);
        // console.log(`your gross salary is ${grossSalary}`);
        pTag4.style.color = "green";
        pTag4.innerHTML = `Your Gross Salary is: ${grossSalary} Pkr`
    }
    else {
        pTag4.style.color = "red";
        pTag4.innerHTML = `Invalid Input`
    }

}







// program 5

var div5 = document.getElementById("divProgram5");
var pTag5 = document.createElement("p");
div5.appendChild(pTag5);

function billCalculator() {
    var billInput = document.getElementById("bill").value;

    if (billInput > 0 && billInput <= 50) {
        var bill = billInput * 0.50;
        bill = (bill * 20) / 100;
        //  console.log(bill  + "Rs");
        pTag5.style.color = "green";
        pTag5.innerHTML = `Your total Electricity Bill is: ${bill} Rs `
    }
    else if ((billInput > 50) && (billInput <= 150)) {
        var bill = ((billInput - 50) * 0.75) + (50 * 0.50);
        bill = (bill * 20) / 100;
        //  console.log(bill  + "Rs"); 
        pTag5.style.color = "green";
        pTag5.innerHTML = `Your total Electricity Bill is: ${bill} Rs`
    }
    else if ((billInput > 150) && billInput <= 250) {
        var bill = (100 * 0.75) + (50 * 0.50) + (billInput - 150) * 1.20;
        bill = (bill * 20) / 100;
        // console.log(bill  + "Rs")
        pTag5.style.color = "green";
        pTag5.innerHTML = `Your total Electricity Bill is: ${bill} Rs`
    }

    else if (billInput > 250) {
        var bill = (100 * 0.75) + (50 * 0.50) + (100 * 1.20) + (billInput - 250) * 1.50;
        bill = (bill * 20) / 100;
        //console.log(bill + "Rs")
        pTag5.style.color = "green";
        pTag5.innerHTML = `Your total Electricity Bill is: ${bill} Rs`;
    }
    else {
        pTag5.style.color = "red";
        pTag5.innerHTML = `Invalid Units`;
    }
}






// program 6
var div6 = document.getElementById("divProgram6")
var pTag6 = document.createElement("p")
div6.appendChild(pTag6);

function sumCalculator() {
    var sum = 0
    for (let i = 1; i < 1000; i++) {

        if ((i % 3 == 0) || (i % 5 == 0)) {
            //console.log(i);
            sum = sum + i;
        }


    }
    pTag6.style.color = "green"
    pTag6.innerHTML = `Your Result is : ${sum}`
    // var textNode = document.createTextNode(`Your Result is ${sum}`)
    // pTag.appendChild(textNode)
    console.log(sum)

}




// Program 7 
var div7 = document.getElementById("divProgram7")
var pTag7 = document.createElement("p")
div7.appendChild(pTag7);

function alphabetCalculator() {

    var inputString1 = document.getElementById("string1").value;
    inputString1 = inputString1.toLowerCase()
    var inputString2 = document.getElementById("str2").value;
    // console.log(inputString2);
    // console.log(inputString1);
    var countNum = 0;

    if (((/[a-zA-Z]/).test(inputString1)) && ((/[a-zA-Z]/).test(inputString2))) {

        for (let index = 0; index < inputString2.length; index++) {



            if (inputString2.charAt(index) == inputString1) {

                countNum = countNum + 1;


            }

        }
        console.log(countNum);
        pTag7.style.color = "green"
        pTag7.innerHTML = `Character "${inputString1}" is Found ${countNum} times in String 2  `
        

    }


    else {
        pTag7.style.color = "red"
        pTag7.innerHTML = `Alphabets Only `
    }

}



//practice program 
// var testVar = "a";
// var testVar2 = "muzamil ahmad"
// var total = 0;
// for (let index = 0; index < testVar2.length; index++) {
//     //var testSearch = testVar2.search(testVar);
//     // console.log(testSearch);
//     if (testVar2.charAt(index) == testVar) {

//         total = total + 1;



//     }


// }

// console.log(total);  