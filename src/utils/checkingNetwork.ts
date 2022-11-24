import * as Network from "expo-network";
import { Alert } from "react-native";

const checkingNetwork = async () => {
  const result = await Network.getNetworkStateAsync();
  const isConnected = result.isConnected;
  if (!isConnected) {
    return Alert.alert(
      "Atenção",
      "Por favor, ative sua internet para utilizar o app.",
      [],
      {
        cancelable: false,
      }
    );
  }
};

export { checkingNetwork };
