async function signup(e){
    e.preventDefault()
    let email = document.getElementById("signupEmail")
    let password = document.getElementById("signupPassword")
    // console.log(email.value , password.value);

    try{
        const result = await getAuth.createUserWithEmailAndPassword(email.value, password.value)
        console.log(result);
        
    }catch(err){
        console.log(err);
        
    }
    
   
    
}

