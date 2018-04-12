const auth = firebase.auth();

$('#logout').click(function(){
    auth().signOut();
    sessionStorage.removeItem('email');
});

if (sessionStorage.getItem('email') === null) {
    window.location.replace('https://www.jobcodes.com.br/mvp');
}