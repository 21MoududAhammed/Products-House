import { MyAuthContext } from "../providers/AuthProvider";

export default function Profile() {
  const { isLoggedIn } = MyAuthContext();
  console.log(isLoggedIn);

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
        <img className=" w-full h-56" src={isLoggedIn?.photoURL} alt="avatar" />
        <div className="py-5 text-center ">
          <h3 className="block text-xl font-bold text-gray-800 dark:text-white">
            {isLoggedIn?.displayName}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            Email: {isLoggedIn?.email}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            Verified: {isLoggedIn?.emailVerified ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
