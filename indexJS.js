let i = 0;



function count(){
    i++;
    document.querySelector('h1').innerHTML = i;
    if (i % 2 === 0 ){
        alert('MOD TWO, biatch!!');
    }
}

button = document.querySelector('button').onclick = count;
