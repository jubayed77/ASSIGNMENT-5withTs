
import { use } from "react";
import TechCard from "./techCard";
import type { Tech } from "./type/types";

interface TeachProps {
  TechPromise: Promise<Tech[]>;
  handleSaveTech: (tech: Tech) => void;
  saved: Tech[];
}

const Techs = ({
  TechPromise,
  handleSaveTech,
  saved,
}: TeachProps) => {
  const allTechs = use(TechPromise);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-5">
      {allTechs.length === 0 ? (
        <p>No techs found</p>
      ) : (
        allTechs.map((singleTech) => (
          <TechCard
            key={singleTech.id}
            tech={singleTech}
            handleSaveTech={handleSaveTech}
            saved={saved}
          />
        ))
      )}
    </div>
  );
};

export default Techs;

