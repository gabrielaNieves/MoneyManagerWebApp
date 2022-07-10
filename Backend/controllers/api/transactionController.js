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
                date: req.body.date,
                type: req.body.type,
                account_id: 1, //then logged user.
                category_id: req.body.category,
            })
            .then(confirm => {
                let response;
                if(confirm){
                    response ={
                        meta: {
                            status: 201,
                            total: confirm.length,
                            url: `/transaction/add` 
                        },
                        data:confirm
                    }
                }else{
                    response ={
                        meta: {
                            status: 400,
                            msg: "Validation Error"
                        },
                        data:{}
                    }
                }
                res.json(response);
            })    
            .catch(error => res.send(error))
        },
    edit:  (req, res) => {
        Transaction.update({
                title: req.body.title,
                money: req.body.money,
                date: req.body.date,
                category_id: req.body.category,
        },
        {
            where: {
                id: req.params.id
            }

        })
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 201,
                        url: `/transaction/${req.params.id}/edit` 
                    },
                    data: 'Transaction had been updating'
                }
            }else{
                response ={
                    meta: {
                        status: 400,
                        error: "No Transaction Found"
                    }
                }
            }
            res.json(response);
        })    
        .catch(error => res.status(500).json({
            error: 'Server Error'
        }))

    },

    delete: (req, res) => {
       Transaction.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(confirm => {
            let response;
            if(confirm){
                response ={
                    meta: {
                        status: 200,
                        url: `/transaction/delete/${req.params.id}` 
                    },
                    data:{}
                }
            }else{
                response ={
                    meta: {
                        status: 400,
                        error: "No Transaction Found"
                    }
                }
            }
            res.json(response);
        })    
        .catch(error => res.status(500).json({
            error: 'Server Error'
        }))
    }
}
module.exports = controller