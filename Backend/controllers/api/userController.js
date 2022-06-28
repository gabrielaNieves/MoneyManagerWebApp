const {User} = require('../../src/database/models');

const controller = {

    list: (req, res) => {
        User.findAll({ 
        raw: true, 
        where: {id: req.params.id}
        })
        .then(result => {
            if(result){
                let response = {
                    meta: {
                        status: 200,
                        url: `api/user/${req.params.id}`
                    },
                    data: result
                }
                res.json(response)
            }else{
                let response = {
                    meta: {
                        status: 400,
                        url: `api/user/${req.params.id}`,
                        msg: "user not found"
                    }
                }
                res.json(response)
            }
        })
    }

}
module.exports = controller