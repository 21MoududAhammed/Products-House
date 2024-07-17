import mensShirt from "../../assets/categories/mensShirt.jpg";

export default function MensShirt(){
    return (
        <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <div className=" h-56 px-10">
          <img
            className="w-full h-full  "
            src={mensShirt}
            alt="mens-shirt"
          />
        </div>

        <div className="py-5 text-center">
          <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
            Mens Shirts
          </h3>
        </div>
      </div>
    );
}