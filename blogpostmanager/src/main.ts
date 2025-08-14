import { toggleForm } from './formManager';
import { addBlogPostToList } from './sidebar';

const blogPosts = document.querySelector(".blog-content");

export function createBlogPost(): void{
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
    addBlogPostToList(newPost);
}

const postBtn = document.querySelector(".post-btn");
postBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    createBlogPost();
    toggleForm(false);
});