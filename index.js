const hostname = '127.0.0.1';
const port = 3000;
const addPattern = require('./addPattern');
const fetchMostUsedPattern = require('./fetchMostUsedPattern');
const generateEmail = require('./generateEmail');
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const defaultPattern = "{fn}.{ln}@{domain}";

app.get('/', (req, res) => {
    res.json({"success": "App is running!!"})
})


//Fetching the most used patterns for a domain
app.post('/patterns/max', async (req, res) => {
    try {
        let domain = req.body.domain;
        let data = await fetchMostUsedPattern(domain)
        return res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

//Adding patterns in database
app.post('/patterns/add', async (req, res) => {
    try {

        //TODO::future check validation and send 422 if error
        let fullName = req.body.fullName;
        let email = req.body.email;

        //sanitising the input
        fullName = fullName.trim().toLowerCase().replace(/\s\s+/g, ' ');
        email = email.trim();

        await addPattern(fullName, email);
        return res.send({"message":"Patterns added successfully."});
    } catch (error) {
        return res.send(error);
    }
})

//Guessing patterns for a domain
app.post('/guess/email', async (req, res) => {
    try {

        //TODO::future check validation and send 422 if error
        const fullName = req.body.fullName;
        const domain = req.body.domain;

        let pattern = defaultPattern;
        const data = await fetchMostUsedPattern(domain);
        if(data.length>0)
             pattern = data[0].pattern;
        const email =  generateEmail(fullName, domain,pattern);
        return res.send(email);

    } catch (error) {
        return res.send(error);
    }
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

