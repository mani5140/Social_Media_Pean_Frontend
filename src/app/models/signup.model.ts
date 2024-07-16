export class SignupModel {
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  confirm_password: String;

  constructor(
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    confirm_password: String
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.confirm_password = confirm_password;
  }
}
