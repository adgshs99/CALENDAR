async function AddCourse(req,res,next){
    let name = addSlashes(req.body.name);// a' or (drop table courses --
    let Query=`INSERT INTO courses( name) VALUES ('${name}')`;
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
    } catch (err) {
        console.log(err);
    }

    next();
}
async function GetAllCourses(req,res,next){
    let Query="SELECT * FROM courses";
    const promisePool = db_pool.promise();
    let rows=[];
    req.courses_data=[];
    try {
        [rows] = await promisePool.query(Query);
        req.courses_data=rows;
    } catch (err) {
        console.log(err);
    }

    next();
}
async function DeleteCourse(req,res,next){
    let id= parseInt(req.body.id);
    let Query=`DELETE FROM courses WHERE id='$'`

}
module.exports = {
    AddCourse,
    GetAllCourses,
}