var model = require('../db/models');
var bcrypt = require('bcrypt');
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
var Sequelize = require("sequelize");

//hash
const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//index page
exports.index_get = function(req, res, next) {
    res.render('index', { title: 'GONO UNIVERSITY' });
};

//DashBoard
exports.dashBoard = function(req, res, next) {
    res.render('dashboard', { user: req.user, title: 'DashBoard' });

};

//controller index page
exports.controller = function(req, res, next) {
    res.render('../views/ResultController/ResultController', { user: req.user });
};

//create Admins page
exports.createAdmins = function(req, res, next) {

    model.dept_db.findAll().then(depts =>
        model.role_db.findAll({
            where: {
                role_id: ["Admin", "Controller"]
            }
        }).then(roles => {
            res.render('../views/ResultController/createAdmins', { roles: roles, depts: depts, user: req.user });
        })
    );
};

exports.createAdmins_submit = function(req, res, next) {
    return model.user_db.create({
        username: req.body.name,
        email: req.body.email,
        pass: generateHash(req.body.password),
        dept_id: req.body.dept,
        role_id: req.body.role,
        active: req.body.active
    }).then(user => {
        res.redirect('showAdmins');
    });
};

//show Admins
exports.showAdmins = function(req, res, next) {
    return model.user_db.findAll({
        where: {
            role_id: ["Admin", "Controller"]
        }
    }).then(users => {
        res.render('../views/ResultController/showAdmins', { users: users, user: req.user });
    });
};

//Delete Admins
/*exports.DeleteAdmins= function (req, res, next) {
    return model.user_db.destroy({
        where: {
			id: req.params.user_id
        }
    }).then(users => {
        res.redirect('/showAdmins');
    });
};*/
exports.DeleteAdmins_json = function(req, res, next) {
    return model.user_db.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};

//create dept page
exports.createDept = function(req, res, next) {
    res.render('../views/ResultController/createDept', { user: req.user });
};
exports.Dept_submit = function(req, res, next) {
    return model.dept_db.create({
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name,
        degree: req.body.degree
    }).then(dept => {
        res.redirect('/showDept');
    });
};

//show dept
exports.showDept = function(req, res, next) {
    return model.dept_db.findAll().then(depts => {
        res.render('../views/ResultController/showDept', { depts: depts, user: req.user });
    });
};

//Delete depts
exports.DeleteDept = function(req, res, next) {
    return model.dept_db.destroy({
        where: {
            dept_id: req.params.dept_id
        }
    }).then(depts => {
        res.redirect('/showDept');
    });
};

//Create Roles
exports.createRole = function(req, res, next) {
    res.render('../views/ResultController/createRole', { user: req.user });
};
exports.Role_submit = function(req, res, next) {
    return model.role_db.create({
        role_id: req.body.role_id,
        role: req.body.role
    }).then(role => {
        res.redirect('/showRole');
    });
};

//show Roles
exports.showRole = function(req, res, next) {
    return model.role_db.findAll().then(roles => {
        res.render('../views/ResultController/showRole', { roles: roles, user: req.user });
    });
};

//Delete Roles
exports.DeleteRole = function(req, res, next) {
    return model.role_db.destroy({
        where: {
            role_id: req.params.role_id
        }
    }).then(roles => {
        res.redirect('/showRole');
    });
};

//session create
exports.createSession = function(req, res, next) {
    res.render('../views/ResultController/createSession', { user: req.user });
};
exports.createSession_submit = function(req, res, next) {

    return model.session_db.create({
        session_id: req.body.session_id,
        month: req.body.month,
        year: req.body.year,
    }).then(user => {
        res.redirect('/createdSessions');
    });
};

//show session
exports.createdSessions = function(req, res, next) {
    return model.session_db.findAll({
        order: ['year']
    }).then(sessions => {
        res.render('../views/ResultController/createdSessions', { sessions: sessions, user: req.user });
    });
};

//delete session
exports.DeleteSession_json = function(req, res, next) {
    return model.session_db.destroy({
        where: {
            id: req.params.sessionId
        }
    }).then(users => {
        res.send({ msg: "Success" });
    });
};


