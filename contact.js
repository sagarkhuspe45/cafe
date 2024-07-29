function Reg()
{
	//For First Name
	let fname=document.getElementById("Fname").value;
	if(fname=="")
	{
		document.getElementById("Fnamemsg").innerHTML="Please Enter First Name..!"; 
		return false;
	}
	else
	{
		document.getElementById("Fnamemsg").innerHTML=""; 
	}
	if(fname.length<3 || fname.length>15)
	{
		document.getElementById("Fnamemsg").innerHTML="Name length 4-15 char..!";
		return false;
	}
	else
	{
		document.getElementById("Fnamemsg").innerHTML=""; 
	}


	//For Last Name
	let lname=document.getElementById("Lname").value;
	if(lname=="")
	{
		document.getElementById("Lnamemsg").innerHTML="Please Enter Last Name..!"; 
		return false;
	}
	else
	{
		document.getElementById("Lnamemsg").innerHTML=""; 
	}


	//for Mobile Number
	let mnum=document.getElementById("Mnumber").value;
	if(mnum=="")
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter mobile No..!";
		return false;
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}
	if(isNaN(mnum))
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter Number only..!";
		return false;
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}

	//Number start with 6,7,8,9  if(cnum.charAt(0)<=6)
	if((mnum.charAt(0)!=6) && (mnum.charAt(0)!=7) && (mnum.charAt(0)!=8) && (mnum.charAt(0)!=9)) 
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter Valid contact..!";
		return false;	
	}
	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}

	//10 digit only  if(cnum.length!=10)
	if (mnum.length<10 || mnum.length>10) 
	{
		document.getElementById("mobilemsg").innerHTML="Please Enter 10 Digit No..!";
       	return false;
  	}
  	else
	{
		document.getElementById("mobilemsg").innerHTML=""; 
	}


	//For Email Id
	let email=document.getElementById("email").value;
	if(email=="")
  	{
  		document.getElementById("emailmsg").innerHTML="Please Enter Email..!";
  		return false;
  	}
  	else
	{
		document.getElementById("emailmsg").innerHTML=""; 
	}	
	if(email.charAt(email.length-3)!="." && email.charAt(email.length-4)!=".")
	{
		document.getElementById("emailmsg").innerHTML="Please Enter Valid Email..!";
  		return false;
	}
	else
	{
		document.getElementById("emailmsg").innerHTML=""; 
	}

}