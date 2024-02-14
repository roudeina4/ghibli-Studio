const mood = document.getElementById("mood");
const btn = document.getElementById("theMood");

btn.addEventListener("click", function() {
if (mood.style.visibility === "visible") {
    mood.style.visibility = "hidden";
    btn.innerText = "Explore";
}      
else {
    mood.style.visibility = "visible";
    btn.innerText = "Hide";
}
});

//the data fetching
const animelist = document.querySelector(".cards")
function showAnime(animes){
    const theListAnime = animes.map(item => {
        return ` 
        <a href="searchpage.html?id=${item.id}"><div class="card">
        <img src="${item.image}" alt="${item.image}"/>
        <div class="animeTitle">${item.title}</div>
        </div><a>
     `
    })
    .join("")
    animelist.innerHTML = theListAnime;
}
fetch("https://ghibliapi.vercel.app/films")
.then((result) => result.json())
.then((result) => showAnime(result))