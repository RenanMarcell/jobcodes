const auth = firebase.auth();

$('#logout').click(function(){
    auth().signOut();
    sessionStorage.removeItem('email');
    window.location.replace('https://www.jobcodes.com.br/mvp');
});

if (sessionStorage.getItem('email') === null) {
    window.location.replace('https://www.jobcodes.com.br/mvp');
}