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
    carBrand: {
        fontSize: 18,
        fontWeight: "400",
        color: "#fff",
        fontStyle: "italic",
    },
    carName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        flex: 1,
        marginBottom: 10,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    priceLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 10,
        marginTop: 10,
    },
    priceLabel: {
        fontSize: 22,
        color: "#fff",
    },
    });

export default styles;