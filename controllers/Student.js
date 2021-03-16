var model = require('../db/models');
var Sequelize = require("sequelize");
//Students landing page
exports.student = function (req, res, next) {
    res.render('../views/Students/student',{user:req.user});
};

//Show gpa
exports.gpa = function (req, res, next) {
     return model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email:req.user.email
    }
}).then(works => {
       const semester=['1','2','3','4','5','6','7','8']
        res.render('../views/Students/gpa', {user:req.user,works:works,semester:semester });
    });
};

exports.gpaShown = function (req, res, next) {
        model.subject_db.findAll({
         where: {
            dept_id: req.user.dept_id,
        },


            include: { 
                model: model.results_db,
                required: true,
            where: {
                dept_id: req.user.dept_id,
                semester: req.params.semester,
                result_type: "Final",
                review: true,
                publish: true,
                s_id:req.params.sID
                },
            //group:['sub_id'],
            attributes: [
                /*[
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)'), 'marks'
                ],*/
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result','sub_id','exam_roll','obtainedMarks' 
                ],
            }

     }).then(subjects => {
         
       res.render('../views/Students/gpaShown', { subjects: subjects , user: req.user});
         console.log(subjects);
         console.log(subjects[1].results_dbs.length);
        //res.send(subjects)
        
    });
};

//cgpa

exports.cgpa = function (req, res, next) {
        model.subject_db.findAll({
         where: {
            dept_id: req.user.dept_id,
        },


            include: { 
                model: model.results_db,
                required: true,
            where: {
                dept_id: req.user.dept_id,
                result_type: "Final",
                review: true,
                publish: true,
                
                },
            //group:['sub_id'],
            attributes: [
                /*[
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)'), 'marks'
                ],*/
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result','sub_id','exam_roll','obtainedMarks' 
                ],
            
            
                include: {
                    model: model.student_db,
                    required: true,
                    where: {
                        email:req.user.email
                    }
                }
            }

     }).then(subjects => {
         
       res.render('../views/Students/cgpa', { subjects: subjects , user: req.user});
         console.log(subjects);
         console.log(subjects[1].results_dbs.length);
         //res.send(subjects);
        
    });
};




//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

