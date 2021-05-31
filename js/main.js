//Funcion de galeria portafolios section

window.addEventListener('load',()=>{
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.portafolio .box-container .box .body-box img').forEach((elemento=>{
        const ruta = elemento.getAttribute('src');
        console.log(ruta);

        elemento.addEventListener('click',()=>{
            //overlay.classList.add('active');
            document.querySelector('#overlay  img').src = ruta;
            overlay.style.visibility = 'visible';
            ;   
        })

        const cerrarOverlay = document.querySelector('#overlay button');
        cerrarOverlay.addEventListener('click',()=>{
            overlay.style.visibility="hidden";
        })
    }));

});


const formulario = document.getElementById('form-contact');
const inputs =  document.querySelectorAll('#form-contact input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

function  validar(nombre){
     switch (nombre.target.name){
         case "nombre":
             if(expresiones.nombre.test(nombre.target.value)){



             }else{
                document.getElementById()
             }
           
         break;

         case "email":
            console.log('si')
         break;

         case "project":
            console.log('si')
         break;
     }
    

}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validar);
    input.addEventListener('blur',validar);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

})