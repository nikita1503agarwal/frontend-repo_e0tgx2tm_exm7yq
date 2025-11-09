import React, { useState } from 'react';

function AdmissionForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    guardian: '',
    program: 'Tahfidz',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admission" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Admission Form</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Submit your details to begin your journey at the pondok.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {submitted ? (
            <div className="rounded-lg bg-emerald-50 p-6 text-emerald-800 ring-1 ring-emerald-200">
              <p className="font-semibold">Thank you for applying!</p>
              <p className="text-sm">We have received your application and will reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} required className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" placeholder="e.g. Ahmad Zain" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" placeholder="+62 ..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guardian Name</label>
                <input name="guardian" value={form.guardian} onChange={handleChange} required className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Parent/Guardian" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Program</label>
                <select name="program" value={form.program} onChange={handleChange} className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500">
                  <option>Tahfidz</option>
                  <option>Takhassus</option>
                  <option>Formal + Diniyyah</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Tell us about the applicant..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-md bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdmissionForm;
