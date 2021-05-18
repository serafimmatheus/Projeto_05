$(function(){
    
    // style="background: rgb(201, 201, 201);"
    // img-vendas-single background-img -> style="background-image: url('img/opalacomodoro1978/opalacomodoro1978_3.webp');"

    let imgShow = 3;
    let minIndex = imgShow - 1;
    let maxindex = Math.ceil($('.mini-info-venda').length/3) - 1;
    let curIndex = 0;

    clickSlider();
    initSlider();
    navigateSlider();
    function initSlider(){
        let amt = $('.mini-info-venda').length * (33.3);
        let elScroll = $('.box-info-mini');
        let elSingle = $('.mini-info-venda');
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        $('.right').click(function(){
            if(curIndex < maxindex){
                curIndex++
                let elOff = $('.mini-info-venda').eq(curIndex*3).offset().left - $('.box-info-mini').offset().left;
                $('.box-mini-galerias-venda').animate({
                    'scrollLeft':elOff+'px'
                })
            }else{
                //console.log('FIM.')
            }
        })

        $('.left').click(function(){
            if(curIndex > 0){
                curIndex--
                let elOff = $('.mini-info-venda').eq(curIndex*3).offset().left - $('.box-info-mini').offset().left;
                $('.box-mini-galerias-venda').animate({
                    'scrollLeft':elOff+'px'
                })
            }else{
                //console.log('FIM.')
            }
        })
    }

    function clickSlider(){
        $('.mini-info-venda').click(function(){
            $('.mini-info-venda').css('background','transparent')
            $(this).css('background','rgb(201, 201, 201)')

            let img = $(this).children().css('background-image')
            $('.img-vendas-single').css('background-image',img)
        })
    }

    teste();
    function teste(){
        $('nav a').click(function(){
            $('a').css('color','black')
            $(this).css('color','red')
        })
    }

});