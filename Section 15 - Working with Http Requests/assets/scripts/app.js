const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        body: data
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();     // success state
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server-side error');
            });
        }
    })
    .catch(error => {
        console.log(error);
        throw new Error('Something went wrong!');
    })
}

async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        );
    
        const listOfPosts = responseData; 
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };

    const fd = new FormData(form);
    // fd.append('title', title);
    // fd.append('content', content);
    fd.append('userId', userId);

    // fd.append('someFile', , 'photo.png');    // easily add files


    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

// fetchPosts();
// createPost('test', 'body test');

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enterdTitle = event.currentTarget.querySelector('#title').value;
    const enterdContent = event.currentTarget.querySelector('#content').value;

    createPost(enterdTitle, enterdContent);
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});