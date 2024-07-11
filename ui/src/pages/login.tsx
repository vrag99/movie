import LoginCard from "@/components/login";
import loginBg from "@/assets/login-bg.jpg";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loginBg} className="absolute inset-0 object-cover -z-30 w-full h-full" />
      <div className="absolute h-full w-full bg-gradient-to-t from-background from-[40%] -z-10 inset-0 to-primary/10 "></div>
      <LoginCard />
    </div>
  );
}
