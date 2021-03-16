var model = require('../db/models');
var Sequelize = require("sequelize");
const { Op } = require("sequelize");

//Teachers landing page
exports.teacher = function(req, res, next) {
    return model.chairman_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/teacher', { works: works, user: req.user });
    });
};

//upload 30% result select 
exports.uploadResult_session_semester_subject30 = function(req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/mark30resultUpload', { works: works, user: req.user });
    });
};
//upload 70% result select 
exports.uploadResult_session_semester_subject70 = function(req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/mark70resultUpload', { works: works, user: req.user });
    });
};


//upload 30 result data
exports.uploadResult_student30 = function(req, res, next) {
    return model.student_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semesterID

        },
        order: ['exam_roll'],
    }).then(students => {
        res.render('../views/Teachers/mark30resultUpload', { students: students, user: req.user });
    });
};
exports.uploadResult_student_submit30 = function(req, res, next) {
    return model.results_db.create({
        sub_id: req.params.subjectID,
        session_id: req.params.sessionID,
        semester: req.params.semesterID,
        s_id: req.body.sid,
        exam_type: "session",
        dept_id: req.user.dept_id,
        teacher_name: req.user.username,
        teacher_email: req.user.email,
        role_id: req.user.role_id,
        exam_roll: req.body.roll,
        result_type: "Internal",
        review: false,
        publish: false,
        thirtyPercentMark: false,
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
        q10: 0,
        q11: 0,
        q12: 0,
        q13: 0,
        q14: 0,
        q15: 0,
        t1: req.body.t1,
        t2: req.body.t2,
        m1: req.body.m1,
        lab: 0,
        viva: 0,
        practical: 0,
        clinical: 0,
        obtainedMarks: 0,
        obtained70Marks: 0,
        attendance: req.body.attendance,

    }).then(students => {
        res.send({ msg: "Success" });

    });
};

//selection for reviewing 30 result
exports.reviewResult30 = function(req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        },
        order: ['sub_id']
    }).then(works => {
        res.render('../views/Teachers/reviewResult30', { works: works, user: req.user });
    });
};

//Delete result data for correction 30
exports.reviewResultData30 = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            teacher_name: req.user.username,
            teacher_email: req.user.email,
            role_id: req.user.role_id,
            result_type: "Internal",
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            thirtyPercentMark: false,
        },
        include: {

            model: model.student_db,
            required: true,

        }
    }).then(results => {
        console.log(results);
        res.render('../views/Teachers/reviewResult30', { results: results, user: req.user });
    });
};
exports.deleteResult30 = function(req, res, next) {
    return model.results_db.destroy({
        where: {
            result_id: req.params.resultID,
        }
    }).then(works => {
        res.send({ msg: "Success" });
    });
};

//submit 30% to controller
exports.updateResult30 = function(req, res, next) {
    return model.results_db.update({
        thirtyPercentMark: true,
    }, {
        where: {
            result_id: req.params.resultID,
        }
    }).then(works => {
        res.send({ msg: "Success" });
    });
};


//upload 70 result data
exports.uploadResult_student70 = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semesterID,
            session_id: req.params.sessionID,
            sub_id: req.params.subjectID,
            thirtyPercentMark: true,

        },
        order: ['exam_roll'],
    }).then(students => {
        res.render('../views/Teachers/mark70resultUpload', { students: students, user: req.user });
    });
};
exports.uploadResult_student_submit70 = function(req, res, next) {
    return model.results_db.update({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        lab: req.body.lab,
        viva: req.body.viva,
        result: req.body.result,
        practical: req.body.practical,
        clinical: req.body.clinical
    }, {
        where: {
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            exam_type: "session",
            result_type: "Internal",
            review: false,
            publish: false,
            thirtyPercentMark: true,
            result_id: req.params.id
        },
    }).then(students => {
        res.send({ msg: "Success" });

    });
};

