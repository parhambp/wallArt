const data = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];
const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const value = input.value.trim().toLowerCase();
  suggestions.innerHTML = ""; // پاک کردن پیشنهادات قبلی

  if (!value) {
    suggestions.style.display = "none"; // مخفی کردن منو
    return;
  }

  const filtered = data.filter(item => item.toLowerCase().startsWith(value)); // فقط آیتم‌هایی که با اون شروع می‌شن

  if (filtered.length === 0) {
    suggestions.style.display = "none"; // مخفی کردن منو
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.addEventListener("click", () => {
      input.value = item;  // انتخاب آیتم
      suggestions.style.display = "none";  // مخفی کردن منو بعد از انتخاب
      searchInDatabase(item); // جستجو در دیتابیس
    });
    suggestions.appendChild(div);
  });

  suggestions.style.display = "block"; // نمایش منو
});

// بستن منو وقتی خارج از آن کلیک شد
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestions.style.display = "none"; // مخفی کردن منو
  }
});

// تابع جستجو در دیتابیس (برای آینده)
function searchInDatabase(query) {
  console.log("جستجو در دیتابیس برای:", query);
}

document.getElementById("refresh-icon").addEventListener("click", function() {
    location.reload(); // رفرش کردن صفحه
  });