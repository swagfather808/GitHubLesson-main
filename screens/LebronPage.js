import { View, Image } from 'react-native'
import MainButton from '../components/MainButton';

function LebronPage(props) {
    return (
        <View>
            <MainButton onPress={props.changeScreenBack}> I love Lebron</MainButton>
        </View>
    );

}

export default LebronPage; 