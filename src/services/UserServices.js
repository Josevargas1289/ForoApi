const Users = require("../models/user.models");


class UserServices{

   

    static async create(newUser){
        try {
            const userCretaed = await Users.create(newUser);
            return userCretaed;
        } catch (error) {
            throw error
            
        }
    }
    static async putUser(id, data){
        try {
            const userUpdate = await Users.update(data, {where: {id} })
            return userUpdate
        } catch (error) {
            throw error;
        }
    }
    

    static async getAll () {
        try {
            const users = await Users.findAll({
                attributes: [ 'id', 'username', 'email' ]
            });
            return users;
        } catch (error) {
            throw error;
        }
        
    }
}

module.exports = UserServices;