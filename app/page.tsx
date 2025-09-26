import Image from "next/image";
import { ThemeToggle } from "../components/ui/themeToggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">EduVerse</h1>
      <ThemeToggle />
    </div>
  );
}
