import {useAuth0} from 'react-native-auth0';
import { Text } from 'react-native';

export const Profile = () => {
    const {user} = useAuth0();

    user? console.log(user.name) : console.log('Not loged in');

     return (
        <>
            {user && <Text>Logged in as {user.name}</Text>}
            {!user && <Text>Not logged in</Text>}
        </>
    )
}