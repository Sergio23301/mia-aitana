// invitacion.js

document.addEventListener('DOMContentLoaded', function() {
    // Fecha del evento: 29 de Septiembre de 2024 a las 5:00 PM
    const eventDate = new Date('December 5, 2024 17:00:00').getTime();

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el resultado en los elementos correspondientes
        document.getElementById('days').innerHTML = String(days).padStart(2, '0');
        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

        // Si la cuenta regresiva termina, escribe un mensaje
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = '<p class="event-started">¡El gran día ha llegado!</p>';
            // Estilo para el mensaje de evento iniciado
            const eventStartedMessage = document.querySelector('.event-started');
            if (eventStartedMessage) {
                eventStartedMessage.style.fontSize = '1.4rem';
                eventStartedMessage.style.fontWeight = '700';
                eventStartedMessage.style.color = '#e91e63';
                eventStartedMessage.style.padding = '15px';
                eventStartedMessage.style.backgroundColor = '#fff0f3';
                eventStartedMessage.style.borderRadius = '15px';
            }
        }
    }, 1000); // Actualiza cada segundo

    // Manejo del botón de Confirmar Asistencia (ejemplo simple)
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace recargue la página
            alert('¡Gracias por confirmar! Pronto te contactaremos con más detalles.');
            // Aquí podrías redirigir a un formulario de Google Forms, WhatsApp, etc.
            // window.location.href = "https://forms.gle/tu_formulario";
        });
    }
});


