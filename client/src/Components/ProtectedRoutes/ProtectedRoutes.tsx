import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
	const isSigned = true; //TODO Building services or context to controll this.
	return !isSigned ? <Redirect to='/' /> : <Route {...props} />;
};

export default ProtectedRoute;
