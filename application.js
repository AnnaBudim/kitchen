//для відправки форми 
$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/20Anna08@ukr.net",
        method: "POST",
        data: {
            firstname: $('#firstname').val(),
            secondname: $('#secondname').val(),
            email: $('#email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
     .done(function() {
         $('form')[0].reset();
         $('#form-result').html('<p>Thank you!</p>');
     })
     .fail(function(xhr, status, error){
         $('#form-result').html(`<p>Sorry, there is an error: ${error}</p>`);
     });
     
}

//кнопка-скролл
$(function() {
     $('body').append('<button class="btn_up"/>');
     $('.btn_up').click(function(){
         $('body').animate({'scrollTop':0}, 1000);
         $('html').animate({'scrollTop':0}, 1000);
     });
     
     $(window).scroll(function(){
         if($(window).scrollTop() > 200){
             $('.btn_up').addClass('active');
         }
         else{
             $('.btn_up').removeClass('active');
         }
     })
})