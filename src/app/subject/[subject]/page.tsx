"use client"
import React from 'react';
import { useParams } from 'next/navigation';

interface SubjectPageProps {}

const SubjectPage: React.FC<SubjectPageProps> = () => {
  const { subject } = useParams(); // Get the 'subject' parameter from the URL

  // You would typically fetch or define the content for each subject here
  const subjectContent = getSubjectContent(subject as string); // Implement this function

  if (!subject) {
    return <p>Loading subject...</p>;
  }

  if (!subjectContent) {
    return <p>Content for "{subject.replace(/-/g, ' ')}" not found.</p>;
  }

  return (
    <div>
      <h1>{subject.replace(/-/g, ' ').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
      <p>{subjectContent}</p>
      {/* You can add more detailed content here */}
    </div>
  );
};

// Dummy function to simulate fetching subject content
const getSubjectContent = (subjectSlug: string): string | undefined => {
  // In a real application, you would likely fetch this data from an API, database, or local files
  switch (subjectSlug) {
    case 'mathematics':
      return 'This page contains detailed information about Mathematics for JSS1, including topics, formulas, and examples.';
    case 'english-studies':
      return 'Explore the world of English Studies with lessons on grammar, literature, and comprehension.';
    case 'basic-science':
      return 'Learn about the fundamentals of Basic Science, covering biology, chemistry, and physics concepts.';
    // Add content for other subjects here
    default:
      return undefined;
  }
};

export default SubjectPage;