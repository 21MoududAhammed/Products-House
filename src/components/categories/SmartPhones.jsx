import smartPhone from "../../assets/categories/smartPhoneImg.jpg";
export default function SmartPhones({goToTheDesireRoute}) {
  return (
    <div onClick={()=> goToTheDesireRoute('smartphones')} className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2 cursor-pointer">
      <div className=" h-56">
        <img
          className="w-full h-full object-cover border rounded-xl"
          src={smartPhone}
          alt="smart phone"
        />
      </div>

      <div className="py-5 text-center">
        <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
          Smartphone
        </h3>
      </div>
    </div>
  );
}
