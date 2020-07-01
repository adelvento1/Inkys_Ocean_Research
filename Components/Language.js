import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles.js';

class LanguageScreen extends React.Component {

    setLangForAudio = (lang) => {
        this.props.navigation.navigate('LevelScreen', { language: lang });
    }

    render() {
        return (
            <View style={styles.fullScreen}>
                <ImageBackground
                    style={[styles.fullScreen, { position: "absolute"}]}
                    source={require('../assets/main_background.png')}
                >
                <TouchableOpacity
                    style={{ top: '30%', left: '25%', width: 150 }}
                    onPress={() => this.setLangForAudio('English')}
                >
                    <Image style={{ width: 100, height: 100 }} source={require('../assets/eng_button.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ top: '50%', left: '45%', width: 150, height: 200 }}
                    onPress={() => this.setLangForAudio('Spanish')}
                >
                    <Image style={{ width: 100, height: 100 }} source={require('../assets/spa_button.png')} />
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

export default LanguageScreen;