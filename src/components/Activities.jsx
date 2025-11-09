import React from 'react';

const activities = [
  {
    title: "Morning Halaqah",
    desc: "Daily study circles covering Qur'an, Hadith, and Arabic basics.",
    emoji: "🌅",
  },
  {
    title: "Tahfidz Program",
    desc: "Structured memorization with weekly evaluation and ijazah path.",
    emoji: "📚",
  },
  {
    title: "Community Service",
    desc: "Students serve the local community through clean-ups and charity.",
    emoji: "🤲",
  },
  {
    title: "Sports & Health",
    desc: "Weekly sports like futsal and archery for a healthy lifestyle.",
    emoji: "🏹",
  },
];

function Activities() {
  return (
    <section id="activities" className="bg-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Activities at the Pondok</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Balanced routines that strengthen faith, knowledge, and wellbeing.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <div key={a.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="text-4xl">{a.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{a.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
