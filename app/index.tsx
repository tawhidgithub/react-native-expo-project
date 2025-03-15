import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import DashBoard from "./Modules/DashBoard/DashBoard";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      <DashBoard />
    </>
  );
}
