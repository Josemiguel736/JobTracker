"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("rememberMe") as string;

    const result = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ email, password, rememberMe }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();
    if (!response.success) {
      setLoginError("Email o contraseña incorrectos");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/dashboard");
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
          Correo electrónico
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="pl-10 h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
            required
          />
        </div>
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-medium text-slate-700"
        >
          Contraseña
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="pl-10 pr-10 h-12 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember me and forgot password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            name="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) =>
              handleInputChange("rememberMe", checked as boolean)
            }
          />
          <Label htmlFor="remember" className="text-sm text-slate-600">
            Recordarme
          </Label>
        </div>
        <Button
          variant="link"
          className="text-sm text-cyan-600 hover:text-cyan-700 p-0"
        >
          ¿Olvidaste tu contraseña?
        </Button>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Iniciando sesión...</span>
          </div>
        ) : (
          "Iniciar sesión"
        )}
      </Button>

      {loginError && (
        <p className="text-sm text-red-500 text-center">{loginError}</p>
      )}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-slate-500">O continúa con</span>
        </div>
      </div>

      {/* Social login buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="h-12 border-slate-200 hover:text-black hover:bg-slate-50 bg-transparent"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 border-slate-200 hover:text-black hover:bg-slate-50 bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="2 1 20 20"
            fill="currentColor"
          >
            <path d="M1.993,11.993c0-5.52,4.48-10,10-10	s10,4.48,10,10c0,4.48-2.947,8.267-7,9.547v-4.534c0-0.413-0.08-0.786-0.227-1.133l-0.16-0.333l0.147-0.04	c1.853-0.72,3.24-2.186,3.24-4c0-0.96-0.4-1.84-1.053-2.546L16.846,8.86l0.067-0.387c0.08-0.653,0.107-1.32,0.053-2.013l-0.053-0.64	l-0.6,0.2c-0.68,0.227-1.347,0.533-1.973,0.934l-0.4,0.293l-0.28-0.066c-0.533-0.12-1.093-0.187-1.667-0.187	S10.859,7.06,10.326,7.18l-0.28,0.066l-0.4-0.293c-0.627-0.4-1.293-0.707-1.973-0.934l-0.6-0.2L7.019,6.46	C6.966,7.154,6.993,7.82,7.073,8.473L7.139,8.86L7.033,8.954c-0.64,0.706-1.04,1.587-1.04,2.546c0,1.814,1.373,3.28,3.24,4	l0.147,0.053l-0.173,0.32c-0.133,0.346-0.213,0.72-0.213,1.12H7.499c-0.253,0-0.493-0.133-0.773-0.48	c-0.28-0.347-0.547-0.84-0.8-1.267l-0.267-0.44l-0.853,0.52l0.253,0.426c0.293,0.493,0.547,0.973,0.893,1.4	c0.36,0.44,0.853,0.84,1.547,0.84h1.493v3.547C4.939,20.26,1.993,16.473,1.993,11.993z"></path>
          </svg>
          GitHub
        </Button>
      </div>
    </form>
  );
}
