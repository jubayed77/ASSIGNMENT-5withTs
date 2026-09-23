import type { Tech } from "./type/types";

interface ItechCardProps {
    tech: Tech;
    saved: Tech[];
    handleSaveTech: (tech: Tech) => void;
}

const TechCard = ({ tech, handleSaveTech, saved }: ItechCardProps) => {
    const { name, description, icon, rating, category, difficulty, badge } = tech;
    const selected = saved.some((item) => item.id === tech.id);

    return (
        <article className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-between">
            {/* top design */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center">
                        <img src={icon} alt={name} className="h-10 w-10 object-contain" />
                    </div>

                    <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
                        {badge}
                    </span>
                </div>

                {/* name design */}
                <h2 className="mt-5 text-2xl font-bold text-gray-900">{name}</h2>

                {/* description design */}
                <p className="mt-3 text-base leading-7 text-gray-500">{description}</p>
            </div>

            <div>
                {/* info design */}
                <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-3">
                    <span className="rounded-md bg-gray-50 px-3 py-1.5 text-sm text-gray-600">
                        {category}
                    </span>

                    <span className="text-sm text-gray-500">{difficulty}</span>

                    <span className="text-sm font-medium text-gray-700">
                        <span className="text-yellow-400">★</span> {rating}
                    </span>
                </div>

                {/* button design */}
                <button
                    disabled={selected}
                    onClick={() => handleSaveTech(tech)}
                    className="mt-5 w-full rounded-xl bg-gray-950 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    {selected ? "Saved to list" : "Add to Stack"}
                </button>
            </div>
        </article>
    );
};

export default TechCard;