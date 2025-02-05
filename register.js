var userarray = JSON.parse(localStorage.getItem("userarray")) || [];
function register(){
    var namee =document.getElementById("name").value;
    var emaill=document.getElementById("email").value;
    var passwordd=document.getElementById("password").value;
    var passwordd2=document.getElementById("password2").value;
    var duplicatEmail=""
    var checkEmailDuplicate;
    
    userarray.forEach((element,index) => {
        duplicatEmail=element.email
        if(emaill===element.email){
            return checkEmailDuplicate= false;
        }
    });
    if(namee===passwordd){
        alert("name and password can not be the same ")
        document.getElementById("name").style.borderColor='red'
        
    }else if(emaill=="" || passwordd=="" || passwordd2==""){
        alert("please enter your information")
    }else if(passwordd!==passwordd2){
        alert("please make sure to write the same password")
    }else if(!emaill.includes("@")){
        alert("enter valid email")
    }else if(passwordd.length<8){
        alert("too short password")
    }else if(checkEmailDuplicate==false){
        alert("you have already registerd")
    }
    else{
        userarray.push({
            "name":namee,
            "email":emaill,
            "password":passwordd,
        })
    }
    
    // if(localStorage.getItem("userarray")==null){
    //     userarray=[];
    // }else{
    //     list=JSON.parse(localStorage.getItem('userarray'))
    // }
   
    localStorage.setItem("userarray",JSON.stringify(userarray))
    //document.getElementById("btn").setAttribute("id")

}

function login(){
    var email_log=document.getElementById("email_login").value;
    var password_log=document.getElementById("password_login").value;
    var login_result=false
    userarray.forEach((element) => {
        
        if(email_log===element.email && password_log===element.password){
             login_result=true;
            
        }
       
    });
    if(login_result){
        alert("you have logged in sucssefully")
    }else if(!login_result){
        alert("try again")

    }

}

    