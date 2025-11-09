import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Pondok An-Nur. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#admission" className="hover:text-gray-900">Admission</a>
            <a href="#activities" className="hover:text-gray-900">Activities</a>
            <a href="#applicants" className="hover:text-gray-900">Applicants</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
