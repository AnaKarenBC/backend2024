const {request, response} = require('express');
const pool = require('../db/connection');
const userQueries = require('../models/users')

const getAllUsers = async (req = request, res = response) =>{
    let conn;

    try{
        conn = await pool.getConnection();
        const users = await conn.query(userQueries.getAll);

        res.json(users);
        return;

    }catch(error){
        res.status(500).json(error);
    }finally{
        if (conn) conn.end();
    }
}

module.exports = {
    getAllUsers,
};