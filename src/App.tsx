import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Signinform from "./_auth/forms/Signinform";

import Signupform from "./_auth/forms/Signupform";
import Home from "./_root/Home";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Routes
        it means you have to write the routes which you want to show everyone ex- sign in and sign out routes */}

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signinform />} />
          <Route path="/sign-up" element={<Signupform />} />
        </Route>

        {/* private Routes
        but here you have to write the route you can see only if you sign in  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
