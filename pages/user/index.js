/** Module to create Link component */
import Link from "next/link";

/** Bring Layout from ../../components folder */
import Layout from "../../components/Layout";

import Private from "../../components/auth/Private";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pd-5">
              <h2>User Dashboard</h2>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/user/crud/blog">Create Blog</a>
                </li>
                <li className="list-group-item">
                  <Link href="/user/crud/blogs">
                    <a>Update/Delete Blogs</a>
                  </Link>
                </li>
                <li className="list-group-item">
                  <a href="/user/update">Update profile</a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">right</div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;