//selection for reviewing 70 result
exports.reviewResult70 = function(req, res, next) {
    return model.sub_assign_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        },
        order: ['sub_id']
    }).then(works => {
        res.render('../views/Teachers/reviewResult70', { works: works, user: req.user });
    });
};
exports.selectForEdit = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            semester: req.params.semesterID,
            session_id: req.params.sessionID,
            sub_id: req.params.subjectID,
            thirtyPercentMark: true,
            result_id: req.params.id

        },
        order: ['exam_roll'],
    }).then(students => {
        res.render('../views/Teachers/edit70', { students: students, user: req.user });
    });
};
exports.reviewResultData70edit = function(req, res, next) {
    return model.results_db.update({
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        lab: req.body.lab,
        viva: req.body.viva,
        result: req.body.result,
        practical: req.body.practical,
        clinical: req.body.clinical
    }, {
        where: {
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            exam_type: "session",
            result_type: "Internal",
            review: false,
            publish: false,
            thirtyPercentMark: true,
            result_id: req.params.id
        },
    }).then(students => {
        res.send({ msg: "Success" });

    });
};

exports.reviewResultData70 = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            teacher_name: req.user.username,
            teacher_email: req.user.email,
            role_id: req.user.role_id,
            result_type: "Internal",
            sub_id: req.params.subjectID,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            review: false,
            publish: false,
            thirtyPercentMark: true,
        },
        order: ['exam_roll'],
        include: {
            model: model.student_db,
            required: true,
        }
    }).then(results => {
        console.log(results);
        res.render('../views/Teachers/reviewResult70', { results: results, user: req.user });
    });
};
/*
exports.deleteResult70 = function (req, res, next) {
    return model.results_db.destroy({
        where: {
            result_id: req.params.resultID,
        }
    }).then(works => {
       res.send({ msg: "Success" });
    });
};
*/


//supply & improve
exports.supply = function(req, res, next) {
    return model.subject_db.findAll({
        where: {
            dept_id: req.user.dept_id
        },
    }).then(subjects => {
        res.render('../views/Teachers/Supply', { subjects: subjects, user: req.user });
    });
};
exports.input_supply = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            sub_id: req.query.sub_id,
            role_id: req.user.role_id,
            result_type: "UsedInternal",
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
            res.render('../views/Teachers/supplySubmit', { works: works, sessions: sessions, user: req.user });
            console.log(works);
        });
    });
};

exports.submitSupply = function(req, res, next) {
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
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        lab: req.body.lab,
        viva: req.body.viva,
        obtainedMarks: req.body.obtainedMarks,
        obtained70Marks: req.body.obtained70Marks,
        practical: req.body.practical,
        clinical: req.body.clinical,
        result: req.body.result,
        teacher_name: req.user.username,
        teacher_email: req.user.email,
        role_id: req.user.role_id,
        result_type: "Internal",

    }, {
        where: {
            result_id: req.body.result_id,
        }
    }).then(students => {
        res.send({ msg: "Success" });

    });
};

//chairman
exports.chairman = function(req, res, next) {
    return model.chairman_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/chairman', { works: works, user: req.user });
    });
};

exports.review = function(req, res, next) {
    model.subject_db.findAll({
        where: {
            dept_id: req.user.dept_id,
        },
        order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],

        include: {
            model: model.results_db,
            required: true,

            where: {
                dept_id: req.user.dept_id,
                session_id: req.params.sessionID,
                semester: req.params.semester,
                result_type: "Final",
                exam_type: "session"
            },

            attributes: [
                /*[
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                ],*/
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'obtainedMarks'
            ],
        }

    }).then(subjects => {
        model.dept_db.findAll({
            where: {
                dept_id: req.user.dept_id,

            }
        }).then(dept => {
            res.render('../views/Teachers/review', { dept: dept, subjects: subjects, user: req.user });
            console.log(subjects);

            //res.send(subjects)
        });

    });
};

