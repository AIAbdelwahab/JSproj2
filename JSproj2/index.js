var count = 0;
var longest = "";
var ll =0;
var index =0;
var flagz =false;



function countWords(){
   let words = document.getElementById("words").value;

   let splitted = words.split(" ");

   for(let i =0;i<splitted.length;i++){
   if(splitted[i].length > ll){
    ll = splitted[i].length;
    count++;
    longest = splitted[i];
    index = i;
   }else{
    count++;
   }

   }

   document.getElementById("value").innerHTML =longest;
   document.getElementById("count").innerHTML =count;

   count = 0;

   var output = ""

   for(let i =0; i < splitted.length;i++){
    if( i == index && flagz == false){
    
    output = output + "<mark>";
    output = output + splitted[i];
    output = output + "</mark>";
    flagz = true;

    }else{
        output = output + " " +splitted[i]
    }

    if(i == splitted.length - 1){
        flagz = false;
    }
   }

   document.getElementById("highlights").innerHTML = output;
   


}