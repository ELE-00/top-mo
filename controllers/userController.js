
const db = require("../db")
const bcrypt = require("bcryptjs");



//Write credentials to users db
async function createUser(data){

    if(data.password !== data.passwordConfirm){
        throw new Error("Passwords do not match");
    }

    console.log("received new user data: " + data.userName)
    const hashedPasword = await bcrypt.hash(data.password, 10);

    await db.query(`
        INSERT INTO users (username, password, full_name)
        VALUES ($1,$2,$3)`, [data.userName, hashedPasword, data.fullName])

    return {success: true};
        
}


module.exports = {createUser};