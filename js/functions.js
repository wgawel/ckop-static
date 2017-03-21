function generatePassword() 
{
    var pwchars = "abcdefhjmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWYXZ";
    var passwordlength = 8;  
    var passwd = document.getElementById('password_generated');
    passwd.value = '';

    for ( i = 0; i < passwordlength; i++ ) {
        passwd.value += pwchars.charAt( Math.floor( Math.random() * pwchars.length ) )
    }
    document.getElementById('password').value = passwd.value;
    document.getElementById('password_confirm').value = passwd.value;
    
    document.getElementById('password_generated').style.visibility = 'visible'; 
    
    return true;
}
