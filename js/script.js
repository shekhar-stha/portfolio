
    /*function formValidation() {
        var Name=documents.forms["contactForm"]['Name'].value;
        var email=documents.forms["contactForm"]['email'].value;
        var number=documents.forms["contactForm"]['number'].value;


        if (name==""||email=""||number="") {
            alert("Please provide the given data")
            
        } else {
            document.write("Successfully sent")
        }

        
    }
    */
    function formValidation(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(name=="" || phone =="" ||email ==""){
          text = "Please fill up the form properly";
          error_message.innerHTML = text;
          return false;
        }


        if(name.length < 4){
          text = "Please Enter valid name";
          error_message.innerHTML = text;
          return false;
        }
    
        if( phone.length < 7){
          text = "Please Enter valid Phone Number";
          error_message.innerHTML = text;
          return false;
        }

        if(email.indexOf("@") == -1 || email.length < 6){
          text = "Please Enter valid Email";
          error_message.innerHTML = text;
          return false;
        }
        if(message.length <= 1){
          text = "Please Enter More something in messagebox";
          error_message.innerHTML = text;
          return false;
        }

        alert("Form Submitted Successfully!");
        return true;
      }
    