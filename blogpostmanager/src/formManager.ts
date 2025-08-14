export function toggleForm(show: boolean) {
    const form = document.querySelector<HTMLElement>(".new-blogpost");
    if (show) {
        form?.classList.remove("hidden");
    } else {
        form?.classList.add("hidden");
    }
}