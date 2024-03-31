import { useLoaderData, useNavigate } from "react-router-dom";

export default function Cart() {
  const meal = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-[95%] md:w-[80%] my-10 text-center">
      <div className="flex justify-center">
        <img
          className=" w-[90%] md:w-[50%]"
          src={meal?.strMealThumb}
          alt="meal image"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-bold text-rose-600">{meal?.strMeal}</h3>
        <h3 className="text-xl">Area: {meal?.strArea}</h3>
        <h4 className="text-xl">Category: {meal?.strCategory}</h4>
        <h4>
          <span className="font-bold">Instructions:</span>{" "}
          {meal?.strInstructions}
        </h4>
        <a
          className="text-blue-700 underline me-3"
          href={meal?.strSource}
          target="_blank"
        >
          Source
        </a>
        <a
          className="text-blue-700 underline "
          href={meal?.strYoutube}
          target="_blank"
        >
          Cooking Video
        </a>
        <button className="bg-blue-700 px-3 rounded text-white ms-2 mt-3" onClick={()=> navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
