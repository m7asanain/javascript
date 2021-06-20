const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';   // *same, more convenience

xhr.onload = function() {   // addEventListener is not really supported
    // console.log(xhr.response);  // return all data

    // const listOfPosts = xhr.response;
    // listOfPosts.push({});   //  not work because it respond to return json no js

    // const listOfPosts = JSON.parse(xhr.response);   // *same

    const listOfPosts = xhr.response;  
    console.log(listOfPosts);

    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }
}

xhr.send();