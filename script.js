// Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchHistoryList = document.getElementById('searchHistoryList');
const clearHistoryButton = document.getElementById('clearHistoryButton');


function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistoryList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchHistoryList.appendChild(li);
    });
}


function saveSearchTerm(term) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(history));
}


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        saveSearchTerm(searchTerm);
        loadSearchHistory();
        searchInput.value = '';
    }
});


clearHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
});


document.addEventListener('DOMContentLoaded', loadSearchHistory);
