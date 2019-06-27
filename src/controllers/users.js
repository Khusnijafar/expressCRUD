const userModels = require('../models/users');
const miscHelpers = require('../helpers/helpers');

module.exports = {
    getData: (req, res) => {
        const data = req.query.category;
        const location = req.query.location;

        userModels.getData(data, location)
            .then((resultUser) => {
                const result = resultUser;
                miscHelpers.response(res, result, 200);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    postData: (req, res) => {
        const index = {
            title: req.body.title,
            writer: req.body.writer,
            location: req.body.location,
            categoryid: req.body.categoryid,
        };

        userModels.postData(index)
        .then(() => {
            miscHelpers.response1(res, index, 200);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    updateData: (req, res) => {
        const bookid = req.params.bookid;
    
        const index = {
            title: req.body.title,
            writer: req.body.writer,
            location: req.body.location,
            categoryid: req.body.categoryid,
        };

        userModels.updateData(bookid, index)
        .then(() => {
            miscHelpers.response2(res, index, 200);
        })
        .catch((error) => {
            console.log(error);
            
        });
    },
    deleteData: (req, res) => {
        const bookid = req.params.bookid;

        userModels.deleteData(bookid)
        .then((resultUser) => {
            const result = resultUser;
            miscHelpers.response3(res, result, 200);
        })
        .catch((error) => {
            console.log(error);
            
        });
    }
};