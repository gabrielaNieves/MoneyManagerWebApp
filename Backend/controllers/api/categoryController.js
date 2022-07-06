const {Category} = require('../../src/database/models');


const category = (req, res) => {
    Category.findAll({
        where: {
            typeId: req.params.id
        }
    })
    .then((result => {
        if(result){
            let response = {
                meta: {
                    status: 200,
                    url: `api/category/${req.params.id}`
                },
                data: result
            }
            res.json(response)
        }else{
            let response = {
                meta: {
                    status: 400,
                    url: `api/category`,
                    msg: "not Category Found"
                }
            }
            res.json(response)
        }
    }))
}

module.exports = category