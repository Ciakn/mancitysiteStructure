import { useAuth } from "../../Component/Hoc/AuthProvider";
import AdminLayout from "../../Layout/AdminLayout";
import Layout from "../../Layout/Layout";

const DashBord = () => {
  const user = useAuth();
  return (
    <Layout>
      <AdminLayout >
        {user ? (
          <div className="user_dashboard">
            <div>This is your Dashbord</div>
          </div>
        ) : (
      null
        )}
      </AdminLayout>
    </Layout>
  );
};

export default DashBord;
