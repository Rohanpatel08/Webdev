function seterror(id, error){
    ele = document.getElementById(id)
    console.log(ele)
    ele.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;

    var pass = document.forms['myForm']['fpass'].value;
    // console.log(pass);
    // console.log(pass.length);
    if(pass.length < 8){
        console.log('passed')
        seterror("password",'*Password is too Short')
        returnval = false;
    }

    var mail = document.forms['myForm']['fmail'].value;
    // console.log(pass);
    // console.log(pass.length);
    if(mail.length > 20 ){
        console.log('passed')
        seterror("email",'*Email is too Long')
        returnval = false;
    }
    localStorage.setItem('password',pass )
    localStorage.setItem('Email', mail)
    
    if(returnval == true){
        window.location.href = "../index.html"
    }
}


