import { Text, View } from "react-native";
import SplashScreen from "./Modules/Splash Screen/SplashScreen";
import { useEffect, useState } from "react";
import HomeScreen from "@/app/Modules/Home Screen/HomeScreen";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return <>{isLoading ? <SplashScreen /> : <HomeScreen />}</>;
}
