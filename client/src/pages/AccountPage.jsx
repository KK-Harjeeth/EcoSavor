import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Link, Navigate,} from "react-router-dom";
import { useState } from "react";

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);
  const {redirect}=useState(null);
  if(redirect){
    return <Navigate to={redirect}/>
  }
  if (!ready) {
    return 'Loading!';
  }

  if (ready && !user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-4 mb-8">
        <Link className="py-2 px-6 bg-gray-300 rounded-full" to={'/account/bookings'}>
          My Bookings
        </Link>
      </nav>

      {
        <div className="text-center max-w-lg mx-auto">
            Logged in as {user.name} ({user.email}) <br />
            Refresh to Logout!
        </div>
      }
    </div>
  );
}
