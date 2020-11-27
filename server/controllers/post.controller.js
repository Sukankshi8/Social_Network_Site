const Post = require("../models/Post")
const multer = require("multer");
const path = require("path");
const fs = require('fs');
   
fs.mkdir('uploads', (err) => { 
    if (err) {}
    fs.mkdir('uploads/posts', (err) => { 
      if (err) {}
  });
}); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/posts');
  },
  filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + "_" + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
exports.upload = multer({ storage: storage, fileFilter: fileFilter });

exports.createPost = (req, res) => {
  const { user, content } = req.body
  const picture = req.file.path
  const newPost = Post({ user, content, picture })
  newPost.save((err, post) => {
    if (err) {
      res.status(400).json("error")
    }
    return res.status(200).json(post)
  })
}

exports.allposts = (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) {
      res.status(400).json("error")
    }
    return res.json(posts)
  })
}
