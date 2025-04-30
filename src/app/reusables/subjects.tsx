import React from 'react';

interface SubjectListProps {
  subjects: string[]; // Expects an array of strings
}

const SubjectList: React.FC<SubjectListProps> = ({ subjects }) => {
  if (!subjects || subjects.length === 0) {
    return <p>No subjects are currently listed.</p>;
  }

  return (
    <div>
      <h2>Subjects Offered</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;