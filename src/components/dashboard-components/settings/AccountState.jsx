import { useNavigate } from "react-router-dom";
import { signOut } from "../../../supabase/S_auth";

const AccountState = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          className="font-medium rounded-md py-2 px-6 bg-light text-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button className="text-white bg-red-600 font-medium rounded-md py-2 px-6 cursor-pointer">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountState;
