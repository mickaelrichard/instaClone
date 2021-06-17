import { useEffect } from "react";
import Header from "../components/Header";
export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found ";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <p className="text-2xl text-center">Not Found!</p>
      </div>
    </div>
  );
}
