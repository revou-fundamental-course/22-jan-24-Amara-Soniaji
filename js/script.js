document.addEventListener('DOMContentLoaded', function () {
    const HamburgerMenu = document.querySelector('.hamburgermenu');
    const NavigationLinks = document.querySelector('.navigationlinks'); 
  
    HamburgerMenu.addEventListener('click', function () {
      NavigationLinks.classList.toggle('show');
    });

function validateForm() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let telepon = document.getElementById('telepon').value;
        let message = document.getElementById('message').value;

        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('teleponError').innerText = '';
        document.getElementById('pesanError').innerText = '';
        let errorPesan = document.getElementsByClassName('error');

        errorPesan[0].style.color = '';
        errorPesan[0].style.fontSize = '';
        document.getElementById('form').style.paddingTop = '';

        document.getElementById('name').style = '';
        document.getElementById('telepon').style = '';
        document.getElementById('email').style = '';
        document.getElementById('message').style = '';

        const transitionDuration = 600;
        const sliderInterval = 1800;

        if (name === '') {
            document.getElementById('name-error').innerText = 'Harus isi nama!';
            document.getElementById('name').style.border = '2px solid red';
            errorPesan[0].style.color = 'red';
            errorPesan[0].style.fontSize = '12px';
            document.getElementById('form').style.paddingTop = '0px';
            return false;
        }

        // ... (validasi formulir lainnya)

        // Jika formulir valid
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telepon').value = '';
        document.getElementById('message').value = '';

        alert('Terimakasih' + name + ', pesan Anda telah tersampaikan');
        return true;
    }

    const slider = document.querySelector('.slider');
    let animationInProgress= false;

    function nextSlide() {
        if (!animationInProgress) {
            animationInProgress = true;
            setTimeout(() => {
                const firstSlide = document.querySelector('.slide');
                slider.appendChild(firstSlide);
                slider.style.transform = 'translateX(0)';
                animationInProgress = false;
            }, transitionDuration);
        }
    }

    setInterval(nextSlide, sliderInterval);
});
