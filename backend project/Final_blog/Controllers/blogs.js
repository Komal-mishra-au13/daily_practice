const express = require('express');
const router = express.Router();
const path = require('path');
const Blog = require('../models/blog');
const { auth, authRole } = require('../auth/auth');
const User = require('../models/user');
const layout = path.join('layouts', 'index');
const layout2 = path.join('layouts', 'index2');


// --------------- ALL BLOGS of a particular user- GET--------------- //
router.get('/auth/profile/userblogs', auth, async (req, res) => {
    const user = await User.findById({ _id: req.user });
    try {
        let blogs = await Blog.find({ userId: req.user }).populate(req.user).sort({ _id: -1 });
        console.log(blogs);
        const data = {
            title: `${user.firstName}'s blogpost`,
            layout,
            blogs
        };
        // console.log(data)
        res.render('userblogs', {
            title: `${user.firstName}'s blogpost`,
            layout,
            blogs, user
        });
    } catch (error) {
        console.log(error);
        res.redirect('/auth/user/#read-blogs');
    };

});


// ---------------User WRITE BLOG page - GET----------------- //
router.get('/auth/profile/writeblog', auth, (req, res) => {
    res.render('writeblog', { layout, title: "Write blog here" });
})

// ---------------User WRITE BLOG page - POST----------------- //
router.post('/auth/profile/writeblog', auth, async (req, res) => {

    try {
        console.log(req.body);
        const blog = new Blog({
            title: req.body.title,
            description: req.body.description,
            body: req.body.body,
            genre: req.body.genre,
            userId: req.user
        });

        await blog.save();
        console.log(blog);
        const data = {
            title: `Blog saved`,
            layout,
            blog,
            msg: "Blog Posted Successfully"
        };

        res.render('writeblog', data);

    } catch (error) {
        if (error) {
            console.log("Error: ", error.message);
            const data = {
                title: `Blog rejected`,
                layout,
                blog,
                error: "Error while saving..."
            };
            res.render('writeblog', data);
        };
    };

});

// -------------- USERBLOG by ID - GET (for Logged users) ----------------- //
router.get('/auth/user/userblogs/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findById({ _id: req.params.id }).populate('userId');
    console.log(blog);
    // const user = await User.findById({ _id: req.user });
    res.render('blogs', { title: `${blog.title}`, layout:layout2, blog, logged:true });
    } catch (error) {
        if (error) console.log(error);
        throw error;
    }
});

// -------------------- USERBLOG by ID GET (for readers) ------------//
router.get('/readblogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findById({ _id: req.params.id }).populate('userId');
    console.log(blog);
    let logged = false;
    if (req.cookies.token){
        logged = true;

    }
    blog.date = blog.date.toDateString();
    console.log(blog.date);
    res.render('blogs', { layout:layout2, title: `${blog.title}`, blog, logged });
    } catch (error) {
        if (error) console.log(error);
        throw error;
    }
})

//  ------------------- EDIT BLOG - GET -------------------- //
router.get('/auth/profile/editblog/:id', auth, async (req, res) => {
    try {
        const blog = await Blog.findById({_id:req.params.id});
        res.render('editblog', { title: "Edit blog", layout, blog });
    } catch (error) {
        if (error) console.log(error.message);
        throw error;
    };
});

//  ------------------- EDIT BLOG - POST -------------------- //
router.post('/auth/profile/editblog/:id', auth, async(req, res) => {
    try {
       const eblog =  await Blog.findByIdAndUpdate({_id:req.params.id}, {
            "$set": {
                title:req.body.title,
                description: req.body.description,
                body:req.body.body,
                genre:req.body.genre
            }
        });
        await eblog.save();
    const blog = await Blog.findById({_id:req.params.id});
    await blog.save();
        res.render('blogs', {layout, title:"Edited Successfully", blog:blog, msg:"Blog Edited successfully"});
    } catch (error) {
        if (error) console.log(error.message);
        res.render('editblog', {title:"Error while saving", layout, msg:"Error while saving, please try again..."});
    };
});

// --------------------- DELETE BLOG - POST ------------------------//
router.post('/auth/profile/deleteblog/:id', auth, async(req, res) => {
    try {
        await Blog.findByIdAndDelete({_id:req.params.id});
        let blogs = await Blog.find({ userId: req.user }).populate(req.user).sort({ _id: -1 });
        res.redirect('/auth/profile/userblogs');
    } catch (error) {
        if (error) console.log(error.message);
        res.render('userblogs', {title:"Error while deleting", layout, msg:"Error while deleting, please try again..."});
    };
});

// --------------------- ADD COMMENT - POST ------------------------//
router.post('/addcomment/:id', async (req, res) => {
    const blog = await Blog.findById({ _id: req.params.id });
    try {
        
        console.log(blog);
        blog.comments.push({
            name: req.body.name,
            comment: req.body.comment
        });

        await blog.save();

        res.redirect(`/readblogs/${req.params.id}/#comment`);
    } catch (error) {
        console.log(error.message);
        res.redirect(`/readblogs/${req.params.id}/#comment`)
        // throw error;
    };

});

module.exports = router;