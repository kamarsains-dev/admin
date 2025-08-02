'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => { 
    router.push('/home')
  }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <main className="flex flex-col">
        <div>
          Kamar Sains Admin Page
        </div>
        <Button onClick={handleClick}>
          Login
        </Button>
      </main>
    </div>
  );
}
