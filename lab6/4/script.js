document.addEventListener("DOMContentLoaded", loadMovies);

function loadMovies() {
    const movies = JSON.parse(localStorage.getItem("myMovies")) || [];
    renderList(movies);
}

function addMovie() {
    const input = document.getElementById("movieInput");
    const movieName = input.value.trim();
    if (movieName) {
        const movies = JSON.parse(localStorage.getItem("myMovies")) || [];
        movies.push(movieName);
        localStorage.setItem("myMovies", JSON.stringify(movies));
        input.value = "";
        renderList(movies);
    } else {
        alert("กรุณากรอกชื่อภาพยนตร์/ซีรีส์โปรด!");
    }
}

function renderList(movies) {
    const list = document.getElementById("movieList");
    const clearBtn = document.getElementById("clearBtn");
    list.innerHTML = "";
    if (movies.length === 0) {
        list.innerHTML = '<div class="empty - message">ยังไม่มีรายการโปรด</div>';
        clearBtn.style.display = "none";
    } else {
        movies.forEach((movie, index) => {
            const li = document.createElement("li");
            li.className = "movie-item";
            li.innerHTML = `
                <span>🎬 ${movie}</span>
                <button onclick="deleteMovie(${index})" class="btn-delete">ลบ</button>
            `;
            list.appendChild(li);
        });
        clearBtn.style.display = "block";
    }
}

function deleteMovie(index) {
    const movies = JSON.parse(localStorage.getItem("myMovies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("myMovies", JSON.stringify(movies));
    renderList(movies);
}

function clearAll() {
    if (confirm("ต้องการลบรายชื่อทั้งหมดหรือไม่?")) {
        localStorage.removeItem("myMovies");
        renderList([]);
    }
}