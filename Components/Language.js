import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LanguageScreen extends React.Component {


    render(){
        return(
            <View>
                <Button title="English" onPress={() => this.props.navigation.navigate('Level')}></Button>
                <Button title="Spanish" onPress={() => this.props.navigation.navigate('Level')}></Button>
            </View>
        )
    }
}

export default LanguageScreen;