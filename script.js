document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('searchResults');

    const books = [
        { title: 'The Emperor of All Maladies', link: 'https://drive.google.com/uc?export=download&id=1t99c-iE8VickgFvTKtgRxGcgW_VV8aHB' },
        { title: 'Tantric Visions of the Divine Feminine', link: 'https://drive.google.com/uc?export=download&id=1R36818oyjjCkqiNAu9XA2vTxRpku88hL' },
        { title: 'Hands-On Machine Learning with Scikit-Learn and TensorFlow', link: 'https://drive.google.com/uc?export=download&id=1OTZfpNILxIGDdacCuHEBG_T75r8IDc69' },
        { title: 'NumPy Beginner\'s Guide, 2nd Edition', link: 'https://drive.google.com/uc?export=download&id=1JoYUXB8hs6UiFtcnC-M6MdfoMYrIamiy' }
    ];

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const li = document.createElement('li');
                    li.textContent = book.title;
                    li.addEventListener('click', () => {
                        window.location.href = `book.html?title=${encodeURIComponent(book.title)}`;
                    });
                    searchResults.appendChild(li);
                });
            } else {
                const noResults = document.createElement('li');
                noResults.classList.add('no-results');
                noResults.textContent = 'No book in database';
                searchResults.appendChild(noResults);
            }
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });

    // JavaScript to show/hide footer on scroll
    document.addEventListener('scroll', function() {
        const footer = document.querySelector('.footer');
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition > documentHeight - 100) { // Adjust the threshold as needed
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });
});

// Hide search results when clicking outside
document.addEventListener('click', function(e) {
    if (!document.getElementById('search').contains(e.target) && !document.getElementById('searchResults').contains(e.target)) {
        document.getElementById('searchResults').style.display = 'none';
    }
});
