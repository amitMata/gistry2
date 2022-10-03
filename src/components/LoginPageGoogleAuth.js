import React from "react";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

export default function LoginPageGoogleAuth() {
  const [user, setUser] = useState({});

  useEffect(() => {
    function handleCallbackResponse(response) {
      var userObject = jwt_decode(response.credential);

      setUser(userObject);
    }

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "242411408051-3448jpj8n8tb78ttlb64u46260oikv54.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}
