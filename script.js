$(document).ready(function(){
    let mailBox = $('.mail');
    let boxMail = $('.boxMail');
    let close = $('.fa-xmark');

    mailBox.click(function(){ boxMail.addClass('active'); });
    close.click(function(){ boxMail.removeClass('active'); });

    // Confetti creation
    const confettiContainer = document.getElementById('confetti');

    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random colors
        const colors = ['#ff4500','#ffdd00','#00bfff','#ff69b4','#32cd32'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];

        // Random position
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.width = 5 + Math.random()*10 + 'px';
        confetti.style.height = 5 + Math.random()*10 + 'px';
        confetti.style.animationDuration = 3 + Math.random()*5 + 's';

        confettiContainer.appendChild(confetti);

        // Remove after animation
        setTimeout(()=> { confetti.remove(); }, 7000);
    }

    // Generate confetti continuously
    setInterval(createConfettiPiece, 150);
});
