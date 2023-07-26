import './UserList.css';

function UserList({ userBooks }) {
    return (
        <div className="user-list-div">
            <h1>Lista de lectura</h1>
            <div className="user-list">
                {userBooks.map((book) => {
                    return (
                        <div className="user-book-div" key={book.book.ISBN}>
                            <div className="user-book-div-darker">
                                <img
                                    className="user-book-cover"
                                    src={book.book.cover}
                                    alt={book.book.title}
                                />

                                <div className="user-book-info">
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

export default UserList;
