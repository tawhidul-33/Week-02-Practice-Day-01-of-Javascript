const leapYear=(yr)=>{
   if((yr%4==0 && yr%100!=0) || yr % 400==0){
    return 'Leap Year';
   }
   else{
    return 'Not Leap Year';
   }
  
}

const leapYear_checking=leapYear(2024); //input 
console.log(leapYear_checking);