var model = require('../db/models');
var Sequelize = require("sequelize");

//Teachers landing page
exports.external = function (req, res, next) {
        res.render('../views/External/external', { user: req.user });
};

//upload result select 
exports.uploadResult_session_semester_subject = function (req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/External/resultUpload', { works: works, user: req.user });
    });
};

//upload result data
exports.uploadResult_student = function (req, res, next) {
    return model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semesterID
        },
        order:['exam_roll']
    }).then(students => {
        res.render('../views/External/resultUpload', { students: students, user: req.user });
    });
};
exports.uploadResult_student_submit = function (req, res, next) {
    return model.results_db.create({
        sub_id: req.params.subjectID,
        session_id: req.params.sessionID,
        semester:req.params.semesterID,
        s_id: req.body.sid,
        exam_type: "session",
        dept_id: req.user.dept_id,
        teacher_name: req.user.username,
        teacher_email: req.user.email,
        role_id: req.user.role_id,
        result_type: "External",
        exam_roll:req.body.exam_roll,
        review: false,
        publish: false,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6:req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11:req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14:req.body.q14,
        q15: req.body.q15,
        t1: 0,
        t2: 0,
        m1: 0,
        lab:0,
        viva: 0,
        attendance: 0,
        obtainedMarks: 0,
        obtained70Marks: 0,
        thirtyPercentMark: false,
        practical: 0,
        clinical:0,
        result:req.body.result
    }).then(students => {
        res.send({ msg: "Success" });
        
    });
};



//show result to external to review and edit
exports.reviewResult70 = function (req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/External/reviewResult70', { works: works, user: req.user });
    });
};
exports.selectForEdit = function (req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semesterID,
            session_id: req.params.sessionID,
            sub_id: req.params.subjectID,
            thirtyPercentMark: false,
            result_id: req.params.id,
            result_type: "External",
            
            
        },
        order:['exam_roll'],
    }).then(students => {
        res.render('../views/External/edit70', { students: students, user: req.user });
    });
};
exports.reviewResultData70edit = function (req, res, next) {
    return model.results_db.update({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6:req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11:req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14:req.body.q14,
        q15: req.body.q15,
        
        result: req.body.result,
       
    },{
        where: {
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            exam_type: "session",
            result_type: "External",
            review: false,
            publish: false,
            result_id:req.params.id
        },
    }).then(students => {
        res.send({ msg: "Success" });
        
    });
};

exports.reviewResultData70 = function (req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            teacher_name: req.user.username,
            teacher_email: req.user.email,
            role_id: req.user.role_id,
            result_type:"External",
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            review: false,
            publish: false,
            
        },
         order:['exam_roll'],
        include: { 
            model: model.student_db,
            required: true,   
        }
    }).then(results => {
        console.log(results);
        res.render('../views/External/reviewResult70', { results: results, user: req.user });
    });
};
/*
exports.reviewResultData = function (req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            teacher_name: req.user.username,
            teacher_email: req.user.email,
            role_id:req.user.role_id,
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID
        },
        include: {
           
            model: model.student_db,
            required: true,
            
        }
    }).then(results => {
        console.log(results);
        res.render('../views/External/reviewResult', { results: results, user: req.user });
    });
};

exports.deleteResult = function (req, res, next) {
    return model.results_db.destroy({
        where: {
            result_id: req.params.resultID,
        }
    }).then(works => {
       res.send({ msg: "Success" });
    });
};
*/


/*
//supply & improve
exports.supply = function (req, res, next) {
    return model.subject_db.findAll({
       where: {
            dept_id: req.user.dept_id
        },
    }).then(subjects => {
        res.render('../views/External/Supply', { subjects: subjects, user: req.user});
    });
};
exports.input_supply = function (req, res, next) {
    return model.results_db.findAll({
       where: {
            dept_id: req.user.dept_id,
            sub_id: req.query.sub_id,
            role_id: req.user.role_id,
            result_type: "UsedExternal",
            
        },
        include: {
            model: model.student_db,
            required: true,
            where: {
            exam_roll: req.query.exam_roll 
            },
        },
    }).then(works => {
        model.session_db.findAll().then(sessions => {
        res.render('../views/External/supplySubmit', { works: works,sessions: sessions, user: req.user });
        
    });
    });
};

exports.submitSupply = function (req, res, next) {
    return model.results_db.update({
        session_id: req.body.session_id,
        exam_type: req.body.exam_type,
        review: false,
        publish: false,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6:req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11:req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14:req.body.q14,
        q15: req.body.q15,
        t1: req.body.t1,
        t2: req.body.t2,
        m1:req.body.m1,
        attendance:req.body.attendance,
        lab: req.body.lab,
        viva: req.body.viva,
        result: req.body.result,
        teacher_name: req.user.username,
        teacher_email: req.user.email,
        role_id: req.user.role_id,
        result_type: "External",
    }, {
  where: {
    result_id: req.body.result_id,
  }
}).then(students => {
        res.send({ msg: "Success" });
        
    });
};
*/



//logout
exports.logout = function (req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};

