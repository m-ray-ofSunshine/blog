const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
  console.log(comment);
    console.log(comment);
    if (comment) {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({comment}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
