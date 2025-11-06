function BuscarCEP(){
    let input = document.getElementById('IDCEP').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+input+'/json/')
    ajax.send(document.getElementById('ID1').innerHTML = "CARREGANDO...",
        setTimeout(function(){if(document.getElementById('ID1').innerHTML == "CARREGANDO..."){
            document.getElementById('ID1').innerHTML = "CEP NÃO ENCONTRADO."
        }},4000));
    ajax.onload = function(){
        
        //TEXTO PARA OBJETO
        let obj = JSON.parse(this.responseText)
        //VALORES
        let cep = obj.cep;
        let regiao = obj.regiao;
        let estado = obj.estado;
        let uf = obj.uf;
        let localidade = obj.localidade;
        let ddd = obj.ddd;
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        //SAIDA
        
        if (cep =="undefined" || cep == null || cep == 0){
            document.getElementById('ID1').innerHTML = "CEP NÃO ENCONTRADO"
        }else{
        document.getElementById('ID1').innerHTML = "Cep: "+cep+"<br>Região: "+regiao+
        "<br>Estado: "+estado+"("+uf+")"+
        "<br>Localidade: "+localidade+"<br>DDD: "+ddd+
        "<br>Logradouro: "+logradouro+"<br>Bairro: "+bairro
        }
    }
}