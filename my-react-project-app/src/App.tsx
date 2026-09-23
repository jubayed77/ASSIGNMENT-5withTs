// import { Suspense, useState } from "react";
// import Techs from "./components/tech";
// import Title from "./components/title";
// import MyStackList from "./components/MyStackList";
// import type { Tech } from "./components/type/types";
// import toast from "react-hot-toast";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Fotter from "./components/Fotter";

// const fetchTech = async (): Promise<Tech[]> => {
//   const res = await fetch("/data.json");
//   const data = await res.json();
//   return data;
// };

// const TechPromise = fetchTech();

// const App = () => {
//   const [saved, setSaved] = useState<Tech[]>([]);

//   const handleSaveTech = (tech: Tech) => {
//     const ids = saved.map((item) => item.id);

//     if (ids.includes(tech.id)) {
//       toast.error(`${tech.name} is already on your list`);
//       return;
//     }

//     setSaved([...saved, tech]);
//     toast.success(`${tech.name} added on your list`);
//   };

//   const handleRemoveTech = (id: string) => {
//     // check item is available
//     const findTech = saved.find((item) => item.id === id);

//     const updatedList = saved.filter((item) => item.id !== id);

//     setSaved(updatedList);

//     if (findTech) {
//       toast.success(`${findTech.name} removed from your list`);
//     }
//   };

//   const handleClearAll = () => {
//     if (!saved.length) return;

//     setSaved([]);

//     toast.success(`Your stack list is clear`, {
//       position: "bottom-right",
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Title />

//       <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           <Suspense
//             fallback={
//               <div className="col-span-3 text-center py-10 font-medium">
//                 Loading <span className="text-amber-500">.....</span>
//               </div>
//             }
//           >
//             <Techs
//               handleSaveTech={handleSaveTech}
//               TechPromise={TechPromise}
//               saved={saved}
//             />
//           </Suspense>

//           <MyStackList
//             tech={saved}
//             handleClearAll={handleClearAll}
//             handleRemoveTech={handleRemoveTech}
//           />
//         </div>
//       </main>
//       <Fotter></Fotter>



//     </>
//   );
// };

// export default App;