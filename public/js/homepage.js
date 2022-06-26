async function loadBlogPosts() {
    console.log("working");
  
    try {
        const blogData = await Blog.findAll({
        include: [{model: User}],
    });
    
    //make the data readable by looping through the array and making it readable
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
  
    res.render('homepage', {blogs});
  
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  document.getElementById('homepagebtn').addEventListener('click', loadBlogPosts);