
//Battleship Game: 1st way of coding
function battleship(){
let a=[0,1,1,0,1]
let guess=0
let hit=0
while (true){
    let num=parseInt(prompt("Please Enter any number between 1 to 5"))
    if(num>5 || num<1){
        alert("Please Enter the valid number!")
        continue
    }
    if(num==2 || num==3 || num==5){
        guess++
        hit++
        alert("you have hit the battleship!")
    }
    if(num==1 || num==4){
        guess++
        alert("you missed the battleship!")
    }
    if(hit==3){
        alert("Your total Successful hits are made (3 Hits)")
        alert("Total Guess is "+ guess)
        break
    }
}
}

//Battleship Game: 2nd way of coding
function battleship2(){
    const locations=[0,1,1,0,1]
    let hit=0
    let guess=0
while(hit !=3){
    const choice=Number(prompt("Enter the number from 1 to 5"))
    if(choice < 1 || choice > 5){
        alert("Enter the valid number!!!")
        continue
    }
    guess++
    if (locations[choice - 1] == 1){
        alert("you hit a battleship")
        hit++
        locations[choice - 1] = 2
    }else if(locations[choice - 1] == 2){
        alert("you have already this battleship!")
    } else{
        alert("you missed the battleship")
    }
    alert("Your Total Guess is: " + guess)     
}
}


//Button Toggle Function
function buttonToggle()
{
  var x = document.getElementById("a");
  if(x.innerHTML=="Welcome to JavaScript"){
      x.innerHTML="Friday it is!!!";
    x.style.color="red"}
  else{
      x.innerHTML="Welcome to JavaScript";
      x.style.color="blue"}
}

//Add function
function add(){
    var n1=document.getElementById("num1").value
    var n2=document.getElementById("num2").value
    var res= Number(n1) + Number(n2)
    document.getElementById('result').innerHTML=res
}

//Subtract Function
function subtract(){
    var n1=document.getElementById("num1").value
    var n2=document.getElementById("num2").value
    var res= Number(n1) - Number(n2)
    document.getElementById('result').innerHTML=res
}

//Multiplication function
function multiplication(){
    var n1=document.getElementById("num1").value
    var n2=document.getElementById("num2").value
    var res= Number(n1) * Number(n2)
    document.getElementById('result').innerHTML=res
}

//Division Function
function divide(){
    var n1=document.getElementById("num1").value
    var n2=document.getElementById("num2").value
    var res= Number(n1) / Number(n2)
    document.getElementById('result').innerHTML=res
}