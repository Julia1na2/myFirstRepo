function validate(){
    const Username= document.getElementById('name').value;
    const Email= document.getElementById('mail').value;
    const Password= document.getElementById('pass').value;
    if(Username=="Marceline" && Email=="Marceline@gmail.com" && Password=="0000" )
    {
        alert("Welcome Marceline");
        return false;
    }
    else{
        alert("Login failed");
    }
}
