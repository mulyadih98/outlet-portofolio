class AddedUser {
  id: string;
  email: string;
  fullname: string;
  username: string;
  date: string;
  constructor({ id, email, fullname, username, date }: { id: string, email: string, fullname: string, username: string, date: string }) {
    this._verifyPayload({ id, email, fullname, username, date });
    this.id = id;
    this.email = email;
    this.fullname = fullname;
    this.username = username;
    this.date = date;
  }

  _verifyPayload({ id, email, fullname, username, date }: { id: string, email: string, fullname: string, username: string, date: string }) {
    if (!id || !email || !fullname || !username || !date) {
      throw new Error('ADDED_USER.NOT_ALLOWED_NULL_VALUE');
    }
  }
}

export default AddedUser;