exports.reviewSupplyImprove = function(req, res, next) {
    model.subject_db.findAll({
        where: {
            dept_id: req.user.dept_id,
        },
        order: ['sub_id', [model.results_db, 'exam_roll', 'asc']],

        include: {
            model: model.results_db,
            required: true,

            where: {
                dept_id: req.user.dept_id,
                session_id: req.params.sessionID,
                semester: req.params.semester,
                result_type: "Final",
                exam_type: ['Supply', 'Improve']
            },

            attributes: [
                /*[
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                ],*/
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result', 'sub_id', 'exam_roll', 'semester', 'obtainedMarks'
            ],
        }

    }).then(subjects => {
        model.dept_db.findAll({
            where: {
                dept_id: req.user.dept_id,

            }
        }).then(dept => {
            res.render('../views/Teachers/review', { dept: dept, subjects: subjects, user: req.user });
            console.log(subjects);

            //res.send(subjects)
        });



    });
};

//combine
exports.combine = function(req, res, next) {
    return model.chairman_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/combine', { works: works, user: req.user });
    });
};

exports.combineSubjectResult = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('sub_id')), 'sub_id']
        ],
        order: ['sub_id']

    }).then(works => {
        res.render('../views/Teachers/combineSubjectResult', { works: works, user: req.user });
        console.log(works)
    });
};
//with Ex
exports.uploadCombinedResult = function(req, res, next) {
    model.results_db.findAll({
        include: {
            model: model.subject_db,
            required: true,
            where: {
                dept_id: req.user.dept_id,
            },
        },
        attributes: [
            'sub_id', 'exam_roll', 's_id', 'session_id', 'semester', 'exam_type', [Sequelize.fn('sum', Sequelize.col('q1')), 'q1'],
            [Sequelize.fn('sum', Sequelize.col('q2')), 'q2'],
            [Sequelize.fn('sum', Sequelize.col('q3')), 'q3'],
            [Sequelize.fn('sum', Sequelize.col('q4')), 'q4'],
            [Sequelize.fn('sum', Sequelize.col('q5')), 'q5'],
            [Sequelize.fn('sum', Sequelize.col('q6')), 'q6'],
            [Sequelize.fn('sum', Sequelize.col('q7')), 'q7'],
            [Sequelize.fn('sum', Sequelize.col('q8')), 'q8'],
            [Sequelize.fn('sum', Sequelize.col('q9')), 'q9'],
            [Sequelize.fn('sum', Sequelize.col('q10')), 'q10'],
            [Sequelize.fn('sum', Sequelize.col('q11')), 'q11'],
            [Sequelize.fn('sum', Sequelize.col('q12')), 'q12'],
            [Sequelize.fn('sum', Sequelize.col('q13')), 'q13'],
            [Sequelize.fn('sum', Sequelize.col('q14')), 'q14'],
            [Sequelize.fn('sum', Sequelize.col('q15')), 'q15'],
            [Sequelize.fn('sum', Sequelize.col('lab')), 'lab'],
            [Sequelize.fn('sum', Sequelize.col('viva')), 'viva'],
            [Sequelize.fn('sum', Sequelize.col('t1')), 't1'],
            [Sequelize.fn('sum', Sequelize.col('t2')), 't2'],
            [Sequelize.fn('sum', Sequelize.col('m1')), 'm1'],
            [Sequelize.fn('sum', Sequelize.col('attendance')), 'attendance'],
            [Sequelize.fn('sum', Sequelize.col('practical')), 'practical'],
            [Sequelize.fn('sum', Sequelize.col('clinical')), 'clinical'],
        ],
        where: {
            dept_id: req.user.dept_id,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            sub_id: req.params.subID,
            result_type: ['Internal', 'External']


        },
        order: [
            ["exam_roll", "ASC"]
        ],
        group: ['results_db.sub_id', "subject_db.id", "subject_db.sub_id", 'results_db.exam_roll', 'results_db.s_id', 'results_db.session_id', 'results_db.semester', 'results_db.exam_type'],

    }).then(subjects => {

        res.render('../views/Teachers/combineResult', { subjects: subjects, user: req.user });

        //res.send(subjects)

    });

};
//without Ex
exports.uploadCombinedResultwithoutEx = function(req, res, next) {
    model.results_db.findAll({
        include: {
            model: model.subject_db,
            required: true,
            where: {
                dept_id: req.user.dept_id,
            },
        },
        attributes: [
            'sub_id', 'exam_roll', 's_id', 'session_id', 'semester', 'exam_type', [Sequelize.fn('sum', Sequelize.col('q1')), 'q1'],
            [Sequelize.fn('sum', Sequelize.col('q2')), 'q2'],
            [Sequelize.fn('sum', Sequelize.col('q3')), 'q3'],
            [Sequelize.fn('sum', Sequelize.col('q4')), 'q4'],
            [Sequelize.fn('sum', Sequelize.col('q5')), 'q5'],
            [Sequelize.fn('sum', Sequelize.col('q6')), 'q6'],
            [Sequelize.fn('sum', Sequelize.col('q7')), 'q7'],
            [Sequelize.fn('sum', Sequelize.col('q8')), 'q8'],
            [Sequelize.fn('sum', Sequelize.col('q9')), 'q9'],
            [Sequelize.fn('sum', Sequelize.col('q10')), 'q10'],
            [Sequelize.fn('sum', Sequelize.col('q11')), 'q11'],
            [Sequelize.fn('sum', Sequelize.col('q12')), 'q12'],
            [Sequelize.fn('sum', Sequelize.col('q13')), 'q13'],
            [Sequelize.fn('sum', Sequelize.col('q14')), 'q14'],
            [Sequelize.fn('sum', Sequelize.col('q15')), 'q15'],
            [Sequelize.fn('sum', Sequelize.col('lab')), 'lab'],
            [Sequelize.fn('sum', Sequelize.col('viva')), 'viva'],
            [Sequelize.fn('sum', Sequelize.col('t1')), 't1'],
            [Sequelize.fn('sum', Sequelize.col('t2')), 't2'],
            [Sequelize.fn('sum', Sequelize.col('m1')), 'm1'],
            [Sequelize.fn('sum', Sequelize.col('attendance')), 'attendance'],
            [Sequelize.fn('sum', Sequelize.col('practical')), 'practical'],
            [Sequelize.fn('sum', Sequelize.col('clinical')), 'clinical'],
        ],
        where: {
            dept_id: req.user.dept_id,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            sub_id: req.params.subID,
            result_type: ['Internal']


        },
        order: [
            ["exam_roll", "ASC"]
        ],
        group: ['results_db.sub_id', "subject_db.id", "subject_db.sub_id", 'results_db.exam_roll', 'results_db.s_id', 'results_db.session_id', 'results_db.semester', 'results_db.exam_type'],

    }).then(subjects => {

        res.render('../views/Teachers/combineResultWithoutEx', { subjects: subjects, user: req.user });

        //res.send(subjects)

    });

};




