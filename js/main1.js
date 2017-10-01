
function calculateFunction(){
var sellingPrice,costPrice;

sellingPrice = parseInt(document.getElementById("s").value);
costPrice = parseInt(document.getElementById("c").value);


profitCalculate(sellingPrice,costPrice);
}


    function profitCalculate(sellingPrice,costPrice){
        var n;
        try{
        if(sellingPrice == ""|| costPrice=="") throw 'The given value is invalid';
        if (isNaN(sellingPrice)||isNaN(costPrice)) throw "Value should be a number!";
        if(sellingPrice<0 || costPrice<0 ) throw "Value shouldn't be 0 or negative value!";
        if(sellingPrice<costPrice) throw "No profit";
         var value1=sellingPrice-costPrice;
         var textcontent=document.getElementById('cal');
         textcontent.value=value1;
        
        $("#cal").html("The total price per person is: $"+textcontent);
        }
        catch(er){
           n= er;
            }
            return n;
}

