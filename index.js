// Function to display the comments on the page
function displayComments() {
    const commentsContainer = document.getElementById('comments-container');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
        commentsContainer.appendChild(commentDiv);
    });
}

// Function to handle the comment form submission
function handleCommentSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Get existing comments from local storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add the new comment to the list
    comments.push({ username, comment });

    // Save the updated comments in local storage
    localStorage.setItem('comments', JSON.stringify(comments));

    // Display the comments on the page
    displayComments();

    // Clear the form fields after submission
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
}

// Add event listener to the comment form
document.getElementById('comment-form').addEventListener('submit', handleCommentSubmission);

// Display the comments when the page loads or refreshes
window.addEventListener('load', displayComments);



// Function to handle the registration form submission
function handleRegistration(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      // Show error message if passwords do not match
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // Save the registration data in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    // Redirect to login page or perform other actions upon successful registration
    alert('Registration successful! You can now log in.');
    // Add code here to redirect to the login page or perform other actions upon successful registration
  }
  
  // Add event listener to the registration form
  document.getElementById('registration-form').addEventListener('submit', handleRegistration);
  

// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      // Successful login, redirect to the main page or do something else
      alert('Login successful!');
      // Add code here to redirect to the main page or perform other actions upon successful login
    } else {
      // Show error message
      alert('Invalid username or password.');
    }
  }
  
  // Add event listener to the login form
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  
  // You can use this to set the initial username and password in local storage.
  localStorage.setItem('username', 'your_username');
  localStorage.setItem('password', 'your_password');
