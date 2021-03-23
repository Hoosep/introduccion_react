import React, { Fragment } from "react";

const Cursos = (props) => {
  const { courses } = props;

  return (
    <div>
      {courses.map((course) => {
        const { name, id, parts } = course;
        let totalExercises = 0;
        return (
          <div key={id}>
            <h1>{name}</h1>
            {parts.map((part) => {
              const {
                name: namePart,
                id: idPart,
                exercises: exercisesPart
              } = part;

              totalExercises = totalExercises + exercisesPart;
              return (
                <div key={idPart}>
                  <p>
                    {namePart} {exercisesPart}
                  </p>
                </div>
              );
            })}
            <h3>total of {totalExercises} exercises</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cursos;
