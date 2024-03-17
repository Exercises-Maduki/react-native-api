import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 10,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode: "contain",
    },
    });

export default styles;