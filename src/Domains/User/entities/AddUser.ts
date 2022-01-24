import addUserPayload from "../types/addUserPayload";

class AddUser {
  public username: string;
  public email: string;
  public password: string;
  public fullname: string;
  constructor(payload: addUserPayload){
    this._verifyPayload(payload);
    this.username = payload.username;
    this.email = payload.email;
    this.password = payload.password;
    this.fullname = payload.fullname;
  }

  _verifyPayload(payload: addUserPayload){
    if(!payload.username || !payload.email || !payload.password || !payload.fullname) {
      throw new Error('ADD_USER.NOT_ALLOWED_NULL_VALUE');
    }
  }
}

export default AddUser;