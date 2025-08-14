import { BlogPosts } from './data';
import { getBlogpostUListElement } from './sidebar';

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
    const newPost = {
        title : document.querySelector<HTMLInputElement>(".title-input")?.value!,
        content : document.querySelector<HTMLTextAreaElement>(".content-input")?.value!,
        author : document.querySelector<HTMLInputElement>(".author-input")?.value!,
        timeStamp: Date.now()
    };
    // console.log("Nytt inlägg." + newPost.title);
    // BlogPosts?.push(newPost);
    // const li = document.createElement("li");
    // li.textContent = `${newPost.title}`;
    // blogpostUListEle?.appendChild(li);

    const newPostEl = document.createElement('article');
    newPostEl.classList.add('newPost');

    newPostEl.innerHTML = /*html*/ `
    <h3>${newPost.title}</h3>
    <p>${newPost.timeStamp}</p>
    <p>${newPost.content}</p>
    <p>${newPost.author}</p>
    `
    blogPosts?.insertAdjacentElement('afterend', newPostEl);
    return newPostEl;
}


const postBtn = document.querySelector("#post-Btn");
postBtn?.addEventListener("click", () => {
  createBlogPost();
});