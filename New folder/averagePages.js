function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return totalPages / books.length;
  }
  
  // Example usage:
  const books = [
    { title: "Book 1", author: "Author 1", pages: 100 },
    { title: "Book 2", author: "Author 2", pages: 150 },
    { title: "Book 3", author: "Author 3", pages: 120 }
  ];
  console.log(averagePages(books));