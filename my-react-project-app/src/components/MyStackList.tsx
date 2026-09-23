import type { Tech } from "./type/types";

type MyStackListProps = {
  tech: Tech[];
  handleRemoveTech: (id: string) => void;
  handleClearAll: () => void;
};

const MyStackList = ({ tech, handleClearAll, handleRemoveTech }: MyStackListProps) => {
  return (
    <aside id="stack-list" className="w-full">
      <div className="w-full max-w-sm bg-white border border-slate-100 shadow-sm rounded-3xl p-6">
        
        {/* title  desg*/}
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h1>

        {/* dynamic subtitle  desg*/}
        <p className="text-slate-400 text-sm mt-1">
          {tech.length === 0
            ? "No technologies selected yet."
            : `${tech.length} ${tech.length === 1 ? "Technology" : "Technologies"} Selected`}
        </p>

        {/* condtinal rendring desg*/}
        {tech.length === 0 ? (
          
          <div className="mt-6 border-2 border-dashed border-slate-200/80 rounded-2xl p-10 flex items-center justify-center text-center">
            <p className="text-slate-400 text-sm font-normal">
              Your stack is empty.
            </p>
          </div>
        ) : (
          /* remove all desg */
          <div className="mt-6 flex flex-col gap-3">
            
            {/* d work desg*/}
            <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto pr-1">
              {tech.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white border border-slate-200/70 rounded-2xl p-3.5 shadow-sm transition-all hover:border-slate-300"
                >
                  {/* icon & info  desg*/}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain rounded-lg"
                    />
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-bold text-sm leading-tight">
                        {item.name}
                      </span>
                      <span className="text-slate-400 text-xs mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* R s D B */}
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(item.id)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
                    aria-label="Remove item"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* c all btton */}
            <button
              type="button"
              onClick={handleClearAll}
              className="w-full mt-2 py-3 rounded-2xl border border-red-200 bg-white text-red-500 font-bold text-sm transition-all hover:bg-red-50 active:scale-[0.98] cursor-pointer"
            >
              Remove All
            </button>

          </div>
        )}

      </div>
    </aside>
  );
};

export default MyStackList;