import React from "react";
import Login from "./login"
import { useState } from "react";

 export default function SignUp() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      return (
      <div>
            <h1>Sign Up Page</h1>
            <form action="">
                  <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="submit">Sign Up</button>
            </form>
      </div>
   );
 }