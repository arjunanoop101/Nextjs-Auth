"use client";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("null");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout success", response.data);
      toast.success("Logout successful 👋");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout failed");
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data.user.username);
      setData(response.data.user.username);
      toast.success("User data fetched 🎉");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Failed to fetch user data");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">Profile</h1>
        <p className="text-gray-700 text-lg">
          Welcome,{" "}
          <span className="font-semibold text-indigo-600">
            {data !== "null" ? data : "Guest"}
          </span>
        </p>

        <button
          onClick={getUserDetails}
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300"
        >
          Get User Data
        </button>

        {data !== "null" && (
          <Link
            href={`/profile/${data}`}
            className="text-indigo-500 hover:underline"
          >
            View full profile
          </Link>
        )}

        <button
          onClick={logout}
          className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
