import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class LanguageScreen extends React.Component {

    setLangForAudio = (lang) => {
        this.props.navigation.navigate('LevelScreen', {languageT: lang});
    }

    onpress = (lang) => {this.setLangForAudio(lang)}

    render(){
        return(
            <View style={{width: '100%', height: '100%'}}>
                <Image
                    style={{position:"absolute", width: '100%', height: '100%'}}
                    source={require('../assets/main_background.png')}
                />
                <TouchableOpacity style={{top: '30%', left: '25%'}} onPress={() => this.onpress('English')}>
                    <Image style={{ width: 100, height: 100 }} source={require('../assets/eng_button.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{top: '50%', left: '45%'}} onPress={() => this.onpress('Spanish')}>
                    <Image style={{width: 100, height: 100}}  source={require('../assets/spa_button.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default LanguageScreen;