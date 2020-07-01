import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LangSetting from './LangSetting.js';
import styles from './styles.js';

class MainScreen extends React.Component {

    navigateToLangSelect = () => {
        this.props.navigation.navigate('LanguageScreen');
    }

    componentDidMount() {
        (() => LangSetting.titleRead())()
    }

    render() {
        return (
            <View>

                <TouchableOpacity style={styles.fullScreen} onPress={this.navigateToLangSelect}>
                    <Image
                        style={[styles.fullScreen, { position: "absolute"}]}
                        source={require('../assets/main_background.png')}
                    />
                    <Image
                        style={{ position: "absolute", left: '5%', top: '10%', width: 325, height: 125 }}
                        source={require('../assets/title_transp.png')}
                    />
                    <Image
                        style={{ position: "absolute", left: '-10%', bottom: '18%', width: 350, height: 270 }}
                        source={require('../assets/octopus_1.png')}
                    />
                    <Image
                        style={{ position: "absolute", left: '55%', bottom: '5%', width: 150, height: 150 }}
                        source={require('../assets/play_button.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default MainScreen;