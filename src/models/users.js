const connection = require('../configs/db');

module.exports = {
    getData: (data, location) => {
        return new Promise((resolve, reject) => {
            if (data) {
                connection.query('SELECT * FROM data INNER JOIN category ON data.categoryid = category.categoryid WHERE category.category = ?', data, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
            } else if (location) {
                connection.query('SELECT * FROM data WHERE location = ?', location, (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
            } else {
                connection.query('SELECT * FROM data', (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                });
            }

        });
    },
    postData: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO data SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateData: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE data SET ? WHERE bookid = ?', [data, id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    deleteData: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM data WHERE bookid = ?', id, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    }
};