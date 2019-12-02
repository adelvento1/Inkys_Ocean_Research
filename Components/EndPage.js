import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LangSetting from './LangSetting.js';


class EndPage extends React.Component {

    microFactSelect = (lang, color) => {
        LangSetting.microFacts(lang, color);
    }

    render() {
        return (
            <View>
                <Image
                    style={{ position: "absolute", "maxWidth": '100%', "maxHeight": '100%' }}
                    source={require('../assets/end_background.png')}
                />
                <TouchableOpacity style={{ top: '15%', left: '10%', width: '85%', height: '80%', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'column' }} disabled={true}>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "red")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/red.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "orange")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/orange.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "purple")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/purple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "green")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/green.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "yellow")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/yellow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "blue")}>
                        <Image style={{ width: 100, height: 100, opacity: .8 }} source={require('../assets/blue.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={{ bottom: '50%', left: '55%' }} onPress={() => this.props.navigation.navigate('LanguageScreen')}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require('../assets/replay_button.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default EndPage;