exports.uploadCombinedResult_submit = function(req, res, next) {
    return model.results_db.create({
        sub_id: req.params.subID,
        session_id: req.params.sessionID,
        semester: req.params.semesterID,
        s_id: req.body.sid,
        dept_id: req.user.dept_id,
        teacher_name: req.user.username,
        teacher_email: req.user.email,
        role_id: req.user.role_id,
        exam_roll: req.body.roll,
        exam_type: req.body.exam_type,
        result_type: "Final",
        thirtyPercentMark: 'true',
        review: true,
        publish: false,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,
        q13: req.body.q13,
        q14: req.body.q14,
        q15: req.body.q15,
        t1: req.body.t1,
        t2: req.body.t2,
        m1: req.body.m1,
        lab: req.body.lab,
        viva: req.body.viva,
        practical: req.body.practical,
        clinical: req.body.clinical,
        obtainedMarks: req.body.obtainedMarks,
        obtained70Marks: req.body.obtained70Marks,
        attendance: req.body.attendance,
        result: req.body.result
    }).then(students => {
        model.results_db.update({
            result_type: 'UsedInternal',
        }, {
            where: {
                result_type: ['Internal'],
                s_id: req.body.sid,
                sub_id: req.params.subID,
                session_id: req.params.sessionID,
                semester: req.params.semesterID,
            }
        }).then(students => {
            model.results_db.update({
                result_type: 'UsedExternal',
            }, {
                where: {
                    result_type: ['External'],
                    s_id: req.body.sid,
                    sub_id: req.params.subID,
                    session_id: req.params.sessionID,
                    semester: req.params.semesterID,
                }
            }).then(students => {
                model.results_db.destroy({
                    where: {
                        sub_id: req.params.subID,
                        semester: req.params.semesterID,
                        s_id: req.body.sid,
                        dept_id: req.user.dept_id,
                        session_id: {
                            [Op.ne]: req.params.sessionID,
                        }
                    }
                }).then(users => {
                    res.send({ msg: "Success" });
                });

            });

        });
    });
};

