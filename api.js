const User = require('./models/User')

const home = (req, res) => {
    res.send('home page')
}

const signup = async (req, res) => {
    const { firstName, lastName, password, userName } = req.body;

    try {
        const user = await new User({
            firstName,
            lastName,
            userName,
            password
        }).save()

        res.send(user);

    } catch (error) {
        res.status(404).send({ success: false, message: error.message })
    }

    // res.send(firstName, lastName, userName, password)
};

const login = async (req, res) => {
    const { userName, password } = req.body;
    try {
        const findUser = await User.findOne({ userName, password });
        if (!findUser) {
            return res.send('user not found')
        }
        res.send(' You are logged in')

    } catch (error) {
        res.status(404).send({ success: false, message: error.message })
    }
}

module.exports = ({
    home,
    signup,
    login
})