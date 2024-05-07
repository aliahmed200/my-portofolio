import React from "react";
import notfound from "../../Assets/notfound.jpg";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      <img src={notfound} className="w-[700px]" alt="not found page" />
    </div>
  );
}
