import { getPosts } from "./api.js";

const list = document.getElementById("post-list");

async function carregarPosts() {
  const posts = await getPosts(20);

  posts.forEach((post) => {
    const { id, title } = post;
    const li = document.createElement("li");
    li.classList.add("box-section", "box-ultimas");
    li.style.flex = "1 1 auto";
    li.id = id;
    li.textContent = title;
    list.appendChild(li);
  });
}

carregarPosts();
