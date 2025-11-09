import React from 'react';

function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Pondok An-Nur
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A nurturing Islamic boarding school where students grow in knowledge, character, and community. Join a vibrant environment that blends classical studies with meaningful daily activities.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#admission" className="rounded-md bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Apply to the Pondok
            </a>
            <a href="#activities" className="rounded-md bg-white px-6 py-3 text-emerald-700 font-semibold ring-1 ring-inset ring-emerald-200 hover:ring-emerald-300">
              Explore Activities
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:flex-1">
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <div className="text-3xl">📖</div>
              <p className="mt-2 font-medium text-gray-800">Qur'an Memorization</p>
              <p className="text-sm text-gray-500">Daily hifz and tajwid circles</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <div className="text-3xl">🤝</div>
              <p className="mt-2 font-medium text-gray-800">Character Building</p>
              <p className="text-sm text-gray-500">Adab, leadership, service</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <div className="text-3xl">🕌</div>
              <p className="mt-2 font-medium text-gray-800">Daily Prayers</p>
              <p className="text-sm text-gray-500">Jama'ah and halaqah</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <div className="text-3xl">🌿</div>
              <p className="mt-2 font-medium text-gray-800">Community Living</p>
              <p className="text-sm text-gray-500">Work programs & gardens</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
