$(function(){
    $('nav a .contato').click(function(){
        $('html,body').animate({
            'scrollTop':$('#contato').offset().top
        })

        return false
    })
})