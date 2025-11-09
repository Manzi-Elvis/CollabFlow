import React from "react";
import { useState } from "react";

 export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
      return (
      <div>
            <h1>Login Page</h1>
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
                  <button type="submit">Login</button>
            </form>
      </div>
   );
 }