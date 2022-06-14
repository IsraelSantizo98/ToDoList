const input = document.querySelector('input');
const agregarBtn = document.querySelector('.btn-primary');
const ul = document.querySelector('ul');
const vacio = document.querySelector('.vacio');

agregarBtn.addEventListener('click', (e) => {
    e.preventDefault();//evita la recarga de la pagina, quita las acciones por defecto
    const texto = input.value; //al clikear el boton toma el valor y lo guarda en la variable
    
    if(texto !== ''){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = texto;//Se toma el valor de la variable texto y se crea un li con dicho dato
        //localStorage.setItem('Tarea', texto);
        let tarea = document.getElementById('contenedor');
        //console.log(tarea);
        //console.log(localStorage.getItem('Tarea'));
        console.log(p.textContent);
        li.appendChild(p);
        li.appendChild(eliminarBtn());
        ul.appendChild(li);
        input.value = '';
        vacio.style.display = 'none';
    }
});

function eliminarBtn() {
    const borrar = document.createElement('div');
    borrar.textContent = "";
    borrar.className = "btn-eliminar fas fa-trash";
    borrar.addEventListener('click', (e)=>{
        const item = e.target.parentElement;//El que contiene al item
        ul.removeChild(item);//Se debe eliminar desde el elemento padre
        const items = document.querySelectorAll('li');
        if (items.length === 0){
            vacio.style.display = 'block';
        }
    });
    return borrar;
}
/*
let num = 105487;
localStorage.setItem('Orden', num);
console.log(localStorage.getItem('Orden'));
num = 16;
localStorage.setItem('Orden', num);
console.log(localStorage.getItem('Orden'));
*/