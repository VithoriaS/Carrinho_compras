
const items = [
    {
        id: 0,
        nome: 'Borracha',
        img: 'img/borracha_banana.png',
        quantidade: 0,
        valor: 15
    },

    {
        id: 1,
        nome: 'Lapis',
        img: 'img/borracha_banana.png',
        quantidade: 0,
        valor: 14
    },

    {
        id: 2,
        nome: 'Caneta',
        img: 'img/borracha_banana.png',
        quantidade: 0,
        valor: 12
    }

]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        
        containerProdutos.innerHTML += `
         
        <div class = "produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <p>R$`+val.valor+`</p>
            <button key="`+val.id+`" href="#">Adicionar ao carrinho</button>
        </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";

    items.map((val)=>{
        if(val.quantidade > 0){
            let quant = val.quantidade
            let valor1 = val.valor
            let total_parcial = quant * valor1

            containerCarrinho.innerHTML +=`
            <div class= "info-single-checkout">
            <p style ="float:left;">Produto: `+val.nome+`</p><br>
            <p style ="float:right;">Valor: R$ `+total_parcial+`</p> <br>
            <p style ="float:left;"> Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>
            </div>
            <hr>
            `
        }
    })
}

var links = document.getElementsByTagName('a');

    for(var i = 0; i < links.length;i++){
        links[i].addEventListener("click",function(){
             let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
    })
}



