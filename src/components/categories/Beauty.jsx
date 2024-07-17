import beauty from '../../assets/categories/Beauty.png'
export default function Beauty() {
  return (
    <div className="w-full  max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
      <div className=" h-56">
        <img
          className="w-full h-full object-cover "
          src={beauty}
          alt="Beauty"
        />
      </div>

      <div className="py-5 text-center">
        <h3 className="block text-2xl font-bold font-serif text-gray-800 dark:text-white">
          Beauty
        </h3>
      </div>
    </div>
  );
}
