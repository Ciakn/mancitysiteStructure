import AdmiNav from "../Admin/nav/AdmiNav";

import { useAuth } from "../Component/Hoc/AuthProvider";
const AdminLayout = ({ children }) => {
    const user = useAuth();
  return (
  <>{user ?   <div className="admin_container">
  <div className="admin_left_nav">
    <AdmiNav />
  </div>
  <div className="admin_right">
    <h2>DashBoard</h2>
    {children}
  </div>
</div>:    <div className="err">NOT FOUD 404 ERROR </div> }</>
  );
};

export default AdminLayout;
