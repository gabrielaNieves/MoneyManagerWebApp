const {User, Account} = require('../../src/database/models');
const bcrypt = require('bcryptjs');

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
    },
    auth_login: (req, res) => {
        if (req.session.userId) {
          res.status(500).send("You are logged in");
          return;
        }
        let user;
        const { email, password } = req.body;
        try {
            User.findOne({
            raw: true,
            where: {
              email: email,
            }
          })
          .then((data) => {
            return user = data
          })
          .then((user) => {
              //Check Password
              bcrypt.compare(password, user.password)
              .then((result) => {
                  if (result) {
                    req.session.userId = user.id;
                    res.status(200).send("Authed");
                  } else {
                    res.status(401).send("Wrong Credentials");
                  }
              })
          })
        } catch {
          if (!user) {
            res.status(401).send("Wrong Credentials");
            return;
          }
        }
      },

    register: (req, res) => {
        const {email} = req.body

        let emailCheck;
        try {
            User.findOne({ 
                raw: true, 
                where: {email: email}
                })
            .then((data) =>  emailCheck = data);
        } catch {
            let response = {
                meta: {
                    status: 400,
                    url: `api/user/register`,
                    msg: "Error"
                }
            }
            res.json(response);
        }
        
        if(emailCheck){
            let response = {
                meta: {
                    status: 500,
                    url: `api/user/register`,
                    msg: "Email Is already Taken"
                }
            }
            res.json(response);
        } else {
            User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            })
            .then((user) =>{
                return Account.create({
                    user_id: user.id
                })
            })
            .then((data => {
                    if(data){
                        let response = {
                            meta: {
                                status: 200,
                                url: `api/user/register`
                            },
                            msg: "Successfully account created"
                        }
                        res.json(response)
                    }else{
                        let response = {
                            meta: {
                                status: 400,
                                url: `api/user/register`,
                                msg: "Something went wrong"
                            }
                        }
                        res.json(response)
                    }
            }))

        }


    },
    auth_logout: (req, res) => {
        if (req.session.userId) {
          req.session.destroy();
          res.status(200).send("Log out");
        } else {
          res.status(401).send("You are not logged in");
        }
      }

}
module.exports = controller