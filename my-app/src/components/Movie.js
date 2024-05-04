import React, { useState } from 'react';
import Avatar from './Avatar';
import './styles.css'; // Assuming you have a CSS file for styles

function Card({ children }) {
  return (
    <div
      className='card'
      style={{
        width: 400,
        height: 400,
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}

const Button = ({ onClick, children }) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter text...'
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination'>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchValue}
        onChange={handleChange}
        placeholder='Search...'
      />
      <Button type='submit'>Search</Button>
    </form>
  );
};

const Dropdown = ({ options, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Movie = () => {
  // Sample data for dropdown options
  const genreOptions = [
    { label: 'Action', value: 'action' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  // Assuming you have some data to display
  // Modify this section according to your actual data structure
  const movies = [
    { title: 'Movie 1', genre: 'action' },
    { title: 'Movie 2', genre: 'comedy' },
    { title: 'Movie 3', genre: 'drama' },
    // Add more movie objects here
  ];

  // Filter movies based on search query and selected genre
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedGenre || movie.genre === selectedGenre)
  );

  // Pagination logic
  const moviesPerPage = 5;
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src='https://i.imgur.com/yXOvdOSs.jpg'
          alt='Hedy Lamarr'
          className='photo'
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </div>

      <div>
        <Button onClick={handleModalToggle}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
          <h2>Modal Content</h2>
          <p>This is a modal. You can put any content here.</p>
          <Button onClick={handleModalToggle}>Close Modal</Button>
        </Modal>

        <Card>
          <Avatar
            person={{ name: 'Avatar poster', imageId: 'MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_' }}
            size={{ width: 200, height: 300 }}
          />
        </Card>
        <Card>
          <h1>Hello Card</h1>
        </Card>

        <Form onSubmit={(value) => console.log('Submitted:', value)} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <Search onSearch={handleSearch} />

        <Dropdown options={genreOptions} onSelect={handleGenreSelect} />

        {paginatedMovies.map((movie) => (
          <div key={movie.title}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movie;
