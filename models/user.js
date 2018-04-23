let connection = require('../config/db');

class User
{
  constructor(row)
  {
      this.row = row;
  }

  get id()
  {
      return this.row.id;
  }

  get username()
  {
      return this.row.username;
  }

  get email()
  {
      return this.row.email;
  }

  static create(userInfo, callback)
  {
      connection.query('INSERT INTO users SET username = ?, email = ?, password = ?, created_at = ?', [userInfo.username, userInfo.email, userInfo.password, new Date()], (err, result) => {
          if(err) throw err;
          callback(result);
      });
  }
}

module.exports = User;
