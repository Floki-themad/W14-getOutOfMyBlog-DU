const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            name: req.body.name,
            description: req.body.description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    }catch (err){
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id
            },
        });
        if (!blogData){
            res.status(404).json({message: 'no blog pst found with this id'});
            return;
        }
        res.status(200).json(blogData);
    }catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;