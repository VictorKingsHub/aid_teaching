import React from 'react';
import Link from 'next/link';

interface Jss3PageProps {}

const Jss3Page: React.FC<Jss3PageProps> = () => {
  const jss3Subjects: string[] = [
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
        'bg-indigo-300 text-indigo-900',  // Indigo
        'bg-teal-300 text-teal-900',    // Teal
        'bg-yellow-400 text-yellow-900',  // Yellow
        'bg-red-300 text-red-900',      // Red
        'bg-purple-300 text-purple-900', // Purple
        'bg-pink-300 text-pink-900',    // Pink
        'bg-gray-400 text-gray-900',    // Gray
        'bg-green-300 text-green-900',
        'bg-orange-300 text-orange-900',
        'bg-blue-300 text-blue-900',
        'bg-indigo-400 text-indigo-900',
        'bg-teal-400 text-teal-900',
        'bg-yellow-500 text-yellow-900',
        'bg-red-400 text-red-900',
        'bg-purple-400 text-purple-900',
        'bg-pink-400 text-pink-900',
        'bg-gray-500 text-gray-900',
        'bg-green-400 text-green-900',
        'bg-orange-400 text-orange-900',
  ];

  return (
    <div className="min-h-screen md:min-h-screen p-4 text-center bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Junior Secondary School 3 (JSS3)
      </h1>
      <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
        Click on a subject to view its content:
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {jss3Subjects.map((subject, index) => {
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
          Here are some extra resources to help you with your JSS3 studies:
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
         <h2 className="text-2xl font-semibold text-gray-900 mb-4">About JSS3</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Junior Secondary School 3 (JSS3) is the third and final year of junior secondary education.  Here is a brief overview of what you will learn.</p>
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-around mt-8">
        <Link href="/classes/jss2" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Previous
        </Link>
        <Link href="/classes/ss1" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Jss3Page;
