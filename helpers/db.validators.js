const Role = require('../models/role');
const User = require('../models/user');

const isValiteRole = (async(role = '') => {
    const roleExist = await Role.findOne({ role });
    if (!roleExist) {
        throw new Error(`This role ${role} isn't defined in DB`);
    }
});

const isValiteMail = (async(mail = '') => {
    const mailExist = await User.findOne({ mail });
    if (mailExist) {
        throw new Error(`This mail ${mail} already exists`);
    }
});



const idExists = async(id) => {
    const userExist = await User.findById(id);
    if (!userExist) {
        throw new Error(`This user with id: ${id} no exists`);
    }
};

module.exports = { isValiteRole, isValiteMail, idExists };