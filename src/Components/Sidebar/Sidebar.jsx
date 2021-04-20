import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import {AiOutlineUnorderedList,AiFillMessage,AiOutlineShoppingCart,AiOutlinePlus, AiOutlineUserAdd} from "react-icons/ai"; 
import {SiGoogletagmanager} from 'react-icons/si';
import {BrowserRouter as Router,Switch,Route,Link,NavLink,
} from "react-router-dom";
import AddReview from "./ForUser/AddReview/AddReview";
import Home from "../../Pages/Home/Home";
import AddService from "../../Pages/SiderBarComponents/AddService/AddService";
import MakeAdmin from "../../Pages/SiderBarComponents/MakeAdmin/MakeAdmin";
import { UserContext } from "../../App";

const routesWithCom = [
  {
    path: "/admin/book",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/admin/booking-list",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/admin/review",
    sidebar: () => <AddReview />,
    main: () => <h2>Shoelaces</h2>,
  },

  {
    path: "/admin/orderlist",
    sidebar: () => <h3> I am orderlist</h3>,
    main: () => <h2>order</h2>,
  },
  {
    path: "/admin/addservice",
    sidebar: () => <AddService/>,
    main: () => <h2>service</h2>,
  },
  {
    path: "/admin/addadmin",
    sidebar: () => <MakeAdmin/> ,
    main: () => <h2>add admin</h2>,
  },
  {
    path: "/admin/manage",
    sidebar: () => <h3>I am manage</h3>,
    main: () => <h2>manage</h2>,
  }
];

const link = (
  <Link className="book-link" to="/">
    <button className="btn style">Go to home</button>
  </Link>
);

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);
    // from context
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // getAdmin
  useEffect(() => {
    fetch('http://localhost:5500/isAdmin', {
      method: 'POST',
      headers: {"content-type": "application/json",},
      body: JSON.stringify({email: loggedInUser.email}),
    })
    .then((res) => res.json())
    .then(data => setIsAdmin(data));

  }, [])





  return (
    <>
      <Router>
        <section className="sidebar-main-area">
          <div className="sidebar-left-main-part">
            <h1>Fast. Cleaner</h1>

            {!isAdmin ? (
              <div className="">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/book"
                  className="action-flex"
                >
                  <AiOutlineShoppingCart className="action-icon" />
                  <p>Book</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/booking-list"
                  className="action-flex"
                >
                  <AiOutlineUnorderedList className="action-icon" />
                  <p>Booking List</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/review"
                  className="action-flex"
                >
                  <AiFillMessage className="action-icon" />
                  <p>Review</p>
                </NavLink>
              </div>
            ) : (
              <div className="">
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/orderlist"
                  className="action-flex"
                >
                  <AiOutlineUnorderedList className="action-icon" />
                  <p>Order list</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/addservice"
                  className="action-flex"
                >
                  <AiOutlinePlus className="action-icon" />
                  <p>Add Service</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/addadmin"
                  className="action-flex"
                >
                  <AiOutlineUserAdd className="action-icon" />
                  <p>Make Admin</p>
                </NavLink>

                <NavLink
                  style={{ textDecoration: "none" }}
                  activeClassName={"bg"}
                  to="/admin/manage"
                  className="action-flex"
                >
                  <SiGoogletagmanager className="action-icon" />
                  <p>Manage</p>
                </NavLink>
              </div>
            )}
          </div>

          <div className="all-info-part">
            <div className="appbar">{link}</div>

            <div className="info-main-part-here">
              <Switch>
                {routesWithCom.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Sidebar;
