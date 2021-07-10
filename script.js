//hide the bottom container
document.getElementById("bottom-container").style.display = "none";

//on clicking button
function result(){ 
  var sentence = document.querySelector(".message");
  
  if ((document.querySelector(".input1").value === "")||(document.querySelector(".input2").value === "")){
    sentence.innerHTML="Invalid inputs!!!";
    document.querySelector(".percentage").innerHTML = "VVVV";
  }

  else{
    //formula of love score
    var num = Math.floor(Math.random()*100)+1;
    document.querySelector(".percentage").innerHTML = num;
    if (num>=80){
     sentence.innerHTML = "made for each other";
    }
    else if (num<80 && num>=60){
      sentence.innerHTML = "Love each other to make it 100%";
    }
    else if (num<60 && num>=30){
      sentence.innerHTML = "Try harder!!!";
    }
    else{
      sentence.innerHTML = "Bad Luck in Love life";
    }
  }

  //result will direct to bottom container
  location.href="#bottom-container";
  document.getElementById("bottom-container").style.display = "block";

  //clearing the input
  document.querySelector(".input1").value = "";
  document.querySelector(".input2").value = "";

}
