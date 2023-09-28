// Introduction
// In the following lab, you will be practicing making use of event listeners to trigger events in JavaScript. You will combine this knowledge with what we just learned about making JavaScript requests using the axios library.

// Part 1 - Start your lab server
// Start by installing the needed packages - ensure you are in the directory you downloaded from Frodo and run npm install

// now you should be able to run node server/index.js and get confirmation in your console that the server is running

// Part 2 - open HTML file in browser
// Next, inside the client folder you will find index.html - Open this in your browser by right clicking, choosing ‘Copy Path’, and pasting that path in your browser

// At this point you should see the HTML rendered in the browser with a basic layout

// Part 3 - the fun stuff!
// Finally, open the script.js file and follow the instructions inside to complete today’s lab - As you progress in the file, make sure to save your files and reload your browser often to see your changes

// When you complete the lab, push it to GitHub

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/say-hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/animals', (req, res) => {
    res.send(['Lions', 'Tigers', 'Bears'])
})

app.get('/repeat/:repeat', (req, res) => {
    res.send(`Success!  ${req.params.repeat} was sent as a param!`)
})

app.get('/query-test', (req, res) => {
    const { query = {} } = req;
    let queryArr = Object.entries(query);
    if (!queryArr.length) res.send('You sent an empty query!')
    if(queryArr.length === 1){
        res.send(`You sent query: ${queryArr[0][0]} with value: ${queryArr[0][1]}!`)
    } else { {
        res.send({
            message: 'You sent more than 1 query!',
            queries: query,
        })
    } 
    }
})

let foods = []

app.post('/food', (req, res) => {
    const { newFood } = req.body
    foods.push(newFood)
    res.status(200).send(foods)
})

app.listen(port, () => {
  console.log(`Lab server listening at http://localhost:${port}`)
})