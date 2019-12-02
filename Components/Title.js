import React from 'react';
import { View, Image} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import LangSetting from './LangSetting.js';

class MainScreen extends React.Component {

    onPress = () => {
        this.props.navigation.navigate('LanguageScreen');
    }

    componentDidMount() {
       this.readTitle();
    }

    readTitle = () => {
        LangSetting.titleRead();
    }

    render(){
        return(
            <View>
                
                <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={this.onPress}>
                <Image
                    style={{position:"absolute", width: '100%', height: '100%'}}
                    source={require('../assets/main_background.png')}
                />
                <Image 
                    style={{position:"absolute", left: '5%', width: 325, height: 125}} 
                    source={require('../assets/title_transp.png')} 
                />
                <Image 
                    style={{position:"absolute", left: '-10%', bottom: '22%', width: 350, height: 270}} 
                    source={require('../assets/octopus_1.png')}
                /> 
                <Image 
                    style={{position:"absolute", left: '55%', bottom: '5%', width: 150, height: 150}} 
                    source={require('../assets/play_button.png')}
                />
                </TouchableOpacity>
            </View>
        )
    }
}

export default MainScreen;