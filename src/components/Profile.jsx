import { MyAuthContext } from "../providers/AuthProvider";

export default function Profile() {
  const { isLoggedIn } = MyAuthContext();
  console.log(isLoggedIn);
  return (
    <div className="flex justify-center ">
      <div className="my-5 border-2 border-gray-500 p-3 rounded">
        <div className="flex justify-center mb-3">
        <img className="w-56" src={isLoggedIn?.photoURL} alt="profile image" />
        </div>
        <div>
          <h3 className="text-xl">Name: {isLoggedIn?.displayName}</h3>
          <h4 className="text-lg">Email: {isLoggedIn?.email}</h4>
          <h4>EmailVerified: {isLoggedIn?.emailVerified ? "Yes" : "No"}</h4>
        </div>
      </div>
    </div>
  );
}
