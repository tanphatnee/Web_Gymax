class User {
    email;
    phone;
    username;
    password;

    constructor(email, username,phone,  password) {
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }

    setUserName(username) {
        this.username = username;
    }

    get username() {
        return this.username;
    }

    setPassword(password) {
        this.password = password;
    }

    get password() {
        return this.password;
    }


}