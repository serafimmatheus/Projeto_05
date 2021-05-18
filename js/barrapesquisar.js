$(function(){


    let currentValue = 0;
    let isDrag = false;
    let precoMaximo = 70000;
    let precoAtual = 0;

    $('.ponteiro-barra').mousedown(function(){
        isDrag = true
    })

    $(document).mouseup(function(){
        isDrag = false
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag == true){
            disableTextSelection();
            let elBase = $(this);
            let mouseX = e.pageX - elBase.offset().left; // .pageX pega a posição atual do mause
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();

            
            $('.ponteiro-barra').css('left',(mouseX-13)+'px')
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-cheio').css('width',currentValue+'%')

            //TO DO: Ajustar o formato do preço
            precoAtual = (currentValue/100) * precoMaximo;
            precoAtual = formatarPreco(precoAtual);
            $('.preco_pesquisa').html('R$'+precoAtual);

        }
    })

    function formatarPreco(precoAtual){
        precoAtual = precoAtual.toFixed(2);
        preco_Arr = precoAtual.split('.');

        let novo_preco = formatarTotal(preco_Arr);

        return novo_preco;
    }

    function formatarTotal(preco_Arr){
        if(preco_Arr[0] < 1000){
            return preco_Arr[0]+','+preco_Arr[1];
        }else if(preco_Arr[0] < 10000){
            return preco_Arr[0][0]+'.'+preco_Arr[0].substr(1,preco_Arr[0].length)+','+preco_Arr[1];
        }else{
            return preco_Arr[0][0]+preco_Arr[0][1]+'.'+preco_Arr[0].substr(2,preco_Arr[0].length)+','+preco_Arr[1];
        }
    }

    function disableTextSelection(){
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    function enableTextSelection(){
        $('body').css('-webkit-user-select','auto');
        $('body').css('-moz-user-select','auto');
        $('body').css('-ms-user-select','auto');
        $('body').css('-o-user-select','auto');
        $('body').css('user-select','auto');
    }
});