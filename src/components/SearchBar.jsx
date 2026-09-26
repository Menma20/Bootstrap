import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-6 col-lg-5">
        <div className="input-group shadow-sm rounded-pill overflow-hidden border border-primary">
          <input 
            type="text" 
            className="form-control border-0 py-2 px-4 shadow-none" 
            placeholder="Buscar servicios (ej: Frontend, Datos...)" 
            value={searchTerm} 
            onChange={(e) => onSearchChange(e.target.value)} 
          />
          {searchTerm && (
            <button 
              className="btn btn-light text-muted px-4 border-0" 
              type="button" 
              onClick={() => onSearchChange('')}
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;