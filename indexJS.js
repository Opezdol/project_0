document.addEventListener("DOMContentLoaded", function () {

    
    document.querySelector('form').onsubmit = function(){
        const name  = document.querySelector('#name').value;
        alert(name);
        document.querySelector('h2').innerHTML = `Hello, ${name}`;
    };
});