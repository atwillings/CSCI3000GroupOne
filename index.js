//This is for posting text input
function postStatus() {
    // Get the value of the textarea
    const statusText = document.getElementById('status').value;
    
    // Create a new div element to display the posted status
    const newPost = document.createElement('div');
    newPost.innerHTML = `<p>${statusText}</p>`;

    // Add the new div element to the content area
    const content = document.querySelector('.content');
    content.appendChild(newPost);

    // Clear the textarea after posting
    document.getElementById('status').value = "";
}


//This is for users to register
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        //implement your registration logic here
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    });
});

//This is for users to log in
 document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
     loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    
                    // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
                    //implement your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
                });
            });
