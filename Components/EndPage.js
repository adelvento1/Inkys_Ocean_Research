import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LangSetting from './LangSetting.js';


class EndPage extends React.Component {

    constructor() {
        super();
        this.state = {
            isDisabled: false,
            opacity: .8,
            flip: 0
        }
    }

    componentDidUpdate() {
        if (this.state.flip === 1) {
            this.changeEnabled();
        }
    }

    componentDidMount() {
        LangSetting.endInst(this.props.navigation.getParam('languageTag', ''));
    }

    microFactSelect = async (lang, color) => {
        this.changeEnabled()
        this.timer()
        LangSetting.microFacts(lang, color)
    }

    timer = async () => {
        let y = 1
        await setTimeout(() => {
            this.setState({
                flip: y
            });
        }, 12000);
    }

    changeEnabled() {
        let disabled = false;
        let op = 0;
        if (this.state.flip === 1) {
            disabled = false;
            op = .8;
            this.setState({
                isDisabled: disabled,
                opacity: op,
                flip: 0
            });
        } else if (this.state.flip === 0) {
            disabled = true;
            op = .3;
            this.setState({
                isDisabled: disabled,
                opacity: op
            });
        }
    }

    render() {
        return (

            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../assets/end_background.png')}>

                <TouchableOpacity style={{ top: '15%', left: '10%', width: '85%', height: '70%', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'column' }} disabled={true}>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "red")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/red.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "orange")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/orange.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "purple")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/purple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "green")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/green.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "yellow")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/yellow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.isDisabled} onPress={() => this.microFactSelect(this.props.navigation.getParam('languageTag', ''), "blue")}>
                        <Image style={{ width: 100, height: 100, opacity: this.state.opacity }} source={require('../assets/blue.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity disabled={this.state.isDisabled} style={{ bottom: '50%', left: '55%', opacity: this.state.opacity }} onPress={() => this.props.navigation.navigate('LanguageScreen')}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require('../assets/replay_button.png')}
                    />
                </TouchableOpacity>
            </ImageBackground>

        )
    }
}

export default EndPage;