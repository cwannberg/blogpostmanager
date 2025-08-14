import { BlogPosts } from './data';
import { getBlogpostUListElement } from './sidebar';
import { toggleForm } from './formManager';

const blogpostUListEle = getBlogpostUListElement();
const blogPosts = document.querySelector(".blog-content");
function addDummyPosts(): void{

    BlogPosts.forEach(post => {
        const listElement = document.createElement('li');
        listElement.textContent=`${post.title}`;
        blogpostUListEle?.appendChild(listElement);
    });
}

addDummyPosts();

export function createBlogPost(): HTMLElement{
    const now = new Date();
    const newPost = {
        title : document.querySelector<HTMLInputElement>("#title-input")?.value!,
        content : document.querySelector<HTMLTextAreaElement>("#content-input")?.value!,
        author : document.querySelector<HTMLInputElement>("#author-input")?.value!,
        timeStamp: now.toLocaleString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    };

    const newPostEl = document.createElement('article');
    newPostEl.classList.add('article-blogpost');

    newPostEl.innerHTML = /*html*/ `
    <h3 class="newpost-title">${newPost.title}</h3>
    <p class="newpost-timestamp">${newPost.timeStamp}</p>
    <p class="newpost-content">${newPost.content}</p>
    <p class="newpost-author">${newPost.author}</p>
    `
    blogPosts?.appendChild(newPostEl);
    return newPostEl;
}


const postBtn = document.querySelector(".post-btn");
postBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    createBlogPost();
    toggleForm(false);
});