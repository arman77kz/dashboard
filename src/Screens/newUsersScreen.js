
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import NewUsers from "../components/newUsers/newUsers";
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from "../redux/actions";

const NewUsersScreen = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const lastUser = users.length > 0 ? users[users.length - 1] : null;

    useEffect(() => {
        const fetchUsersData = () => {
            try {
                const data = require('../assets/data.json'); 
                const fetchedUsers = data.users;

                dispatch(setUsers(fetchedUsers));
            } catch (error) {
                console.error('Error fetching users data:', error);
            }
        };

        fetchUsersData();
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {lastUser && (
                <NewUsers name={lastUser.name} item={lastUser.item} avatar={lastUser.avatar} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    }
});

export default NewUsersScreen;
