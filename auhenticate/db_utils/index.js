const pool = require('./connection');

async function getStudents(){
    const students = await pool.execute(`select * from users`);
    return students
}
async function postStudents(username,password){
    const data = await pool.execute(`insert into users(username,password) value('${username}','${password}')`);
    return data
}
async function getStudentId(id){
    const data = await pool.execute(`select * from users where id=${id}`);
return data
}
module.exports={
    getStudents,
    postStudents,
    getStudentId
}