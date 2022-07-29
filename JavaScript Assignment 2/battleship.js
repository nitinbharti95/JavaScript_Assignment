function battleship(){
let a=[0,1,1,0,1]
let number=parseInt(prompt("Please Enter any number between 1 to 5"))
if(number>5 || number<1){
    alert("Please Enter the valid number!")
}
let guess=0
switch(number){
    case a[2]:
        alert("you have hit a battleship")
        guess++
        break
    case a[3]:
        alert("you have hit a battleship")
        guess++
        break
    case a[5]:
        alert("you have hit a battleship")
        guess++
        break
    default:
        alert("you missed the battleship!")
}
alert("you total guess count is "+ guess)
}