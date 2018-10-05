const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const bodyParser = require("body-parser");
const useBodyParser = bodyParser.json({ type: "*/*" });

const User = require("./models/user");

const mongoose = require("mongoose");
mongoose.connect("mongodb://july16class:july16class@ds223763.mlab.com:23763/oct-5-app-in-a-day", {
    useNewUrlParser: true
});

const cors = require("cors");
app.use(cors());

app.post("/api/signup", useBodyParser, function(req, res) {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    const number = body.number;
    const schedule = {
        ...body.schedule,
        time: new Date()
    }

    User.findOne({ email: email }, async (error, existingUser) => {
        if(error) { res.send(error) }
        if(existingUser) {
            return res.status(422).send({
                message: "Email in use"
            });
        }

        const user = new User({
            email,
            password,
            number,
            schedule
        });

        try {
            await user.save()

            res.send({
                success: true,
                message: "Account successfully created",
                user
            });
        } catch (error) {
            console.log(error);
            res.status(422).send(error);
        }
    });
});

app.post("/api/signin", useBodyParser, function(req, res) {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    User.findOne({ email: email }, (error, existingUser) => {
        if(error) { res.send(error) }
        if(existingUser) {
            if(password === existingUser.password) {
                res.send({
                    success: true,
                    message: "User successfully signed in",
                    user: existingUser
                });
            } else {
                res.send({
                    success: true,
                    message: "Incorrect email or password"
                });
            }
        } else {
            res.send({
                success: true,
                message: "Incorrect email or password"
            });
        }
    });
});

app.put("/api/user/:id", useBodyParser, (req, res) => {
    const userID = req.params.id;
    const email = req.body.email;
    const password = req.body.password;
    const number = req.body.number;
    const schedule = req.body.schedule;
    
    User.findById(userID, async (error, user) => {
        if(error) { res.send({error}) }
    
        const newInfo = {
            ...user,
            email: email ? email : user.email,
            password: password ? password : user.password,
            number: number ? number : user.number,
            schedule: schedule ? schedule : user.schedule
        }

        for(var key in newInfo) {
            user[key] = newInfo[key] 
        }
        
        try {
            await user.save()
            res.send({
                success: true,
                message: 'User successfully updated',
                newUser: user
            });
        }
        catch(error) {
            if(error) { res.send({error}) }
        }
    });
});

import { sid, authToken } from './secrets';

app.post('/api/twilio', (req, res) => {

    const twilio = require("twilio");
    const client = new twilio(sid, authToken);
    client.messages.create({
        body: "Hey get your butt outta bed!",
        to: "+14155370849",
        from: "+18448988429"
    })
    .then((message) => {
        console.log(message.sid)
        res.send({
            success: true,
            message: message.sid
        })
    });


})

// const PORT = process.env.PORT || 5000;
// console.log('listening on port: ', PORT);
// app.listen(PORT);








app.use(express.static(__dirname + '/dist/'));

app.get("/api/message", function (reg, res) {
    res.send({ message: "hello" });
});

app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

console.log("server started");