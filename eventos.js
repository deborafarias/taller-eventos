const div = document.getElementById('theDiv');

div.addEventListener('click', function() {
    alert('Hola! Soy el Div');
})
 
//Solución que ya había implementado

const button = document.getElementById('button');

button.addEventListener('click', (event)=>{
    event.stopPropagation();
}
)
