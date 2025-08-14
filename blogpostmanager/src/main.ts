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
        }),
        id: `post-${Date.now()}`
    };

    const newPostEl = document.createElement('article');
    newPostEl.classList.add('article-blogpost');

    newPostEl.innerHTML = /*html*/ `
    <div class="newpost-header">
        <h3 class="newpost-title">${newPost.title}</h3>
        <p class="newpost-timestamp">${newPost.timeStamp}</p>
    </div>
    <div class="newpost-body">
        <p class="newpost-content">${newPost.content}</p>
    </div>
    <div class="newpost-footer">
        <p class="newpost-author">${newPost.author}</p>
        <div class="newpost-buttons">
            <span class="material-symbols-outlined delete-btn">delete</span>
            <span class="material-symbols-outlined edit-btn ">edit</span>
        </div>
    </div>
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

blogPosts?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("delete-btn")) {
        const article = target.closest("article");
        article?.remove();
        console.log("Inlägg borttaget!");
    }
});
blogPosts?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("edit-btn")) {
        editBlogPost(target);
        toggleForm(true);
        console.log("Inlägg ska uppdateras");
    }
});

let currentEdit: HTMLElement | null = null;

function editBlogPost(target : HTMLElement){
    const article = target.closest("article");

    currentEdit = article;

    const title = article?.querySelector<HTMLHeadingElement>("h3.newpost-title")?.textContent;
    const content = article?.querySelector<HTMLElement>("p.newpost-content")?.textContent;
    const author = article?.querySelector<HTMLElement>("p.newpost-author")?.textContent;

    document.querySelector<HTMLInputElement>("#title-input")!.value = title!;
    document.querySelector<HTMLTextAreaElement>("#content-input")!.value = content!;
    document.querySelector<HTMLInputElement>("#author-input")!.value = author!;

    const saveButton = document.querySelector(".save-btn");
    saveButton?.classList.remove("hidden");
    console.log(title + " " + content + " " + author);

    
}
document.querySelector(".save-btn")?.addEventListener("click", (e) => {
    e.preventDefault();

    if (!currentEdit) return; // Ingen post att spara

    const newTitle = document.querySelector<HTMLInputElement>("#title-input")!.value;
    const newContent = document.querySelector<HTMLTextAreaElement>("#content-input")!.value;
    const newAuthor = document.querySelector<HTMLInputElement>("#author-input")!.value;

    currentEdit.querySelector<HTMLHeadingElement>("h3.newpost-title")!.textContent = newTitle;
    currentEdit.querySelector<HTMLElement>("p.newpost-content")!.textContent = newContent;
    currentEdit.querySelector<HTMLElement>("p.newpost-author")!.textContent = newAuthor;

    console.log("Inlägg uppdaterat:", newTitle, newContent, newAuthor);

    currentEdit = null; // Nollställ
    document.querySelector(".save-btn")?.classList.add("hidden");
});