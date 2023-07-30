// threads2.js

// Function to add a new post
function addPost(event) {
  event.preventDefault();

  const statusText = document.getElementById('status').value;
  if (!statusText.trim()) {
      alert('Please enter your post.');
      return;
  }

  const userPostsContainer = document.getElementById('user-posts');
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  const postContent = `
        <div class="post-left">
            <h2 class="post-title">${statusText}</h2>
            <div class="post-under">
                <h3 class="post-author">Your Name</h3>
                <h3 class="post-time">${getCurrentTime()}</h3>
            </div>
        </div>
        <div class="post-right">
            <h4 class="views">0 Views</h4>
            <h4 class="replies">0 Replies</h4>
        </div>
  `;

  postDiv.innerHTML = postContent;
  userPostsContainer.prepend(postDiv);

  // Clear the textarea after posting
  document.getElementById('status').value = '';
}

// Helper function to get current time in the format: "hh:mm am/pm M/D/YY"
function getCurrentTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: true, month: 'numeric', day: 'numeric', year: '2-digit' };
  return now.toLocaleString('en-US', options);
}

// Add event listener to the "Post" button
document.getElementById('post-button').addEventListener('click', addPost);

