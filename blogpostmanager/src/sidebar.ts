import './css/style.css'
import { toggleForm } from './formManager';

const sidebar = document.querySelector<HTMLElement>('#sidebar')!;

sidebar.innerHTML = /*html*/ `
<button class="new-post-btn">New post</button>
 <h2>Blogposts</h2>
    <ul class="blogpost-list">

    </ul>
`

export function getBlogpostUListElement(): HTMLUListElement | null {
    return document.querySelector<HTMLUListElement>('.blogpost-list');
}

const postBtn = document.querySelector(".new-post-btn");
postBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForm(true);
});