// console.log("hello");
// $("#submit").click(function() {
//     alert("The Form has been Submitted.");
//  });
 function myFunction()
 {
    // console.log(document.getElementById("First Name").value)
    ValidateEmail(document.getElementById("Email").value);
    let str="";
    str=str+"First Name : "+document.getElementById("First Name").value+"\n";
    
    str=str+"Last Name : "+document.getElementById("Last Name").value+"\n";
    
    str=str+"birthday : "+document.getElementById("birthday").value+"\n";
    
    str=str+"country : "+document.getElementById("country").value+"\n";
    
    
    str=str+"profession : "+document.getElementById("Profession").value+"\n";
    str=str+"email : "+document.getElementById("Email").value+"\n";
    str=str+"Contact No : "+document.getElementById("Contact").value;
    alert(str);
    // console.log(str);
    // alert("First Name : "+document.getElementById("First Name").value);
    


 }
 function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}