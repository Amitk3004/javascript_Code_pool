let comments = [];

/* to load comments via API */

// async function getComments() {
//    const res =  await fetch('https://dummyjson.com/comments');
//    const response = await res.json();
//    return response.comments;
// }

// (async function(){
//     comments = await getComments()
//     loadComments();
// })();


const postBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#comment-box');
const form = document.querySelector('#form');
const commentWrapper = document.querySelector('.comment-wrapper');

form.addEventListener('submit', handlePost);


function handlePost(e) {
    e.preventDefault();
    console.log(e.target.values);
    if(e.target.message.checkValidity()){
        comments.push(message.value);
        message.value = '';
        message.focus();    
        loadComments();
    }
}


function loadComments() {
    
    if(comments.length > 0) {
        const fragment = document.createDocumentFragment();
        for(comment of comments) {
            const item = document.createElement('li');
            item.classList.add('comment');
            item.innerText = comment;
            fragment.appendChild(item);
        }
        commentWrapper.appendChild(fragment);
    }
}

