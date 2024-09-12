let books = [
    {
        title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008
    },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: 2015 },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2018 },
    {
        title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', year:
            2020
    },
    { title: 'Secrets of the JavaScript Ninja', author: 'John Resig', year: 2013 }
];

function find(books, author) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].author == author) {
            console.log(books[i]);
        };
    };
}

find(books, 'Kyle Simpson');