/*
exports.uploadCombinedResult = function (req, res, next) {
    model.subject_db.findAll({
         where: {
            dept_id: req.user.dept_id,
            },
            include: { 
                model: model.results_db,
                required: true,
            where: {
                dept_id: req.user.dept_id,
                session_id: req.params.sessionID,
                semester: req.params.semesterID,
                result_type:["Internal","External"],
                },
            //group:['sub_id'],
            attributes: [
                [
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)'), 'marks'
                ],
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result','sub_id','exam_roll' 
                ],
            }

     }).then(internalResults => {
         model.subject_db.findAll({
         where: {
            dept_id: req.user.dept_id,
            },
            include: { 
                model: model.results_db,
                required: true,
            where: {
                dept_id: req.user.dept_id,
                session_id: req.params.sessionID,
                semester: req.params.semesterID,
                result_type:"External"
                },
            //group:['sub_id'],
            attributes: [
                [
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)'), 'marks'
                ],
                'session_id', 's_id', 'exam_type', 'teacher_name', 'result','sub_id','exam_roll' 
                ],
            }

     }).then(ExternalResults => {
         
       //res.render('../views/Teachers/review', { internalResults: internalResults,ExternalResults:ExternalResults });
         
        res.send(internalResults)
        
    });
       
        
    });
};
*/
//combine review
exports.combineReview = function(req, res, next) {
    return model.chairman_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            email: req.user.email
        }
    }).then(works => {
        res.render('../views/Teachers/combineReview', { works: works, user: req.user });
    });
};


exports.combineReviewSubject = function(req, res, next) {
    return model.results_db.findAll({
        where: {
            dept_id: req.user.dept_id,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('sub_id')), 'sub_id']
        ],
        order: ['sub_id']

    }).then(works => {
        res.render('../views/Teachers/combineReviewSubject', { works: works, user: req.user });
        console.log(works)
    });
};

exports.combinedView = function(req, res, next) {
    model.results_db.findAll({

        where: {
            dept_id: req.user.dept_id,
            session_id: req.params.sessionID,
            semester: req.params.semesterID,
            sub_id: req.params.subID,
            result_type: ["Internal", "External"],
        },
        order: ['exam_roll'],
        attributes: {
            include: [
                [
                    Sequelize.literal('COALESCE(q1, 0) + COALESCE(q2, 0)+ COALESCE(q3, 0)+ COALESCE(q4, 0)+ COALESCE(q5, 0)+ COALESCE(q6, 0)+ COALESCE(q7, 0)+ COALESCE(q8, 0)+ COALESCE(q9, 0)+ COALESCE(q10, 0)+ COALESCE(q11, 0)+ COALESCE(q12, 0)+ COALESCE(q13, 0)+ COALESCE(q14, 0)+ COALESCE(q15, 0)+ COALESCE(t1, 0)+ COALESCE(t2, 0)+ COALESCE(m1, 0)+ COALESCE(attendance, 0)+ COALESCE(viva, 0)+ COALESCE(lab, 0)+ COALESCE(practical, 0)+ COALESCE(clinical, 0)'), 'marks'
                ]
            ],
        },
        include: {
            model: model.subject_db,
            required: true,
            where: {
                dept_id: req.user.dept_id,
            },

        }

    }).then(internalResults => {

        res.render('../views/Teachers/combinedView', { internalResults: internalResults, user: req.user });
        console.log(internalResults)
            //res.send(internalResults);

    });

};




//logout
exports.logout = function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
};