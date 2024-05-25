AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
/* emailjs*/
    (function() {
        emailjs.init('w9KEeTkdztGG_h94c'); // Reemplaza 'w9KEeTkdztGG_h94c' con tu ID de usuario de EmailJS
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = document.getElementById('button');
        btn.textContent = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_gih8q2f';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Enviar Mensaje';
                alert('Mensaje enviado!');
            }, (err) => {
                btn.textContent = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });

