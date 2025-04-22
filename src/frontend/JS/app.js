const data = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];
const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  suggestions.innerHTML = ""; 

  if (!value) {
    suggestions.style.display = "none"; 
    return;
  }

  const filtered = data.filter(item => item.toLowerCase().startsWith(value)); 

  if (filtered.length === 0) {
    suggestions.style.display = "none"; 
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.addEventListener("click", () => {
      input.value = item;  
      suggestions.style.display = "none";  
      searchInDatabase(item); 
    });
    suggestions.appendChild(div);
  });

  suggestions.style.display = "block"; 
});


document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestions.style.display = "none"; 
  }
});


function searchInDatabase(query) {
  console.log("جستجو در دیتابیس برای:", query);
}

document.getElementById("refresh-icon").addEventListener("click", function() {
    location.reload(); 
  });