
const usersQueries = {
    getAll: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users WHERE id = ?',
    getUsername: 'SELECT * FROM users WHERE username =?',
    create: 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)', 
};

module.exports = {usersQueries};

