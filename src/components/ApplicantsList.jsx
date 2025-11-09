import React, { useState } from 'react';

function ApplicantsList() {
  const [query, setQuery] = useState('');
  // Demo static data for now (can be wired to backend later)
  const applicants = [
    { name: 'Ahmad Zaki', program: 'Tahfidz', status: 'New' },
    { name: 'Siti Aisyah', program: 'Takhassus', status: 'Review' },
    { name: 'Muhammad Yusuf', program: 'Formal + Diniyyah', status: 'Accepted' },
  ];

  const filtered = applicants.filter(a => a.name.toLowerCase().includes(query.toLowerCase()) || a.program.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="applicants" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Applicants</h2>
            <p className="mt-2 text-gray-600">Search and review recent applications.</p>
          </div>
          <div className="sm:w-80">
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name or program" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filtered.map((a) => (
                <tr key={a.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{a.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{a.program}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      a.status === 'Accepted' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' :
                      a.status === 'Review' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' :
                      'bg-gray-50 text-gray-700 ring-1 ring-gray-200'
                    }`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ApplicantsList;
