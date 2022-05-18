import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "./../firebase.init";
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/add-todos");
  }
  return (
    <div className="flex justify-center py-14">
      <div className="">
        <button class="btn btn-success mt-5" onClick={() => signInWithGoogle()}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
