module.exports = {
    validate: (email) => {
        let key = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (key.test(email) === false) {
            return false
        }
        return true
    }
}
