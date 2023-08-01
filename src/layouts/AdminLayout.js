import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { HerbContext } from "../context/Context";


function AdminLayout() {
  const { state } = useContext(HerbContext);

  if (state.user.isAdmin) {
    return (
      <div>
  
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default AdminLayout;
