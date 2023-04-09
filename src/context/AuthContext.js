import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [dev, setDev] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [admin, setAdmin] = React.useState(false);
  const [logged, setLogged] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

  const refresh = async (data) => {
    if (busy) {
      setError("Still processing your last request");
      return;
    }

    isLoggedIn();
  };

  const isLoggedIn = async () => {
    if (busy) {
      setError("Still processing your last request");
      return;
    }

    setBusy(true);

    try {
      let userInfo = await AsyncStorage.getItem("authUser");

      if (userInfo) {
        user = JSON.parse(userInfo);

        setLogged(true);
        if (user.data.role == "admin") {
          setAdmin(true);
        } else if (user.data.role == "developer") {
          setDev(true);
        }
        setToken(user.token);
        setUserInfo(user.data);
      } else {
        setLogged(false);
        setAdmin(false);
        setDev(false);
        setToken(null);
        setUserInfo({});
      }
    } catch (error) {
      console.log(`is logged in error ${error}`);
      setError("Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  React.useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        busy,
        userInfo,
        error,
        token,
        logged,
        admin,
        refresh,
        dev,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
