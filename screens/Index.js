import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import MainTabNavigator from "../navigation/MainTabNavigator";

export default function Index() {
  const userName = useSelector((state) => state.user.userName);

  return <>{userName ? <MainTabNavigator /> : <Login />}</>;
}
