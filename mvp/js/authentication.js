const auth = firebase.auth();

if (sessionStorage.getItem('email') === null) {
    window.location.replace('https://renanmarcell.github.io/dev_jobcodes/index.html');
}

$('#logout').click(function(){
    auth().signOut();
    sessionStorage.removeItem('email');
    window.location.replace('https://renanmarcell.github.io/dev_jobcodes/index.html');
});
