import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



class EndPage extends React.Component {


    render() {
        return (
            <View width='100%' height='100%'>

               {/* <Image 
                    style={{width:'100%', height:'100%'}}
                    source={require('../assets/level_background.png')}
               /> */}

                <Button title="PlayAgain" onPress={() => this.props.navigation.navigate('LevelScreen')}></Button>

{/* 

                <TouchableOpacity style={{width:'100%', height: '100%' }}>
                    <Image
                        style={{left: 195, bottom: -10, width: 150, height: 150 }}
                        source={require('../assets/play_button.png')}
                    />
                </TouchableOpacity> */}

            </View>
        )
    }
}

export default EndPage;