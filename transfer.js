var puntaje = 0;
function crearContenedor() {
    var contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');
    // Crear la imagen izquierda
    var imagenIzquierda = document.createElement('img');
    imagenIzquierda.src = './IMG/GMWLogo_Color_S1.png';
    imagenIzquierda.style.float = 'left';
    imagenIzquierda.style.width = '25%';
    imagenIzquierda.style.height = 'auto';
    // Crear la imagen derecha
    var imagenDerecha = document.createElement('img');
    imagenDerecha.src = './IMG/TRANSFERLogo_BW_S1.png';
    imagenDerecha.style.float = 'right';
    imagenDerecha.style.width = '25%';
    imagenDerecha.style.height = 'auto';
    // Agregar las imágenes al contenedor
    contenedor.appendChild(imagenIzquierda);
    contenedor.appendChild(imagenDerecha);
    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contenedor);

    //BOTON INICIO
    var boton_inicio = document.createElement('button');
    boton_inicio.textContent = 'Empezar';
    boton_inicio.classList.add('boton_inicio');
    contenedor.appendChild(boton_inicio);
    document.body.appendChild(contenedor);

    //BOTON RESET
    var boton_reinicio = document.createElement('button');
    boton_reinicio.textContent = 'Reiniciar';
    boton_reinicio.classList.add('boton_recargar');
    contenedor.appendChild(boton_reinicio);
    document.body.appendChild(contenedor);
    boton_reinicio.style.display = 'none';

    // Instrucciones del juego
    var instrucciones = document.createElement('p');
    instrucciones.textContent = "Introduce los datos del destinatario, cada destinatario correcto suma 1 punto! Recuerda que los correos llevan @ más .com y las cuentas tienen 16 dígitos";
    instrucciones.classList.add('instrucciones');
    contenedor.appendChild(instrucciones);
    

    function iniciarCuentaAtras() {
        var segundos = 45; // Cambia el valor a la cantidad de segundos que desees
        var mostrarContador = document.createElement('div');
        mostrarContador.className = 'mostrar-contador';
        document.body.appendChild(mostrarContador);
        var cuentaAtras = setInterval(function() {
            mostrarContador.textContent = segundos;
            segundos--;
            if (segundos < 0) {
                clearInterval(cuentaAtras);
                mostrarContador.textContent = '¡Tiempo terminado!'; // Cambia el texto a vacío
                setTimeout(function() {
                    // Ocultar el texto después de 1 segundo
                    mostrarContador.style.display = 'none';
                }, 1000);
                // Acción adicional después de que la cuenta atrás termine
                boton_enviar.style.display = 'none';
                texto_nombre.style.display = 'none';
                campo_nombre.style.display = 'none';
                texto_correo.style.display = 'none';
                campo_correo.style.display = 'none';
                texto_destino.style.display = 'none';
                campo_destino.style.display = 'none';
                texto_monto.style.display = 'none';
                campo_monto.style.display = 'none';
                feedback_correo.style.display = 'none';
                feedback_destino.style.display = 'none';
                feedback_monto.style.display = 'none';
                feedback_nombre.style.display = 'none';
                boton_puntaje.classList.add('boton_puntajefinal');
                boton_reinicio.classList.remove('boton_recargar'); // Quita la clase 'boton_recargar'
                boton_reinicio.classList.add('boton_reinicio'); // Añade la clase 'boton_reinicio'



            }
        }, 1000); // Actualizar el contador cada segundo (1000 milisegundos)
    }

    // Después de hacer clic, iniciar la cuenta atrás
    boton_inicio.addEventListener('click', function() {
    iniciarCuentaAtras();
    boton_inicio.style.display = 'none';
    boton_enviar.style.display = 'block';
    boton_puntaje.style.display = 'block';
    texto_nombre.style.display = 'block';
    campo_nombre.style.display = 'block';
    texto_correo.style.display = 'block';
    campo_correo.style.display = 'block';
    texto_destino.style.display = 'block';
    campo_destino.style.display = 'block';
    texto_monto.style.display = 'block';
    campo_monto.style.display = 'block';
    boton_reinicio.style.display = 'block';
    instrucciones.style.display = 'none';
    });    

    boton_reinicio.addEventListener('click', function() {
        location.reload();
    });    

    // Crear el botón puntaje
    var boton_puntaje = document.createElement('button');
    boton_puntaje.textContent = puntaje.toString()+' Puntos';
    boton_puntaje.classList.add('boton_puntaje');
    contenedor.appendChild(boton_puntaje);
    boton_puntaje.style.display = 'none';

    //BOTON ENVIAR
    var boton_enviar = document.createElement('button');
    boton_enviar.textContent = 'Enviar';
    boton_enviar.classList.add('boton_enviar');
    contenedor.appendChild(boton_enviar);
    boton_enviar.style.display = 'none'; 
    // Crear elemento para feedback_nombre
    var feedback_nombre = document.createElement('div');
    feedback_nombre.textContent = 'Solo se permiten letras.';
    feedback_nombre.classList.add('feedback_nombre');
    contenedor.appendChild(feedback_nombre);
    feedback_nombre.style.display = 'none'; 
    // Crear elemento para feedback_monto
    var feedback_monto = document.createElement('div');
    feedback_monto.textContent = 'No se permiten letras.';
    feedback_monto.classList.add('feedback_monto');
    contenedor.appendChild(feedback_monto);
    feedback_monto.style.display = 'none';
    // Crear elemento para feedback_destino
    var feedback_destino = document.createElement('div');
    feedback_destino.textContent = 'Máximo 16 Números.';
    feedback_destino.classList.add('feedback_destino');
    contenedor.appendChild(feedback_destino);
    feedback_destino.style.display = 'none';
    // Crear elemento para feedback_correo
    var feedback_correo = document.createElement('div');
    feedback_correo.textContent = 'Debe Incluir @ y .com';
    feedback_correo.classList.add('feedback_correo');
    contenedor.appendChild(feedback_correo);
    feedback_correo.style.display = 'none';
    //Texto NOMBRE
    var texto_nombre = document.createElement('span');
    texto_nombre.textContent = 'Nombre:';
    texto_nombre.classList.add('texto_nombre');
    contenedor.appendChild(texto_nombre);
    texto_nombre.style.display = 'none';
    //CAMPO NOMBRE
    var campo_nombre = document.createElement('input');
    campo_nombre.type = 'text';
    campo_nombre.placeholder = 'Nombre';
    campo_nombre.classList.add('campo_nombre');
    campo_nombre.style.display = 'none';
    contenedor.appendChild(campo_nombre);
    //Texto Correo
    var texto_correo = document.createElement('span');
    texto_correo.textContent = 'Correo:';
    texto_correo.classList.add('texto_correo');
    contenedor.appendChild(texto_correo);
    texto_correo.style.display = 'none';
    //CAMPO CORREO
    var campo_correo = document.createElement('input');
    campo_correo.type = 'text';
    campo_correo.placeholder = 'Correo';
    campo_correo.classList.add('campo_correo');
    campo_correo.style.display = 'none';
    contenedor.appendChild(campo_correo);
    //Texto destino
    var texto_destino = document.createElement('span');
    texto_destino.textContent = 'Transferir A:';
    texto_destino.classList.add('texto_destino');
    contenedor.appendChild(texto_destino);
    texto_destino.style.display = 'none';
    //CAMPO DESTINO
    var campo_destino = document.createElement('input');
    campo_destino.type = 'text';
    campo_destino.placeholder = 'Destinatario';
    campo_destino.classList.add('campo_destino');
    campo_destino.style.display = 'none';
    contenedor.appendChild(campo_destino);
    //Texto monto
    var texto_monto = document.createElement('span');
    texto_monto.textContent = 'Monto: $';
    texto_monto.classList.add('texto_monto');
    contenedor.appendChild(texto_monto);
    texto_monto.style.display = 'none';        
    //CAMPO MONTO
    var campo_monto = document.createElement('input');
    campo_monto.type = 'text';
    campo_monto.placeholder = 'Cantidad';
    campo_monto.classList.add('campo_monto');
    campo_monto.style.display = 'none';
    contenedor.appendChild(campo_monto);

    // Eventos de entrada para validar campos
    campo_nombre.addEventListener('input', function() {
        var valorOriginal = this.value;
        this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        if (valorOriginal !== this.value) {
            feedback_nombre.style.display = 'block';
        } else {
            feedback_nombre.style.display = 'none';
        }
    });
    campo_destino.addEventListener('input', function() {
        var valorOriginal = this.value;
        this.value = this.value.replace(/[^0-9.,]/g, '');
        if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
        }
        if (valorOriginal !== this.value) {
        feedback_destino.style.display = 'block';
        } else {
        feedback_destino.style.display = 'none';
        }
    });
    campo_monto.addEventListener('input', function() {
        var valorOriginal2 = this.value;
        this.value = this.value.replace(/[^0-9.,]/g, '');
        if (valorOriginal2 !== this.value) {
            feedback_monto.style.display = 'block';
        } else {
            feedback_monto.style.display = 'none';
        }
    });

    // Clic en el botón Enviar
    boton_enviar.addEventListener('click', function() {
    // Campos están llenos
    if (
        campo_nombre.value.trim() !== '' &&
        campo_correo.value.includes('@') &&
        campo_correo.value.includes('.com') &&
        campo_destino.value.trim().length === 16 &&
        campo_monto.value.trim() !== ''
    ) {
        puntaje++;
        boton_puntaje.textContent = puntaje.toString() + (puntaje === 1 ? ' Punto' : ' Puntos');
        console.log("Puntaje actual: " + puntaje);
        // Más acciones relacionadas con el envío
    } else {
        feedback_correo.style.display = 'block';
    }
    // Limpiar todos campos solo si están llenos
    campo_nombre.value = '';
    campo_correo.value = '';
    campo_destino.value = '';
    campo_monto.value = '';
});
}
document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});