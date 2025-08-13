import './css/style.css'

const sidebar = document.querySelector<HTMLElement>('#sidebar')!;

sidebar.innerHTML = /*html*/ `
 <h2>Blogposts</h2>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
        </ul>

`