//login page
exports.login = function(req, res, next) {
    res.render('login.pug', { title: 'Login' });
};
exports.login_submit = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: "/DashBoard",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
};

//publish result
exports.selectForPublish = function(req, res, next) {
        return model.dept_db.findAll().then(depts => {

            res.render('../views/ResultController/selectForPublish', { depts: depts, title: 'Login', user: req.user });

        });
    },
    exports.selectForPublish_dept = function(req, res, next) {
        return model.session_db.findAll({
            order: ['month', 'year'],
        }).then(sessions => {

            res.render('../views/ResultController/selectForPublish', { sessions: sessions, user: req.user });

        });
    },
    exports.selectForPublish_dept_session = function(req, res, next) {
        const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
        res.render('../views/ResultController/selectForPublish', { semesters: semesters, user: req.user });
    },
    exports.selectForPublish_dept_session_semester = function(req, res, next) {
        return model.student_db.findAll({
            where: {
                dept_id: req.params.deptID,

            },
            order: ['exam_roll'],
            include: {
                model: model.results_db,
                required: true,
                where: {
                    dept_id: req.params.deptID,
                    semester: req.params.semester,
                    session_id: req.params.sessionID,
                    result_type: "Final",
                    publish: false
                }
            }
        }).then(works => {
            // res.send(works);
            res.render('../views/ResultController/publish', { works: works, user: req.user });
            console.log(works);
        });
    },
    exports.publish = function(req, res, next) {
        return model.results_db.update({
            publish: true
        }, {
            where: {
                s_id: req.params.sID,
                dept_id: req.params.deptID,
                semester: req.params.semester,
                session_id: req.params.sessionID,
            }
        }).then(users => {
            res.send({ msg: "Success" });
        });
    },

    //Print
    exports.print = function(req, res, next) {
        return model.dept_db.findAll().then(depts => {
            model.session_db.findAll({
                order: ['year', 'month']
            }).then(sessions => {
                res.render('../views/ResultController/print', { depts: depts, sessions: sessions, user: req.user });
            });
        });
    },



    exports.printResult = function(req, res, next) {
        model.subject_db.findAll({
            where: {
                dept_id: req.body.dept,
            },
            order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],


            include: {
                model: model.results_db,
                required: true,
                where: {
                    dept_id: req.body.dept,
                    session_id: req.body.session,
                    semester: req.body.semester,
                    result_type: "Final",
                    review: true,
                    exam_type: "session"
                },
                attributes: [
                    /*[
                                        Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                                    ],*/
                    'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'publish', 'obtainedMarks'
                ],
                include: {
                    model: model.student_db,
                    required: true,
                    where: {
                        dept_id: req.body.dept,
                        semester: req.body.semester,
                    },
                }

            }

        }).then(subjects => {
            model.dept_db.findAll({
                where: {
                    dept_id: req.user.dept_id
                }
            }).then(dept => {

                res.render('../views/ResultController/printResult', { dept: dept, subjects: subjects, user: req.user });
                console.log(subjects);

            });



        });
    };

//Print Marks
exports.printMark = function(req, res, next) {
        return model.dept_db.findAll().then(depts => {

            res.render('../views/ResultController/printMarks', { depts: depts, title: 'Login', user: req.user });

        });
    },
    exports.printMark_dept = function(req, res, next) {
        return model.session_db.findAll({ order: ['month', 'year'] }).then(sessions => {

            res.render('../views/ResultController/printMarks', { sessions: sessions, user: req.user });

        });
    },
    exports.printMark_dept_session = function(req, res, next) {
        const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
        res.render('../views/ResultController/printMarks', { semesters: semesters, user: req.user });
    },

    exports.printMark_dept_session_semester = function(req, res, next) {
        return model.results_db.findAll({
            where: {
                dept_id: req.params.deptID,
                session_id: req.params.sessionID,
                semester: req.params.semester,

            },
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('sub_id')), 'sub_id']
            ],
            order: ['sub_id']

        }).then(works => {
            res.render('../views/ResultController/printMarks', { works: works, user: req.user });
            console.log(works)
        });
    };

