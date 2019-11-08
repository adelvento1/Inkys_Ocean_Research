import React from 'react';
import {View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles.js';
import img0 from '../assets/0.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import orange from '../assets/orange.png';
import blue from '../assets/blue.png';
import green from '../assets/green.png';
import purple from '../assets/purple.png';
import red from '../assets/red.png';
import yellow from '../assets/yellow.png';
import surpO from '../assets/orange_surp.png';
import surpR from '../assets/red_surp.png';
import surpY from '../assets/yellow_surp.png';
import surpP from '../assets/purple_surp.png';
import surpB from '../assets/blue_surp.png';
import surpG from '../assets/green_surp.png';

class LevelScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            num: 0,
            numImgArry: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9],
            microImgArry: [orange, blue, green, purple, red, yellow],
            surpMicroImgArry: [surpO, surpB, surpG, surpP, surpR, surpY],
            randImgArry: [orange, blue, purple, orange, red, green],
            correctAns: orange
        }
    }
    
/**
 * Following Method is currently not used and will be implemented at a later time 
 * to randomly populate the randImgArry full of other microOrganisms
 */

    randNum = max => {
        return (randMax = max) =>{
            var selection = Math.floor(Math.random() * (randMax - 1));
            console.log(selection);
            return this.state.microImgArry[selection];
        }
    }

/**
 * If the microOrganism is the correct answer, it counts it.
 * If not, it displays a surprised sprite for two second before returning to normal
 */
    countMicro = id => {
        return (ans = id) =>
        {
            if(this.state.randImgArry[ans] == this.state.correctAns){
            var newnum = this.state.num + 1;
            this.setState({
                num: newnum
            })
            } else {
                const oldImg = [ans, this.state.randImgArry[ans]];
                setTimeout(this.resetMicroImg(oldImg), 2000);
                this.setState({
                    randImgArry: this.state.randImgArry.map((elem, index) => {
                        if(index===ans) {
                            if(this.state.randImgArry[ans] == orange){
                                 return this.state.surpMicroImgArry[0]
                            } else if (this.state.randImgArry[ans] == blue){
                                return this.state.surpMicroImgArry[1]
                            } else if (this.state.randImgArry[ans] == green){
                            return this.state.surpMicroImgArry[2]
                            } else if (this.state.randImgArry[ans] == purple){
                                return this.state.surpMicroImgArry[3]
                            } else if (this.state.randImgArry[ans] == red){
                                return this.state.surpMicroImgArry[4]
                            } else if (this.state.randImgArry[ans] == yellow){
                                return this.state.surpMicroImgArry[5]
                            }
                        } else {
                            return elem
                        }
                        })
                    })
            }
        }
    }
/**
 * resets image of microOrganism to it's default state after 2 seconds of being surprised
 */
    resetMicroImg = oldImg => {
        return(resetImg = oldImg) =>{
            this.setState({
                randImgArry: this.state.randImgArry.map((elem, index) => {
                    if(index === resetImg[0]){
                        return resetImg[1];
                    } else {
                        return elem;
                    }
                })
            })
        }
    }

    render(){
        return(
            <View width='100%' height="100%">
                <Image 
                    style={{position: "absolute", width: '100%', height: '100%'}}
                    source={require('../assets/level_background.png')}
                />

                <TouchableOpacity onPress={this.countMicro(0)} disabled={false}>
                <Image
                    id='positionOne'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[0]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(1)}>
                <Image
                    id='positionTwo'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[1]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(2)}>
                 <Image
                    id='positionThree'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[2]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(3)}>
                 <Image
                    id='positionFour'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[3]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(4)}>
                 <Image
                    id='positionFive'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[4]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(5)}>
                 <Image
                    id='positionSix'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[5]} 
                />
                </TouchableOpacity>

                <Image
                    style={{width:85, height:115, position: "absolute", right: 10, top: 10}}
                    id="BubbleCount"
                    source={this.state.numImgArry[this.state.num]}
                />
            </View>
        )
    }
}

export default LevelScreen;