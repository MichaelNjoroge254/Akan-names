var days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
    
    var year = document.getElementById("year").value;
    if(year === "" && document.myForm.year.value.length !=4) {
        alert("Provide a valid year.");
        document.myForm.year.focus() ;
        return false;
     }
   else{
       return true ;
     }
}

function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  }
  function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayValue === 1){
          alert("You were born on " +days[0] + "." + "Your akan name is " +maleNames[0] + ".");
        }
        else if(dayValue === 2){
          alert("You were born on " +days[1] + "." + "Your akan name is " +maleNames[1] + ".");
        }
        else if(dayValue === 3){
          alert("You were born on " +days[2] + "." + "Your akan name is " +maleNames[2] + ".");
        }
        else if(dayValue === 4){
          alert("You were born on " +days[3] + "." + "Your akan name is " +maleNames[3] + ".");
        }
        else if(dayValue === 5){
          alert("You were born on " +days[4] + "." + "Your akan name is " +maleNames[4] + ".");
        }
        else if(dayValue === 6){
          alert("You were born on " +days[5] + "." + "Your akan name is " +maleNames[5] + ".");
        }
        else if(dayValue === 0){
          alert("You were born on " +days[6] + "." + "Your akan name is " +maleNames[6] + ".");
        }
      break;
      case "female":
        if (dayValue == 1){
          alert("You were born on " +days[0] +  "." + "Your Akan name is " +femaleNames[0] + ".");
        }
        else if(dayValue == 2){
          alert("You were born on " +days[1] +  "." + "Your Akan name is " +femaleNames[1] + ".");
        }
        else if(dayValue == 3){
          alert("You were born on " +days[2] +  "." + "Your Akan name is " +femaleNames[2] + ".");
        }
        else if(dayValue == 4){
          alert("You were born on " +days[3] +  "." + "Your Akan name is " +femaleNames[3] + ".");
        }
        else if(dayValue == 5){
          alert("You were born on " +days[4] +  "." + "Your Akan name is " +femaleNames[4] + ".");
        }
        else if(dayValue == 6){
          alert("You were born on " +days[5] +  "." + "Your Akan name is " +femaleNames[5] + ".");
        }else if(dayValue == 0){
          alert("You were born on " +days[6] +  "." + "Your Akan name is " +femaleNames[6] + ".");
        }
      break
      default:
            
    }
  }
  function findName(){
    dayValue = calculateDayValue();
    getGender();
  }