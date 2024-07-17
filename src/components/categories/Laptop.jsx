import laptop from "../../assets/categories/laptop.jpg";

export default function Laptop({goToTheDesireRoute}) {
  return (
    <div onClick={()=> goToTheDesireRoute('laptops')} className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2 cursor-pointer">
      <div className=" h-56">
        <img
          className="w-full h-full object-cover "
          src={laptop}
          alt="laptop"
        />
      </div>

      <div className="py-5 text-center">
        <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
          Laptop
        </h3>
      </div>
    </div>
  );
}
