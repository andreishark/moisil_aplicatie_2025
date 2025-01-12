'use client'

import React, { useState } from "react";
import { UserPlus, LogIn, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function DropdownMenuLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    if (Object.values(formData).every((value) => value.trim() !== "")) {
      setIsLoggedIn(true);
      alert("Successfully signed up!");
    }
  };

  const handleLogin = () => {
    if (Object.values(loginData).every((value) => value.trim() !== "")) {
      setIsLoggedIn(true);
      alert("Successfully logged in!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ name: "", dob: "", gender: "", email: "", password: "" });
    setLoginData({ email: "", password: "" });
    alert("Successfully logged out!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Join us!</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>More!</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {!isLoggedIn ? (
          <>
            {/* Sub-menu for Sign Up */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus />
                <span className="ml-2">Sign up</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-64">
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                      <Input name="dob" type="date" value={formData.dob} onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <Input name="password" type="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" />
                    </div>
                    <Button className="w-full" onClick={handleSignUp}>
                      Sign Up
                    </Button>
                  </div>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            {/* Sub-menu for Login */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <LogIn />
                <span className="ml-2">Login</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-64">
                  <div className="p-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <Input name="email" value={loginData.email} onChange={handleLoginInputChange} placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <Input name="password" type="password" value={loginData.password} onChange={handleLoginInputChange} placeholder="Enter your password" />
                    </div>
                    <Button className="w-full" onClick={handleLogin}>
                      Log In
                    </Button>
                  </div>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </>
        ) : (
          // Show Logout button when logged in
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              <span className="ml-2">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
