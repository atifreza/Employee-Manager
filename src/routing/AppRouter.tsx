import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const Login = lazy(() => import("../containers/Login"));
const PageNotFound = lazy(() => import("../components/PageNotFound/PageNotFound"));
const Dashboard = lazy(() => import("../containers/Dashboard"));


const AppRouter: React.FC = () => {
    const { userLoginDetails } = useSelector((state: any) => state.loginInData);
    const userDetails = Object.keys(userLoginDetails).length

    return (
        <>
            <Suspense
                fallback={
                    <div>
                        Loading....
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Login userDetails={userDetails} />} />
                    <Route element={<PrivateRoutes />} >
                        <Route path="/home" element={<Dashboard />} />
                        <Route path="/chart" element={<Dashboard />} />
                    </Route>
                    <Route path="/page_not_found" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRouter;
