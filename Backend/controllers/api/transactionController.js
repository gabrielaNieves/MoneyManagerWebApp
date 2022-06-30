const {Transaction} = require('../../src/database/models');

const controller = {

    list: (req, res) => {
        Transaction.findAll({ raw: true })
        .then(result => {
            if(result){
                let response = {
                    meta: {
                        status: 200,
                        url: `api/transaction`
                    },
                    data: result
                }
                res.json(response)
            }else{
                let response = {
                    meta: {
                        status: 400,
                        url: `api/transaction`,
                        msg: "transaction not found"
                    }
                }
                res.json(response)
            }
        })
    },
    add: (req, res) => {
            Transaction.create({
                title: req.body.title,
                money: req.body.money,
                date: req.body.date, //fijarse Error de moment.js o la Date
                type: req.body.type,
                account_id: req.params.account, //Arreglar esto segun la cuenta
                category_id: req.body.category,
            })
            .then(confirm => {
                let response;
                if(confirm){
                    response ={
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: `/transaction/${req.params.account}/add` 
                        },
                        data:confirm
                    }
                }else{
                    response ={
                        meta: {
                            status: 400,
                            msg: "Data isn't created"
                        },
                        data:confirm
                    }
                }
                res.json(respuesta);
            })    
            .catch(error => res.send(error))
        }
    

}
module.exports = controller