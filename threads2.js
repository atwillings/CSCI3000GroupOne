// Function to handle form submission and display the most recent post
function handleFormSubmit(event) {
  event.preventDefault();

  const statusText = document.getElementById("status").value;

  if (statusText.trim() !== "") {
    const currentDate = new Date().toLocaleString();
    const post = { text: statusText, timestamp: currentDate };

    addPostToLocalStorage(post);
    displayRecentPosts();
  }

  document.getElementById("postForm").reset();
}

// Function to add a post to local storage
function addPostToLocalStorage(post) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.unshift(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Function to display the most recent posts
function displayRecentPosts() {
  const postsContainer = document.getElementById("postsContainer");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  let postsHTML = "";
  posts.forEach((post) => {
    postsHTML += `<div class="post">
                      <p>${post.text}</p>
                      <span class="timestamp">${post.timestamp}</span>
                   </div>`;
  });

  postsContainer.innerHTML = postsHTML;
}

// Attach form submission event handler
document.getElementById("postForm").addEventListener("submit", handleFormSubmit);

// Display the most recent posts on page load
displayRecentPosts();
