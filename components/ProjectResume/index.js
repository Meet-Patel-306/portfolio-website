import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="mt-5 w-full flex flex-col justify-between">
      <h2 className="text-lg font-bold">{position}</h2>
      <div className="text-lg w-2/5">
        <h2 className="text-sm">{dates}</h2>
        <h3 className="text-sm">{type}</h3>
      </div>
      <div className="w-3/5">
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
