let photo = document.getElementById('imgPerfil');
let file = document.getElementById('profile-pic');


file.addEventListener('change', (event) => {

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

document.getElementById('email') = usuario.email; 

var em = localStorage.email = 'albertluis123@gmail.com';
var num = localStorage.numero = '31 998663664';
var sn = localStorage.senha = 'al221410';