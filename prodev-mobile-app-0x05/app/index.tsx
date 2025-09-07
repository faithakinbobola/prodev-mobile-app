import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");

export default function Index() {
const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/images/hero-icon.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.companyLogo}>
            <Image source={require("@/assets/images/logo.png")} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          <View style={{ position: "absolute", bottom: 100, width: "100%" }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => router.push("/join")}>
                <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton} activeOpacity={0.7} onPress={() => router.push("/signin")}>
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ alignItems: "center", paddingVertical: 20 }} activeOpacity={0.7} onPress={() => router.push("/(home)")} >
              <Text style={{ color: "white" }}>Continue to home</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: width,
    height: height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "200",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    backgroundColor: "white",
    fontSize: 20,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  safeArea: {
    flex: 1,
  },
});
