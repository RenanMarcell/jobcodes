var ip = '';
$.getJSON('//ipinfo.io/json', function(data) {
    ip = JSON.parse(JSON.stringify(data, null, 2));
});

if (localStorage.getItem('savedForm') === 'true'){
    $('#button-submit').prop('disabled', true);
    $('.onSuccess').css('display', 'block');
    window.location.href = '#onSuccessMessage';
    localStorage.setItem('savedForm', 'false');
}