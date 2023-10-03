const User = require("../model/userSchema")
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

module.exports.registerTask = async (req, res) => {
    const { Name, Email, Contact, Password, cPassword } = req.body;

    if (!Name || !Email || !Contact || !Password || !cPassword) {
        return res.json({
            status: "FAILED",
            message: "All fields are required!"
        })
    }

    try {

        const userExist = await User.findOne({ Email: Email });
        if (userExist) {
            res.json({
                status: "FAILED",
                message: "This email is already registered!!"
            })
        }
        else if (Password != cPassword) {
            res.json({
                status: "FAILED",
                message: "Not successful!"
            })
        }
        else {

            const data = new User(req.body)
            const result = await data.save()

            if (!result) {
                res.json({
                    status: "FAILED",
                    message: "Not successful!"
                })
            }
            else {
                res.json({
                    status: "SUCCESS",
                    message: "User registered successfully!"
                })
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error' });
    }
}

module.exports.loginTask = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        if (!Email || !Password) {
            return res.json({
                status: "FAILED",
                message: 'Please Enter All Fields!'
            })
        }

        const validUser = await User.findOne({ Email: Email });
        if (validUser) {
            if (Password === validUser.Password) {
                res.json({
                    status: "SUCCESS",
                    message: "Login successful!!"
                });
            } else {
                return res.json({
                    status: "FAILED",
                    message: "Invalid Credentials!!"
                });
            }
        }
        else {
            return res.json({
                status: "FAILED",
                message: "Invalid Credentials!!"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

}
