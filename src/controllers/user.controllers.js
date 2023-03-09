const UserServices = require("../services/UserServices");




const createUser =  async (req, res)=>{
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
        res.status(400).json(error);
        
    }

}

const putUserId = async (req, res)=>{
    try {
        const { id } = req.params;
        const data = req.body;
        const userUpdate = await UserServices.putUser(id, data)
        res.json(userUpdate)
    } catch (error) {
        res.status(400).json(error)
        
    }
}

const getAllUsers = async (req, res)=>{
    try {
        const data = await UserServices.getAll()
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    putUserId,
    getAllUsers,
}