import React from "react";
import {View,Text,Image} from 'react-native'
import NewUsers from "../components/newUsers/newUsers";


const NewUsersScreen = () => (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9',alignItems:'center' }} >

            <NewUsers/>
    </View>
);  

export default NewUsersScreen