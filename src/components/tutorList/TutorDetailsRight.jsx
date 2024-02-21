import React from "react";

const TutorDetailsRight = ({ tutor }) => {
  return (
    <div className="tutor-details-card-right">
      <h2>自我介紹</h2>
      <h1>{tutor.introTitle}</h1>
      <div>{tutor.intro}</div>
      {/* <div className="tutor-card-content">
      <Tabs defaultActiveKey="1" items={items} />
      <br />
    </div> */}
      <br />
      <h2>公開試</h2>
      <table className="details-exam-table">
        <thead>
          <tr>
            <th>科目</th>

            <th>公開試</th>
            <th>等級</th>
          </tr>
        </thead>
        <tbody>
          {tutor.examResult &&
            tutor.examResult.map((result) => (
              <tr key={result.id}>
                <td>{result.subject}</td>
                <td>{tutor.hkOpenExam}</td>
                <td>{result.grade}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <br />
      <h2>學歷</h2>
      <div>{tutor.highSchool}</div>
      <div>{tutor.currentEducationLevel}</div>
      <div>{tutor.currentJob}</div>
      <div>{tutor.university}</div>
      <div>{tutor.highestEducation}</div>
      <div>{tutor.university}</div>
      <div>{tutor.universityMajor}</div>
      <br />
      <h2>補習資料</h2>
      <div>{tutor.workExperience}</div>
      <div>{tutor.tutorAreas}</div>
      <div>{tutor.tutorContent}</div>
      <div>NoteProvided: {tutor.noteProvided ? <>true</> : <>false</>}</div>
    </div>
  );
};

export default TutorDetailsRight;
