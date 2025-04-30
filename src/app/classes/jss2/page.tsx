import React from 'react';
import Link from 'next/link';

interface Jss2PageProps {}

const Jss2Page: React.FC<Jss2PageProps> = () => {
  const jss2Subjects: string[] = [
    'Agricultural Science',
    'Art and Design',
    'Basic Science',
    'Basic Technology',
    'Business Studies',
    'Christian Religious Studies',
    'Civic Education',
    'Computer Studies',
    'Cultural and Creative Arts',
    'English Studies',
    'French Language',
    'Geography',
    'History',
    'Home Economics',
    'Igbo Language',
    'Mathematics',
    'Music',
    'Physical and Health Education',
    'Social Studies',
  ].sort();

  const subjectColors = [
        'bg-indigo-300 text-white',  // Indigo
        'bg-teal-300 text-white',    // Teal
        'bg-yellow-400 text-white',  // Yellow
        'bg-red-300 text-white',      // Red
        'bg-purple-300 text-white', // Purple
        'bg-pink-300 text-white',    // Pink
        'bg-gray-400 text-white',    // Gray
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
        Junior Secondary School 2 (JSS2)
      </h1>
      <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
        Click on a subject to view its content:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {jss2Subjects.map((subject, index) => {
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
          Here are some extra resources to help you with your JSS2 studies:
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
         <h2 className="text-2xl font-semibold text-gray-900 mb-4">About JSS2</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Junior Secondary School 2 (JSS2) is the second year of junior secondary education.  Here is a brief overview of what you will learn.</p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-around mt-8">
        <Link href="/classes/jss1" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Previous
        </Link>
        <Link href="/classes/jss3" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Jss2Page;
