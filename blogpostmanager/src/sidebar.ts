import './css/style.css'

const sidebar = document.querySelector<HTMLElement>('#sidebar')!;

sidebar.innerHTML = /*html*/ `
<button id="btn">New post</button>
 <h2>Blogposts</h2>
    <ul class="blogpost-list">

    </ul>
`

export function getBlogpostUListElement(): HTMLUListElement | null {
    return document.querySelector<HTMLUListElement>('.blogpost-list');
}