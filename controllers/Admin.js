var model = require('../db/models');
var bcrypt = require('bcrypt');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);

//hash
const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Admins landing page
exports.admin = function(req, res, next) {
    res.render('../views/Admins/admin', { user: req.user });
};

//create Users page
exports.createUsers = function(req, res, next) {

    model.dept_db.findAll().then(depts =>
        model.role_db.findAll({
            where: {
                role_id: ["Teacher", "Student", "External"]
            }
        }).then(roles => {
            res.render('../views/Admins/createUsers', { roles: roles, depts: depts, user: req.user });
        })
    );
};

exports.createUsers_submit = function(req, res, next) {
    return model.user_db.create({
        username: req.body.name,
        email: req.body.email,
        pass: generateHash(req.body.password),
        dept_id: req.user.dept_id,
        role_id: req.body.role,
        active: req.body.active
    }).then(user => {
        res.redirect('/Admin/showUsers');
    });
};

//show users
exports.showUsers = function(req, res, next) {
    return model.user_db.findAll({
        where: {
            role_id: ["Teacher", 'External', "Student"],
            dept_id: req.user.dept_id
        },
        order: [
            ['role_id', 'DESC']
        ]
    }).then(users => {
        res.render('../views/Admins/showUsers', { users: users, user: req.user });
    });
};

//Delete Admins
/*exports.DeleteAdmins= function (req, res, next) {
    return model.user_db.destroy({
        where: {
			id: req.params.user_id
        }
    }).then(users => {
        res.redirect('/showUsers');
    });
};*/
exports.DeleteUsers_json = function(req, res, next) {
    return model.user_db.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};


//Create subject
exports.createSubject = function(req, res, next) {
    res.render('../views/Admins/createSubject', { user: req.user });
};
exports.createSubject_submit = function(req, res, next) {

    return model.subject_db.create({
        sub_id: req.body.sub_id,
        sub_name: req.body.sub_name,
        sub_code: req.body.sub_code,
        dept_id: req.user.dept_id,
        credit: req.body.credit,
        total_marks: req.body.total_marks,
        semester: req.body.semester
    }).then(user => {
        res.redirect('/Admin/Subjects');
    });
};

//show subject
exports.Subjects = function(req, res, next) {
    return model.subject_db.findAll({
        where: {
            dept_id: req.user.dept_id
        },
        order: ['semester', 'sub_id']
    }).then(subjects => {
        res.render('../views/Admins/showSubjects', { subjects: subjects, user: req.user });
    });
};

//delete subject
exports.DeleteSubjects_json = function(req, res, next) {
    return model.subject_db.destroy({
        where: {
            id: req.params.subID
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};


//assign subject
exports.assignSubject = function(req, res, next) {
    model.user_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            role_id: ["Teacher", "External"]
        }
    }).then(teachers => {
        model.subject_db.findAll({
            where: {
                dept_id: req.user.dept_id
            }
        }).then(subjects => {
            model.session_db.findAll().then(sessions => {
                res.render('../views/Admins/assignSubject', { teachers: teachers, subjects: subjects, sessions: sessions, user: req.user });
            });
        });
    });
};
exports.assignSubject_submit = function(req, res, next) {

    return model.sub_assign_db.create({
        sub_id: req.body.sub_id,
        session_id: req.body.session_id,
        semester: req.body.semester,
        email: req.body.email,
        dept_id: req.user.dept_id
    }).then(user => {
        res.redirect('/Admin/assignedSubjects');
    });
};

//show assigned subjects
exports.assignedSubjects = function(req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id
        },
        order: ['semester', 'sub_id']
    }).then(subjects => {
        res.render('../views/Admins/assignedSubjects', { subjects: subjects, user: req.user });
    });
};

//delete assigned subjects
exports.DeleteAssignedSubjects_json = function(req, res, next) {
    return model.sub_assign_db.destroy({
        where: {
            assign_id: req.params.assignId
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};

//create chairman
exports.createChairman = function(req, res, next) {
    model.user_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            role_id: "Teacher"
        }
    }).then(teachers => {
        model.session_db.findAll()
            .then(sessions => {
                res.render('../views/Admins/createChairman', { teachers: teachers, sessions: sessions, user: req.user });
            });
    });
};
exports.createChairman_submit = function(req, res, next) {

    return model.chairman_db.create({
        session_id: req.body.session_id,
        semester: req.body.semester,
        email: req.body.email,
        dept_id: req.user.dept_id,
        president: true
    }).then(user => {
        res.redirect('/Admin/showChairmans');
    });
};

//show chairman
exports.showChairmans = function(req, res, next) {
    return model.chairman_db.findAll({
        where: {
            dept_id: req.user.dept_id
        }
    }).then(chairmans => {
        res.render('../views/Admins/showChairmans', { chairmans: chairmans, user: req.user });
    });
};
//delete chairmans
exports.DeleteChairmans_json = function(req, res, next) {
    return model.chairman_db.destroy({
        where: {
            id: req.params.ID
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};

//create student data
exports.studentData = function(req, res, next) {
    return model.user_db.findAll({
        where: {
            role_id: ["Student"],
            dept_id: req.user.dept_id
        }
    }).then(students => {
        res.render('../views/Admins/createStudent', { students: students, user: req.user });
    });

};
exports.studentData_submit = function(req, res, next) {

    return model.student_db.create({
        s_name: req.body.s_name,
        batch: req.body.batch,
        exam_roll: req.body.exam_roll,
        reg_no: req.body.reg_no,
        degree: req.body.degree,
        s_id: req.body.s_id,
        semester: req.body.semester,
        email: req.body.email,
        dept_id: req.user.dept_id
    }).then(user => {
        res.redirect('/Admin/showStudentData');
    });
};

//show student
exports.showStudentData = function(req, res, next) {
    return model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id
        },
        order: ['batch', 's_id']
    }).then(students => {
        res.render('../views/Admins/showStudentData', { students: students, user: req.user });
    });
};

//delete student data
exports.DeleteStudentData_json = function(req, res, next) {
    return model.student_db.destroy({
        where: {
            id: req.params.ID
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};

//semester upgrade
exports.semesterUpgrade = function(req, res, next) {
    model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id
        }
    }).then(users => {
        res.render('../views/Admins/semesterUpgrade', { user: req.user });
    });
};
exports.semesters = function(req, res, next) {
    model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semID
        }
    }).then(semesters => {
        res.render('../views/Admins/semesterUpgrade', { semesters: semesters, user: req.user });
    });
};

exports.semesterUpgrade_json = function(req, res, next) {
    return model.student_db.update({
        semester: req.params.sem
    }, {
        where: {
            id: req.params.semID
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};



//logout
exports.logout = function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};