exports.printMark_dept_session_semester_subject = function(req, res, next) {
    model.subject_db.findAll({
        where: {
            dept_id: req.params.deptID,
            sub_id: req.params.subID
        },
        order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],


        include: {
            model: model.results_db,
            required: true,
            where: {
                dept_id: req.params.deptID,
                session_id: req.params.sessionID,
                semester: req.params.semester,
                result_type: ['Internal', 'Final'],
                thirtyPercentMark: true
            },
            attributes: [
                /*[
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                ],
                [
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)'), 'marks70'
                ],*/
                [
                    Sequelize.literal('COALESCE(t1, 0) + COALESCE(t2, 0)'), 'tutorial'
                ],
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'm1', 'attendance', 'obtainedMarks', 'obtained70Marks', 'lab', 'practical', 'clinical'
            ],


        }

    }).then(subjects => {
        model.dept_db.findAll({
            where: {
                dept_id: req.params.deptID
            }
        }).then(dept => {

            res.render('../views/ResultController/print100mark', { dept: dept, subjects: subjects, user: req.user });
            console.log(subjects);

        });



    });
};


//Print Supply Improve
exports.printSupply = function(req, res, next) {
        return model.dept_db.findAll().then(depts => {
            model.session_db.findAll({
                order: ['year', 'month']
            }).then(sessions => {
                res.render('../views/ResultController/printSupplyImprove', { depts: depts, sessions: sessions, user: req.user });
            });
        });
    },



    exports.printSupplyResult = function(req, res, next) {
        model.subject_db.findAll({
            where: {
                dept_id: req.body.dept,
            },
            order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],


            include: {
                model: model.results_db,
                required: true,
                where: {
                    dept_id: req.body.dept,
                    session_id: req.body.session,
                    semester: req.body.semester,
                    result_type: "Final",
                    review: true,
                    publish: true,
                    exam_type: ["Supply", 'Improve']
                },
                attributes: [
                    [
                        Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)'), 'marks'
                    ],
                    'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'publish', 'obtainedMarks'
                ],
                include: {
                    model: model.student_db,
                    required: true,
                    where: {
                        dept_id: req.body.dept,

                    },
                }

            }

        }).then(subjects => {
            model.dept_db.findAll({
                where: {
                    dept_id: req.user.dept_id
                }
            }).then(dept => {

                res.render('../views/ResultController/printSuppImpResult', { dept: dept, subjects: subjects, user: req.user });


            });





        });
    };

//result archive
exports.resultArchive = function(req, res, next) {
        return model.dept_db.findAll().then(depts => {

            res.render('../views/ResultController/resultArchive', { depts: depts, user: req.user });

        });
    },

    exports.resultArchive_dept = function(req, res, next) {
        return model.student_db.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('batch')), 'batch']
            ],
            order: ['batch']
        }).then(batches => {

            res.render('../views/ResultController/resultArchive', { batches: batches, user: req.user });

        });
    },

    exports.resultArchive_dept_batch = function(req, res, next) {
        const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];
        res.render('../views/ResultController/resultArchive', { semesters: semesters, user: req.user });
    },

    exports.resultArchive_dept_batch_semester = function(req, res, next) {
        model.subject_db.findAll({
            where: {
                dept_id: req.params.deptID,
            },
            order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],


            include: {
                model: model.results_db,
                required: true,
                where: {
                    dept_id: req.params.deptID,
                    semester: req.params.semester,
                    result_type: "Final",
                    review: true,
                    publish: true
                },
                attributes: [
                    /*[
                        Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                    ],*/
                    'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'obtainedMarks'
                ],
                include: {
                    model: model.student_db,
                    required: true,
                    where: {
                        dept_id: req.params.deptID,
                        batch: req.params.batchID
                    },
                }
            }

        }).then(subjects => {
            model.dept_db.findAll({
                where: {
                    dept_id: req.user.dept_id
                }
            }).then(dept => {

                res.render('../views/ResultController/resultArchivePrint', { subjects: subjects, user: req.user, dept: dept });
                console.log(dept)

            });




        });
    },



    //logout
    exports.logout = function(req, res, next) {
        req.logout();
        req.session.destroy();
        res.redirect('/');
    };