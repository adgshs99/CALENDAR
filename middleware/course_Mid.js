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
async function GetOneCourse(req,res,next){
    let id = parseInt(req.params.id);
    let Query=`SELECT * FROM courses  WHERE id='${id}' `;
    const promisePool = db_pool.promise();
    let rows=[];
    req.one_course_data=[];
    try {
        [rows] = await promisePool.query(Query);
        if(rows.length > 0) {
            req.one_course_data = rows[0];
        }
    } catch (err) {
        console.log(err);
    }

    next();
}
async function DeleteCourse(req,res,next){
    let id = parseInt(req.body.id);
    if(id > 0) {
        let Query = `DELETE FROM courses WHERE id='${id}' `;
        const promisePool = db_pool.promise();
        let rows = [];
        try {
            [rows] = await promisePool.query(Query);
        } catch (err) {
            console.log(err);
        }
    }

    next();

}
module.exports = {
    AddCourse,
    GetAllCourses,
    GetOneCourse,
    DeleteCourse,
}