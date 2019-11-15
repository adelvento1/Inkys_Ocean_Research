import React from 'react';
import {View,Image} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
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

    /**
     * Initializes a default state for the first portion of the level
     */

    constructor() {
        super();
        this.state = {
            num: 0,
            numImgArry: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9],
            microImgArry: [orange, blue, green, purple, red, yellow],
            surpMicroImgArry: [surpO, surpB, surpG, surpP, surpR, surpY],
            randImgArry: [],
            correctAns: blue,
            numOfCorrectMicros: 0,
            levelNumber: 1,
            reloadFlag: false
        }
    }

    /**
     * Functions within componentDidMount will run automatically when the level starts up.
     * Currently calling choose correct to put in the first array
     */

    componentDidMount(){
        this.chooseCorrect();
    }

    componentDidUpdate(){
        if(this.state.reloadFlag === true){
            this.chooseCorrect();
        }
    }

/**
 * Randomizes which microorganism is the correct one and then calls to randomize the
 * array of micros to be displaysed that includes this correct one.
 * We are callnig the randomizeMicroShown class here so that it always executes
 * after the correct answer has been chosen
 */

    chooseCorrect = () => {
        var randomLength = Math.floor(Math.random() * (6 - 3) + 3);
        var ranIndex = Math.floor(Math.random() * (this.state.microImgArry.length - 1));
        var newCorrectMicro = this.state.microImgArry[ranIndex];
        this.randomizeMicroShown(randomLength, newCorrectMicro);
    }

/**
 * Creates a random array of microorganisms based on the number of correct micros that are being shown
 * and the number of total micros being shown.
 */

    randomizeMicroShown = (randomLength, newCorrectMicro) => {
        var numberOfCorrectMicros = Math.floor(Math.random() * (randomLength - 2) + 1);
        var indicesOfCorrectMicros = [];

        var x = 0;
        while(x < numberOfCorrectMicros){
            var randomIndexCorrect = Math.floor(Math.random() * (randomLength));
            if(indicesOfCorrectMicros.indexOf(randomIndexCorrect) === -1){
                indicesOfCorrectMicros.push(randomIndexCorrect);
                x++;
            }
        }

        for(var i = 0; i < this.state.microImgArry.length;i++){
            if(this.state.microImgArry[i] === newCorrectMicro){
                this.state.microImgArry.splice(i,1);
            }
        }
        console.log("RIPPU: " + this.state.microImgArry);

        for(var i = 0; i < randomLength; i++){
            var randomIndex = Math.floor(Math.random() * (this.state.microImgArry.length - 2));
            this.state.randImgArry.push(this.state.microImgArry[randomIndex]);
        }

        this.state.microImgArry.push(newCorrectMicro);

        for(var y = 0; y < indicesOfCorrectMicros.length; y++){
            this.state.randImgArry[indicesOfCorrectMicros[y]] = newCorrectMicro;
        }

        console.log("randomLength: " + randomLength);
        console.log("numCorrect: " + numberOfCorrectMicros);
        console.log("Indices correct " + indicesOfCorrectMicros);
        console.log("Array of random Guys: " + this.state.randImgArry);
        console.log("Correct Guy: " + newCorrectMicro);

        this.setState({
            numOfCorrectMicros: numberOfCorrectMicros,
            correctAns: newCorrectMicro,
            reloadFlag: false
        });
    }


/**
 * Following Method is currently not used and will be implemented at a later time 
 * to randomly populate the randImgArry full of other microOrganisms
 */

    randNum = max => {
        return (randMax = max) =>{
            var selection = Math.floor(Math.random() * (randMax - 1));
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
            if(newnum == this.state.numOfCorrectMicros){
                setTimeout(this.reloadMicros, 2000);
            }
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

    /**
     * this function runs at the completion of a level and is supposed to pull a new set of micros
     * Currently, upon completion, it sends to landing page upon completion of first level -- NEED EDITS
     */

    reloadMicros = () => {
        //Runs Audio about completing the level
        //Maybe animates them disappearing???
        var level = this.state.levelNumber + 1;
        if(level < 6){
            console.log("Good Job Buddy, you have counted them allll, lets go again!");
            this.setState({
                num: 0,
                levelNumber: level,
                numOfCorrectMicros: 0,
                randImgArry: [],
                reloadFlag: true
            });
        } else {
            this.setState({
                num: 0,
                levelNumber: 0,
                numOfCorrectMicros: 0,
                randImgArry: [],
                reloadFlag: true
            });
            this.props.navigation.navigate('EndPage');
        }
        
    }




    disableMicros = () => {
        for(var i = 0; i < 7; i++){
            // document.getElementById(i.toString).disabled=true;
            var j = i.toString;
            console.log(j);
            console.log("Micros are disabled");
        }
    }

    enableMicros = () => {
        for(var i = 0; i < 7; i++){
            // document.getElementById(i.toString).disabled=false;
            console.log("Micros are enabled");
        }
    }



    render(){
        return(
            <View width='100%' height="100%">
                <Image 
                    style={{position: "absolute", width: '100%', height: '100%'}}
                    source={require('../assets/level_background.png')}
                />

                <TouchableOpacity onPress={this.countMicro(0)} disabled={false} ref="0">
                <Image
                    id='positionOne'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[0]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(1)} disabled={false} ref="1">
                <Image
                    id='positionTwo'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[1]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(2)} disabled={false} ref="2">
                 <Image
                    id='positionThree'
                    style={styles.positionOne} 
                    source={this.state.randImgArry[2]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(3)} disabled={false} ref="3">
                 <Image
                    id='positionFour'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[3]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(4)} disabled={false} ref="4">
                 <Image
                    id='positionFive'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[4]} 
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.countMicro(5)} ref="5">
                 <Image
                    id='positionSix'
                    style={styles.positionFour} 
                    source={this.state.randImgArry[5]} 
                />
                </TouchableOpacity>

                <Image
                    id="BubbleCount"
                    style={{width:85, height:115, position: "absolute", right: 10, top: 10}}
                    source={this.state.numImgArry[this.state.num]}
                />

                <Image
                    id="visualAid"
                    style={{width:40, height:40, position: "absolute", right: 25, top: 125}}
                    source={this.state.correctAns}
                />
            </View>
        )
    }
}

export default LevelScreen;