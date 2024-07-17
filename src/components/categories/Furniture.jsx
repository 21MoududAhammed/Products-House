import furniture from "../../assets/categories/furniture.avif";
export default function Furniture({goToTheDesireRoute}) {
  return (
    <div onClick={()=> goToTheDesireRoute('furniture')} className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2 cursor-pointer">
      <div className=" h-36 md:h-56">
        <img
          className="w-full h-full object-cover border rounded-xl"
          src={furniture}
          alt="smart phone"
        />
      </div>

      <div className="py-5 text-center">
        <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
          Furniture
        </h3>
      </div>
    </div>
  );
}
