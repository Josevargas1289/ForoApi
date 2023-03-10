const UserServices = require("../services/UserServices");




const createUser =  async (req, res, next)=>{
    try {
        const newUser = req.body;
        // validar el username
        if (newUser.username) {
            if (typeof newUser.username === 'string') {
                if (newUser.username.length > 0) {
                    
                }
            }
        }
        const user = await UserServices.create(newUser);
        res.json(user)
    } catch (error) {
        next(error)
        
    }

}

const putUserId = async (req, res)=>{
    try {
        const { id } = req.params;
        const data = req.body;
        const userUpdate = await UserServices.putUser(id, data)
        res.json(userUpdate)
    } catch (error) {
        next(error)
        
    }
}

const getAllUsers = async (req, res)=>{
    try {
        const data = await UserServices.getAll()
        res.json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    putUserId,
    getAllUsers,
}