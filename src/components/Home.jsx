import { useLoaderData } from "react-router-dom";

export default function Home() {
  const meals = useLoaderData();
  console.log(meals);
  return (
    <div className="my-5 mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      {meals?.map((meal) => {
        return (
          <div key={meal.idMeal}>
            <div>
              <img
                className="w-full rounded-xl"
                src={meal.strMealThumb}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{meal.strMeal}</h3>
              <h3 className="font-semibold">Price: {meal.idMeal}</h3>
            </div>
            <div className="mt-5 ">
              <button className="btn btn-success w-full text-white text-xl">Show Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
