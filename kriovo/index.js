function checkPassword()
        {
            var a=document.getElementById("passwords").value;
            var b=document.getElementById("passwordss").value;
            if(a==""){
                document.getElementById("messages").innerHTML="** Fill Password";
                return false;
            }
            if(a.length<5)
            {
                document.getElementById("messages").innerHTML="**Password length must be greater than 5 characters ";
                return false;
            }
            if(a.length>25)
            {
                document.getElementById("messages").innerHTML="**Password length must be smaller than 25 characters ";
                return false;
            }
            if(a!=b)
            {
                document.getElementById("messagess").innerHTML="**Password are not same";
                return false;
            }
          }