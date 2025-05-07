const express = require('express');
const router = express.Router();
module.exports = router;

const course_Mid = require("../middleware/course_Mid");

router.get("/Add",(req,res)=>{
    res.render("crs_add",{});
});
router.post("/Add", [course_Mid.AddCourse], (req, res) => {
    res.redirect("/Crs/List");
});
router.get("/Edit/:id",[course_Mid.GetOneCourse],(req,res)=>{
    res.render("crs_add",{
        data : req.one_course_data,
    });
});
router.post("/Edit", [course_Mid.AddCourse], (req, res) => {
    res.redirect("/Crs/List");
});
router.get("/List",[course_Mid.GetAllCourses],(req,res)=>{
    res.render("crs_list",{
        page_title : "רשימת הקורסים",
        courses : req.courses_data,
    });
});
router.post("/Delete",[course_Mid.DeleteCourse],(req,res)=>{
    res.redirect("/Crs/List");
})