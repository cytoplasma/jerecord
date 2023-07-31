const express = require("express");
const cors = require("cors");
const { default:axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin:true }));

app.post("/authenticate", async (req,res) => {
    const { username } = req.body;
    // FUNCTION: checking if user exists, if not creates new user
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "add14266-da07-44f0-90cb-91af32660910" }}
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);