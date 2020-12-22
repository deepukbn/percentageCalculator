function publishResult(){
    const IS701=document.getElementById("IS701").value;
    const IS702=document.getElementById("IS702").value;
    const IS703=document.getElementById("IS703").value;
    const IS704=document.getElementById("IS704").value;
    const IS705=document.getElementById("IS705").value;
    const IS706=document.getElementById("IS706").value;

   if((IS701>100 || IS701<0) || (IS702>100 || IS702<0) || (IS703>100 || IS703<0) || (IS704>100 || IS704<0) || (IS705>100 || IS705<0) || (IS706>100 || IS706<0)){
       alert("Enter the marks between 0 to 100");
       window.location.reload();
   }
  

    let total= parseFloat(IS701) + parseFloat(IS702) + parseFloat(IS703) + parseFloat(IS704) + parseFloat(IS705) + parseInt(IS706);
    if(total>600){
        document.getElementById("sum").innerHTML="Please Enter the valid marks";
    }
    else{
    document.getElementById("sum").innerHTML="The Sum is: " + total + "/600";
    }

    let percentage=(total*100)/600;


    
    if(percentage>100){
        document.getElementById("percentage").innerHTML="Please Enter the valid marks";
    }else{
        document.getElementById("percentage").innerHTML="The Percentage is: " + percentage+"%";
    }





    if(percentage>100){
        alert("please enter valid marks ")
    }
    else if (percentage>=90) {
        document.getElementById("grade").innerHTML="You'r Passed  with A+ Grade";
    }
    else if (percentage>=80) {
        document.getElementById("grade").innerHTML="You'r Passed with A Grade";
    }
    else if (percentage>=70) {
        document.getElementById("grade").innerHTML="You'r Passed with B+ Grade";
    }
    else if (percentage>=60) {
        document.getElementById("grade").innerHTML="You'r Passed with B Grade";
    }
    else if (percentage>=50) {
        document.getElementById("grade").innerHTML="You'r Passed with C+ Grade";
    }
    else if (percentage>=40) {
        document.getElementById("grade").innerHTML="You'r Passed with C Grade";
    }
    else{
        document.getElementById("grade").innerHTML="You'r Failed";

    }
}

    