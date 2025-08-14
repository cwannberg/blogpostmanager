import './css/style.css'
import { toggleForm } from './formManager';
import { DummyPosts } from './data';

const blogpostUListEle = getBlogpostUListElement();
const sidebar = document.querySelector<HTMLElement>('#sidebar')!;

export function getBlogpostUListElement(): HTMLUListElement | null {
    return document.querySelector<HTMLUListElement>('.blogpost-list');
}
function addDummyPostsToList(): void{
    DummyPosts.forEach(post => {
        const listElement = document.createElement('li');
        listElement.textContent=`${post.title}`;
        blogpostUListEle?.appendChild(listElement);
    });
}
addDummyPostsToList();
const postBtn = document.querySelector(".new-post-btn");
postBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForm(true);
});

export function addBlogPostToList(post: {title: string; id: string}): void{
        const listElement = document.createElement('li');

        const link = document.createElement("a");
        link.textContent = post.title;
        link.href = `${post.id};`
        link.classList.add("blogpost-link");

         link.addEventListener('click', (e) => {
        e.preventDefault();
        const postEl = document.getElementById(post.id);
        postEl?.scrollIntoView({ behavior: 'smooth' });
    });

    listElement.appendChild(link);
    blogpostUListEle?.appendChild(listElement);
    }
