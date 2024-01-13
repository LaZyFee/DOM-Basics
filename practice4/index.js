
// s-1: add eventListener to the post button
document.getElementById('btn-post').addEventListener('click', function () {
    // s-2: get the commnet inside text are 
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // s-3.1:set the comment inside comment container 
    const commentContainer = document.getElementById('comment-container');
    // s-3.2: create new elemnt (p tag)
    const p = document.createElement('p');
    // s-3.3:set the text of the comment as innerText of the p tag 
    p.innerText = newComment;
    // s-3.4: add the p tag using appeandChild 
    commentContainer.appendChild(p);

    // s-4: clear the text area 
    commentBox.value = '';
})