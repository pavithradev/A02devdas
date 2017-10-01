
alert("connected");
function calculateFunction(){
var sellingPrice,costPrice;

sellingPrice = document.getElementById('s').value;
costPrice = document.getElementById('c').value;


profitCalculate(sellingPrice,costPrice);
}

function printResult(){

let profit= document.getElementById('cal');
profit.innerHTML="Profit";
$("#s").val("");
$("#c").val("");

}

function profitCalculate(sellingPrice,costPrice){


if(sellingPrice == ""|| costPrice=="") 
throw Error('The given value is invalid');
if (isNaN(sellingPrice)||isNaN(costPrice)) throw "Value should be a number!";
if(sellingPrice<=0 || costPrice<=0 ) throw "Value shouldn't be 0 or negative value!"
 var value1=parseInt(s)-parseInt(c);
 var textcontent=document.getElementById('cal');
 textcontent.value=value1;

$("#cal").html("The total price per person is: $"+textcontent);
}