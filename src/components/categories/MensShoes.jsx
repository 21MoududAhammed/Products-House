import mensShoes from "../../assets/categories/menShoes.jpg";

export default function MensShoes({goToTheDesireRoute}){
    return (
        <div onClick={()=> goToTheDesireRoute('mens-shoes')} className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2 cursor-pointer">
        <div className=" h-56 ">
          <img
            className="w-full h-full rounded-xl "
            src={mensShoes}
            alt="mens-shoes"
          />
        </div>

        <div className="py-5 text-center">
          <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
            Mens Shoes
          </h3>
        </div>
      </div>
    );
}