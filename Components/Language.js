import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LanguageScreen extends React.Component {

    
    // setLanguageforAudio(lang){
    //    const languageSetting = lang;
    //    console.log("languageSetting: " + languageSetting);
    //    this.props.navigation.navigate('LevelScreen');
    // }

    render(){
        return(
            <View>
                <Button title="English" onPress={() => this.props.navigation.navigate('LevelScreen')}></Button>
                <Button title="Spanish"  onPress={() => this.props.navigation.navigate('LevelScreen')}></Button>
            </View>
        )
    }
}

export default LanguageScreen;