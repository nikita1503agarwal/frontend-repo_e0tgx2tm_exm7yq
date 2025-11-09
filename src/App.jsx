import React from 'react';
import Header from './components/Header';
import AdmissionForm from './components/AdmissionForm';
import Activities from './components/Activities';
import ApplicantsList from './components/ApplicantsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <AdmissionForm />
        <Activities />
        <ApplicantsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
