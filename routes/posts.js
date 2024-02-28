const express = require('express')
const authentifcate =require('../middleware/authentifcate')
const Post = require('../Models/post')
const router = express.Router()

router.post('/create',authentifcate,async (req,res)=>{
    try{
        const {title,content} = req.body
        const post = new Post({title,content,author:req.userId})
        await post.save()
        res.status(201).send('Post created successfully')
    }catch(error) {
        res.status(400).send(err.message)
    }
})

router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find().populate('author','username')
        res.send(posts)
    }catch (error){
        res.status(500).send('server error '+error.message)
    }
})

router.put('/:id',authentifcate, async (req,res)=>{
    try{
        const {id} = req.params
        const{title,content} = req.body
        const updatePost = await Post.findByIdAndUpdate(id,{title,content},{new:true})
        res.send(updatePost)
    }catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id',authentifcate,async (req,res)=>{
    try{
        const {id} = req.params
        await Post.findOneAndDelete(id)
        res.send('post deleted successfully')
    }catch (error) {
        res.status(400).send(err.message)
    }
})

module.exports = router