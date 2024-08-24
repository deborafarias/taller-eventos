const div = document.getElementById('theDiv');

div.addEventListener('click', function() {
    alert('Hola! Soy el Div');
})
 
const button = document.getElementById('button');

button.addEventListener('click', (event)=>{
    event.stopPropagation();
}
)
