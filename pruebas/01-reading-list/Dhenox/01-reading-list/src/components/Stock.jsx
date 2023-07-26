import './Stock.css';

function Stock({ stockBooks, numUserBooks, onBookClick }) {
    console.log(numUserBooks);
    return (
        <div className="stock-div">
            <h1>{stockBooks.length} Libros disponibles</h1>
            {numUserBooks > 0 && <h2>{numUserBooks} En la lista de lectura</h2>}
            <div className="stock-list">
                {stockBooks.map((book) => {
                    return (
                        <div
                            className="book-div"
                            key={book.book.ISBN}
                            onClick={() => onBookClick(book)}
                        >
                            <div className="book-div-darker">
                                <img
                                    className="book-cover"
                                    src={book.book.cover}
                                    alt={book.book.title}
                                />

                                <div className="book-info">
                                    <h2>{book.book.title}</h2>
                                    <p style={{ fontWeight: 'bold' }}>
                                        {book.book.author.name}
                                    </p>
                                    <p>{book.book.genre}</p>
                                    <p>{book.book.synopsis}</p>
                                    <p>{book.book.year}</p>
                                    {book.book.author.otherBooks && ( // Condición para mostrar el elemento <p>
                                        <p id="other-books">
                                            Otros libros:{' '}
                                            {book.book.author.otherBooks.join(
                                                ', '
                                            )}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Stock;
