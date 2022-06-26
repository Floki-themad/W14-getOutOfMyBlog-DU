const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("newFormHandler running line 3");
    const name = document.getElementById('blog-name').value.trim();
    const description = document.getElementById('blog-desc').value.trim();
    console.log("newFormHandler running line 6");

    if (name && description) {
      console.log("newFormHandler running line 9");
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/userprofile');
      } else {
        alert('Failed to create blog post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/userprofile');
      } else {
        alert('Failed to delete blog post.');
      }
    }
  };

document.getElementById('create-new-blog').addEventListener('click', newFormHandler);
document.querySelector('.blog-list').addEventListener('click', delButtonHandler);