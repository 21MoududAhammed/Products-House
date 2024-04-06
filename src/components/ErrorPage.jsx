import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center mt-10 " >
     <div className="p-5 shadow-2xl text-center">
     <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
}