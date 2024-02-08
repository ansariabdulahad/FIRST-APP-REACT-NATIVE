import { useEffect } from "react";
import { Text, View } from "react-native";

const Profile = ({ navigation, route }) => {
    const { params } = route;

    // HOW TO SET OPTIONS WITHIN COMPONENT USING setOptions
    useEffect(() => {
        navigation.setOptions({
            // title: params.name,
            headerRight: () => {
                return <Text>{params.name}</Text>
            }
        })
    }, [params]);

    return (
        <View
            style={{
                margin: 12,
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#ccc"
            }}
        >
            <Text>Name: {params.name}</Text>
            <Text>Email: {params.email}</Text>
            <Text>Password: {params.password}</Text>
            <Text>Mobile: {params.mobile}</Text>
            <Text>Address: {params.address}</Text>
        </View>
    );
}

export default Profile;