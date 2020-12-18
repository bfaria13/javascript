function load(){
    alert("loaded page");
}

function clicked(){
    document.getElementById("thank").innerHTML = "<b> Thank you for clicking </b>";
    //element.innerHTML = "<b> Thank you for clicking </b>"; 
    //console.log(document.getElementById("thank")); //to return action in console debug
    //alert("Thank you for click") //if you want to return by alert message
}

function redirect(){
    document.getElementById("open").innerHTML = "<b> Opened in a new tab </b>";
    window.open("https://github.com/bfaria13/javascript"); //open new tab
    //window.location.href = "https://github.com/bfaria13/javascript"; //open same tab
}

function change(element){
    element.innerHTML = "Thank you for put mouse here";
    //document.getElementById("mouseover").innerHTML = "<b> Thank you for put mouse here </b>";
    //alert("change text")
}

function comeback(element){
    element.innerHTML = "Put mouse here";
    //document.getElementById("mouseover").innerHTML = "<b> Put mouse here </b>";
}

function f2change(element){
    //alert()
    console.log(element.value)
}

var type;

function input(element){
    //type = console.log(element.value);
    console.log(element.value)
    return type = element.value
}

//console.log(type);
var result;
function solve(){
    console.log(type);
    var n1 = parseInt(prompt("digite first number: "));
    var n2 = parseInt(prompt("digite second number: "));
    if (type == 1){
        result = n1 + n2;
        return document.getElementById("result").innerHTML = result;
    }if (type == 2){
        result = n1 - n2;
        return document.getElementById("result").innerHTML = result;
    }if (type == 3){
        result = n1/n2;
        return document.getElementById("result").innerHTML = result;
    }if (type == 4){
        result = n1*n2;
        return document.getElementById("result").innerHTML = result;
    }else{
        return document.getElementById("result").innerHTML = "Impossible to do this operation!";
    }
}

/*
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, name, new_name){
    return frase.replace(name, new_name);
}

var validar = 0; //global
function checkAge(age){
    //var check; //local
    if (age >= 18){
        check = true
    }else{
        check = false
    }
    return check;
}

//alert(soma(5,10));
//alert(setReplace("Let's go Japan", "Japan", "Brazil"));
var age = prompt("What's your age?");
console.log(checkAge(age));
*/

//var d = new Date();
//alert(d);
//alert(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
//console.log(d.getDate() + "/" + (d.getMonth()+1));

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
};
*/

/*
var age = prompt("what's your age?")
//var age = 29;
if (age >= 18){
    alert("adult");
}else{
    alert("young");
}
*/

//var fruits = [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]
//console.log(fruits[1].name)
//var fruits = {name: "apple", color: "red"}
//console.log(fruits.name + " is " + fruits.color)

//var list = ['apple','orange','banana'];
//list.push('pineapple');
//list.pop();
//console.log(list);
//console.log(list.reverse());
//console.log(list.length);
//console.log(list.toString());
//console.log(list.join(" | "));

//var name = "Bruna Faria";
//var age = 29;
//alert("Welcome " + name);
//alert(age + 10);
//console.log(name.replace("Bruna", "Lais"));
//console.log(name.toUpperCase());
//console.log(age);