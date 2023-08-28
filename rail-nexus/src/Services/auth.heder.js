

function AuthHeader() {

    if(sessionStorage.getItem("User") != null){
        const loginUser = JSON.parse(atob(sessionStorage.getItem("User")));
        console.log(loginUser)
        const token = loginUser.token;
        return {
            'Content-Type': 'application/json',
            Authorization : 'Bearer '+ token
            
        }
    }
    else{
        return {
            'Content-Type': 'application/json',
            
        }
    }

      
}

export default AuthHeader;