import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import { appData } from './data/appData';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredServices = appData.services.filter(service => {
    const term = debouncedSearchTerm.toLowerCase();
    return (
      service.title.toLowerCase().includes(term) || 
      service.desc.toLowerCase().includes(term)
    );
  });

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Navbar brandName={appData.brandName} links={appData.navLinks} />

      <main className="container my-5">
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">Nuestros Servicios de Desarrollo</h1>
          <p className="lead text-muted">Soluciones escalables y responsivas.</p>
          <button 
            type="button" 
            className="btn btn-primary rounded-pill px-4 py-2 mt-2 shadow-sm" 
            data-bs-toggle="modal" 
            data-bs-target="#bienvenidaModal"
          >
            Abrir Mensaje
          </button>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="row g-4">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <div className="col-12 text-center text-muted my-4">
              <p className="fs-5">No se encontraron resultados para "{debouncedSearchTerm}".</p>
            </div>
          )}
        </div>
      </main>
      <Modal />
    </div>
  );
}

export default App;