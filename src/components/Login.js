// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  //console.log("location: " + JSON.stringify(location));
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    //console.log('route', route);
    //console.log("from: " + from);
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}