import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Signinform from "./_auth/forms/Signinform";

import Signupform from "./_auth/forms/Signupform";
import AuthLayout from "./_auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  PostsDetails,
  Profile,
  Saved,
  UpdateProfile,
  Home,
} from "./_root/pages";

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostsDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
