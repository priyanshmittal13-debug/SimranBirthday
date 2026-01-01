$(document).ready(function(){
    let mailBox = $('.mail');
    let boxMail = $('.boxMail');
    let close = $('.fa-xmark');

    // Open letter box on button click
    mailBox.click(function(){
        boxMail.addClass('active');
    });

    // Close letter box
    close.click(function(){
        boxMail.removeClass('active');
    });
});
