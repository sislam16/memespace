const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.js")
const postsRouter = require("./routes/posts.js").router;
const likesRouter = require("./routes/likes.js");
const commentsRouter = require("./routes/comments.js");
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/likes', likesRouter)
app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)

// app.get('/about-us', (req, res)=>{
//     console.log('LOL HI')
// })

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
