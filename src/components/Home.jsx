import { useLoaderData } from "react-router-dom";

export default function Home() {
  const meals = useLoaderData();
  console.log(meals);
  return (
    <div className="my-5 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2 md:gap-4">
      {meals?.map((meal) => {
        return (
          <div
            key={meal.idMeal}
            className=" flex flex-col justify-between shadow p-2 hover:bg-gray-300"
          >
            <div>
              <img
                className="w-full rounded-xl"
                src={meal.strMealThumb}
                alt=""
              />
              <div className="mt-2">
                <h3 className="text-2xl font-semibold">{meal.strMeal}</h3>
                <h3 className="font-semibold">Price: {meal.idMeal}</h3>
              </div>
            </div>

            <div className="mt-5 ">
              <button className="btn btn-success w-full text-white text-xl hover:bg-rose-500 border-none">
                Show Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
