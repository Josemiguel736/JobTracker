"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function LoggedHeader() {
  const router = useRouter();

  const logout = async () => {
    const response = await fetch("/api/singout", {
      method: "POST",
    });
    const data = await response.json();
    if (data.success) {
      router.push("/");
    }
  };

  return (
    <Link href="/">
      <Button
        onClick={logout}
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Cerrar sesión
      </Button>
    </Link>
  );
}
