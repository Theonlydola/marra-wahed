const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


// // Accessing the path module
// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "../build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "../build", "index.html"));
// });

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true})
const jokeSchema = new mongoose.Schema({
    joke: String,
    nsfw: Boolean,
    likes: Number,
    dislikes: Number
});

const Joke = mongoose.model("Joke", jokeSchema);

const userjokeSchema = new mongoose.Schema({
    name: String,
    joke: String,
    nsfw: Boolean
});

const UserJoke = mongoose.model("UserJoke", userjokeSchema);

const reportSchema = new mongoose.Schema({
    id: String,
    comment: String,
    Status: String,
});

const Report = mongoose.model("Report", reportSchema);

let alljokes = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

app.get("/:nsfwflag/joke", findJoke)
async function findJoke(req, res){
    let flag = req.params.nsfwflag; 
    if(!alljokes.length)
        Joke.find(function(err, foundJokes){
            if (err){
                console.log(err)
            }  else{
                console.log("HERE");
                alljokes = [...foundJokes];
                if(flag==='true'){
                    console.log("INSIDE Flag: " + flag);
                    const i = getRandomInt(alljokes.length);
                    res.send(alljokes[i]);
                }else{
                    const result = alljokes.filter(joke => joke.nsfw === false);
                    const i = getRandomInt(alljokes.length);
                    res.send(result[i]);
                }
            } 
        })  
    else{
        console.log("Flag: " + flag);
        if(flag==='true'){
            console.log("INSIDE Flag: " + flag);
            const i = getRandomInt(alljokes.length);
            res.send(alljokes[i]);
        }else{
            const result = alljokes.filter(joke => joke.nsfw === false);
            const i = getRandomInt(alljokes.length);
            res.send(result[i]);
        }
    }
        
}

app.put("/joke/:jokeId/:reaction",likeJoke)
async function likeJoke(req,res){
    let joke_id = req.params.jokeId;
    let reaction = req.params.reaction;
    console.log(joke_id);
    console.log(reaction);
    if(reaction === 'like'){
        Joke.findByIdAndUpdate(joke_id, { $inc: {likes:1}} ,function(err, updatedjoke){
            if (err) {
                console.log(err);
               } else {
                res.cookie(`like`,joke_id);
                res.send(updatedjoke);
               }
        } )
    } else{
        Joke.findByIdAndUpdate(joke_id, { $inc: {dislikes:1}} ,function(err, updatedjoke){
            if (err) {
                console.log(err);
               } else {
                res.cookie(`dislike`,joke_id);
                res.send(updatedjoke);
               }
        } )
    }
    


}

app.put("/joke/:jokeId/:reaction/unreact",unlikeJoke)
async function unlikeJoke(req,res){
    let joke_id = req.params.jokeId;
    let reaction = req.params.reaction;
    console.log(joke_id);
    console.log(reaction);
    if(reaction === 'like'){
        Joke.findByIdAndUpdate(joke_id, { $inc: {likes: -1}} ,function(err, updatedjoke){
            if (err) {
                console.log(err);
               } else {
                res.cookie(`like`,joke_id);
                res.send(updatedjoke);
               }
        } )
    } else{
        Joke.findByIdAndUpdate(joke_id, { $inc: {dislikes: -1}} ,function(err, updatedjoke){
            if (err) {
                console.log(err);
               } else {
                res.cookie(`dislike`,joke_id);
                res.send(updatedjoke);
               }
        } )
    }
    


}

app.post("/userjoke/:name/:joke/:nsfw", sendJoke)
function sendJoke(req, res){  
    let name = req.params.name;
    let joke = req.params.joke;
    let nsfw = req.params.nsfw;
    console.log(name,joke,nsfw);
    const userjoke = new UserJoke({
        name: name,
        joke: joke,
        nsfw: nsfw,
    })
    const data = userjoke.save();
    res.send(data);
}

app.post("/joke/:id/report/:comment", reportJoke)
function reportJoke(req, res){
    let id = req.params.id;  
    let comment = req.params.comment;
    console.log(comment);
    const report = new Report({
        id: id,
        comment: comment,
        Status: "Pending",
    })
    const data = report.save();
    res.send(data);
}


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});