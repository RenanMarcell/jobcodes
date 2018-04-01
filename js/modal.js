

function adicionaDados(event) {
    event.preventDefault();
    let nome = $("#nome")[0].value;
    let email = $("#email")[0].value;
    let problema = $("#problema")[0].value;
    var db = firebase.database();
    db.ref('/').push({
        nome: 'nomedouser',
        answers: {
            answer1: nome,
            answer2: email,
            answer3: problema
        }
    });
  // ...
  // ...



}