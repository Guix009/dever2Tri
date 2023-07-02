module.exports={

    async raiz(req, res){

        const result = await console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor');

    },
    
    async produtos(req, res){

        const result = await console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor - Produtos');    

    },
    
    async Cliente(req, res){

        const result = await  console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor - Cliente');    
    
    
    },
    
    async Venda(req, res){

        const result = await  console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor - Venda');    
    },
    
    async Compra(req, res){

        const result = await console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor - Compra');    
    },
    
    async Local(req, res){

        const result = await console.log('Servidor Requisitado');

        return res.send ('Resposta do Servidor - Local');    
    
    }
 
}

