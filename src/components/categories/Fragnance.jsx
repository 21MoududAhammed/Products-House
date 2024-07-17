import fragnance from "../../assets/categories/fragnance.jpg";

export default function Fragnance({goToTheDesireRoute}) {
  return (
    <div onClick={()=> goToTheDesireRoute('fragrances')} className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2 cursor-pointer">
      <div className=" h-56">
        <img
          className="w-full h-full object-cover "
          src={fragnance}
          alt="fragnance"
        />
      </div>

      <div className="py-5 text-center">
        <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
          Fragnance
        </h3>
      </div>
    </div>
  );
}
