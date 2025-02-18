document.addEventListener("DOMContentLoaded", function() {
    const signInPage = document.getElementById('signInPage');
    const signUpPage = document.getElementById('signUpPage');
    document.getElementById('showSignUp').addEventListener('click', function(event) {
        event.preventDefault(); 
        signInPage.style.display = 'none'; 
        signUpPage.style.display = 'block';
    });

    document.getElementById('showSignIn').addEventListener('click', function(event) {
        event.preventDefault(); 
        signUpPage.style.display = 'none';  
        signInPage.style.display = 'block';
    });
});
