const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', function(event){
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    let blogArray = JSON.parse(localStorage.getItem('blogPost')) || []

    if (username === ''){
        displayMessage('error', 'username cannot be blank');
    }   else if (title === '') {
        displayMessage('error', 'title cannot be blank');
    }   else if (content === '') {
        displayMessage('error', 'content cannot be blank');
    }  

   
    console.log(username, content, title);
    let userInput = {
        username:username,
        title:title,
        content:content
    }
    blogArray.push(userInput);
    console.log(userInput);
    localStorage.setItem("blogPost", JSON.stringify(blogArray));
    location.href='./blog.html';

});
