"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      console.log("Email verified successfully", response.data);
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log("Email verification failed", error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) verifyUserEmail();
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-white">
        {token ? `${token}` : "No token found"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified Successfully</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && <h2 className="text-2xl text-red-500">Error</h2>}
    </div>
  );
}
