import React from 'react';
import Link from 'next/link';

interface SS1PageProps {}

const SS1Page: React.FC<SS1PageProps> = () => {
  const ss1Subjects: string[] = [
    "Agricultural Science",
    "Biology",
    "Chemistry",
    "Commerce",
    "Economics",
    "English Language",
    "Fine Arts",
    "Further Mathematics",
    "Geography",
    "Government",
    "History",
    "Literature in English",
    "Mathematics",
    "Physics",
    "Technical Drawing",
  ].sort();

  const subjectColors = [
    'bg-indigo-300 text-white',
    'bg-teal-300 text-white',
    'bg-yellow-400 text-white',
    'bg-red-300 text-white',
    'bg-purple-300 text-white',
    'bg-pink-300 text-white',
    'bg-gray-400 text-white',
    'bg-green-300 text-white',
    'bg-orange-300 text-white',
    'bg-blue-300 text-white',
    'bg-indigo-400 text-white',
    'bg-teal-400 text-white',
    'bg-yellow-500 text-white',
    'bg-red-400 text-white',
    'bg-purple-400 text-white',
    'bg-pink-400 text-white',
    'bg-gray-500 text-white',
    'bg-green-400 text-white',
    'bg-orange-400 text-white',
  ];

  return (
    <div className="min-h-screen md:min-h-screen p-4 text-center bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Senior Secondary School 1 (SS1)
      </h1>
      <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
        Click on a subject to view its content:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {ss1Subjects.map((subject, index) => {
          const color = subjectColors[index % subjectColors.length];
          return (
            <Link
              key={index}
              href={`/subject/${encodeURIComponent(subject.toLowerCase().replace(/ /g, '-'))}`}
              className={
                "px-6 py-3 rounded-lg transition-all duration-300 " +
                "hover:scale-105 hover:shadow-lg " +
                color +
                " font-medium text-lg shadow-md border border-gray-200 shadow-md"
              }
            >
              {subject}
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
        <p className="text-gray-700 mb-6">
          Here are some extra resources to help you with your SS1 studies:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/textbooks" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
            Recommended Textbooks
          </Link>
          <Link href="/past-questions" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Past Questions
          </Link>
          <Link href="/lesson-notes" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
            Lesson Notes
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About SS1</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Senior Secondary School 1 (SS1) is the first year of senior secondary education. Here&apos;s an overview of what you&apos;ll learn.
        </p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-8 p-10">
        <Link href="/classes/jss3" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Previous
        </Link>
        <Link href="/classes/ss2" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Next
        </Link>
      </div>
    </div>
  );
};

export default SS1Page;
