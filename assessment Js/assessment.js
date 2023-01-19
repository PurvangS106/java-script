function fill()
    {
        var a = document.getElementById("fname").value;
        var b = /^[A-Za-z]+$/;

        var c = document.getElementById("mobile").value;
        var d = /^[0-9]+$/;

        // This code helps to warn if name field is empty.
        if(a == "")
        {
            alert("Please fill up your First name");
            document.getElementById("fname").focus();
            return false;
        }
        // This code notifies users not to input less than 3 and more than 9 characters.
        if(a.length < 3 || a.length > 9)
        {
            alert("Name must be more than 3 and less than 9 charcters.");
            document.getElementById("fname").focus();
            return false;
        }
        // This code warns users that only alphabets are available in Name field.
        if(a.match(b))
        true;
        else
        {
            alert("Only alphabets are allowed in name");
            document.getElementById("fname").focus();
            return false;
        }

        // This code helps to warn if last name field is empty.
        if(document.getElementById("lname").value == "")
        {
            alert("Please fill up your Last name");
            document.getElementById("lname").focus();
            return false;
        }

        // This code helps to warn if email field is empty.
        if(document.getElementById("mail").value == "")
        {
            alert("Please fill up your Email");
            document.getElementById("mail").focus();
            return false;
        }

        // This code helps to warn if mobile number field is empty.
        if(c == "")
        {
            alert("Please fill up your Mobile Number");
            document.getElementById("mobile").focus();
            return false;
        }
        // This code warns users if they input alphabets in mobile field. This code let users input only digits.
        if(c.match(d))
        true;
        else
        {
            alert("Alphabets are not allowed in Mobile Number");
            document.getElementById("mobile").focus();
            return false;
        }
        // This code warns used if they input more or less than 10 digits in mobile field.
        if(c.length != 10)
        {
            alert("Please enter 10 number Mobile Number only.");
            document.getElementById("mobile").focus();
            return false;
        }
        
        // This code helps to warn if date of birth field is empty.
        if(document.getElementById("dob").value == "")
        {
            alert("Please fill up your date of birth");
            document.getElementById("dob").focus();
            return false;
        }

        // This code helps to warn if address field is empty.
        if(document.getElementById("address").value == "")
        {
            alert("Please fill up your address");
            document.getElementById("address").focus();
            return false;
        }

        // This code helps to warn if city name field is empty.
        if(document.getElementById("city").value == "")
        {
            alert("Please fill up your city");
            document.getElementById("city").focus();
            return false;
        }

        // This code helps to warn if area pincode field is empty.
        if(document.getElementById("pin").value == "")
        {
            alert("Please fill up your area pin");
            document.getElementById("pin").focus();
            return false;
        }

        // This code helps to warn if state name field is empty.
        if(document.getElementById("state").value == "")
        {
            alert("Please fill up your state");
            document.getElementById("state").focus();
            return false;
        }

        // This code helps to warn if password field is empty.
        if(document.getElementById("pwd").value == "")
        {
            alert("Please fill up your password");
            document.getElementById("pwd").focus();
            return false;
        }

    }