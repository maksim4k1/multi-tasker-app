import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { connect } from "react-redux"
import publicRoutes from "../routes/publicRoutes";
import privateRoutes from "../routes/privateRoutes";
import generalRoutes from "../routes/generalRoutes";

function AppRoutes ({isAuth}) {
  const [routes, setRoutes] = useState([...generalRoutes, ...publicRoutes, ...privateRoutes]);

  useEffect(() => {
    if(isAuth === true){
      setRoutes([...generalRoutes, ...privateRoutes]);
    } else{
      setRoutes([...generalRoutes, ...publicRoutes]);
    }
  }, [isAuth, setRoutes]);

  return(
    <Routes>
      {
        routes.map((route, index) => {
          return <Route key={index} {...route} />
        })
      }
      <Route path="*" element={<Navigate replace to="/error/404" />} />
    </Routes>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(AppRoutes);