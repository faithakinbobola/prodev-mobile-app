import { styles } from "@/styles/_joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={require('@/assets/images/logo-green.png')} />
                </View>
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Create Your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>Enter your details to create a new account</Text>
                </View>
                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput keyboardType="email-address" style={styles.formControl} />
                    </View>
                    <View>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.formLabel}>Confirm Password</Text>
                        <View>
                            <TextInput style={styles.formPasswordControl} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>

                    <View style={styles.dividerGroup}>
                        <View style={styles.divider}></View>
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider}></View>
                    </View>

                    <View style={styles.secondaryButtonGroup}>
                        <View style={styles.secondaryButton}>
                            <Image source={require("@/assets/images/google.png")} />
                            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                        </View>
                        <View style={styles.secondaryButton}>
                            <Image source={require("@/assets/images/facebook.png")} />
                            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>Don't have an account?</Text>
                    <Text style={styles.signupSubTitleText}>Sign in</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}