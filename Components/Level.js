import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LangSetting from './LangSetting.js';
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
     * Initializes a default state for a level
     */

    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            numImgArry: [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9],
            microImgArry: [orange, blue, green, purple, red, yellow],
            surpMicroImgArry: [surpO, surpB, surpG, surpP, surpR, surpY],
            randImgArry: [],
            correctAns: blue,
            numOfCorrectMicros: 0,
            levelNumber: 1,
            reloadFlag: false,
            isDisabled: [false, false, false, false, false, false, false, false, false],
            alignmentLeft: '45%',
            opacityTracker: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            languageTag: this.props.navigation.getParam('language', ''),
            colorForInstruct: ["orange", "blue", "green", "purple", "red", "yellow"]
        }
    }

    /**
     * Functions within componentDidMount will run automatically when the level starts up.
     * Currently calling choose correct to put in the first array
     */

    componentDidMount() {
        this.chooseCorrect();
    }

    componentDidUpdate() {
        if (this.state.reloadFlag === true) {
            this.chooseCorrect();
        }

    }

    /**
     * Randomizes which microorganism is the correct one and then calls to randomize the
     * array of micros to be displaysed that includes this correct one.
     * We are callnig the randomizeMicroShown class here so that it always executes
     * after the correct answer has been chosen
     */

    chooseCorrect = async () => {
        let randomLength;
        if (this.state.levelNumber < 4) {
            randomLength = Math.floor(Math.random() * (5 - 3) + 3);
        } else {
            randomLength = Math.floor(Math.random() * (9 - 5) + 5);
        }
        var ranIndex = Math.floor(Math.random() * (this.state.microImgArry.length - 1));
        var newCorrectMicro = this.state.microImgArry[ranIndex];
        this.randomizeMicroShown(randomLength, newCorrectMicro);
    }

    /**
     * Creates a random array of microorganisms based on the number of correct micros that are being shown
     * and the number of total micros being shown.
     */

    randomizeMicroShown = (randomLength, newCorrectMicro) => {
        let numberOfCorrectMicros;
        if (this.state.levelNumber < 4) {
            numberOfCorrectMicros = Math.floor(Math.random() * (randomLength - 1) + 1);
        } else {
            numberOfCorrectMicros = Math.floor(Math.random() * (randomLength - 4) + 4);
        }
        let indicesOfCorrectMicros = [];

        var alignmentVar = '0%';
        if (randomLength < 4) {
            alignmentVar = '35%';
        } else if (randomLength < 7) {
            alignmentVar = '25%';
        } else { alignmentVar = '15%'; }

        var x = 0;
        while (x < numberOfCorrectMicros) {
            var randomIndexCorrect = Math.floor(Math.random() * (randomLength));
            if (indicesOfCorrectMicros.indexOf(randomIndexCorrect) === -1) {
                indicesOfCorrectMicros.push(randomIndexCorrect);
                x++;
            }
        }
        let removedColor = " ";
        for (var i = 0; i < this.state.microImgArry.length; i++) {
            if (this.state.microImgArry[i] === newCorrectMicro) {
                this.state.microImgArry.splice(i, 1);
                removedColor = this.state.colorForInstruct[i];
                this.state.colorForInstruct.splice(i, 1);
            }
        }

        for (var i = 0; i < randomLength; i++) {
            var randomIndex = Math.floor(Math.random() * (this.state.microImgArry.length - 2));
            this.state.randImgArry.push(this.state.microImgArry[randomIndex]);
        }

        this.state.microImgArry.push(newCorrectMicro);
        this.state.colorForInstruct.push(removedColor);

        console.log("MicroImg: " + this.state.microImgArry + ". ColorInstr: " + this.state.colorForInstruct + " LVL: " + this.state.levelNumber);
        if (this.state.levelNumber === 0) {
            //Dont play Instruction audio on any page outside of the levels
        } else { LangSetting.levelInstruct(this.state.languageTag, removedColor); }

        for (var y = 0; y < indicesOfCorrectMicros.length; y++) {
            this.state.randImgArry[indicesOfCorrectMicros[y]] = newCorrectMicro;
        }

        this.setState({
            numOfCorrectMicros: numberOfCorrectMicros,
            correctAns: newCorrectMicro,
            reloadFlag: false,
            alignmentLeft: alignmentVar
        });
    }


    /**
     * Following Method is currently not used and will be implemented at a later time 
     * to randomly populate the randImgArry full of other microOrganisms
     */

    randNum = max => {
        return (randMax = max) => {
            var selection = Math.floor(Math.random() * (randMax - 1));
            return this.state.microImgArry[selection];
        }
    }

    /**
     * If the microOrganism is the correct answer, it counts it.
     * If not, it displays a surprised sprite for two second before returning to normal
     */
    countMicro = id => {
        return (ans = id) => {
            if (this.state.randImgArry[ans] == this.state.correctAns) {
                var newnum = this.state.num + 1;
                var updatedIsDisabled = this.state.isDisabled;
                updatedIsDisabled[id] = true;
                this.grayOut(id);
                LangSetting.sayNumber(this.state.languageTag, newnum);
                if (newnum == this.state.numOfCorrectMicros) {
                    this.disableMicros();
                    if (this.state.levelNumber === 5) { LangSetting.gameComplete(this.state.languageTag); }
                    else { LangSetting.rightAnswer(this.state.languageTag); }
                    setTimeout(this.reloadMicros, 4000);
                }
                this.setState({
                    num: newnum,
                    isDisabled: updatedIsDisabled
                })
            } else {
                const oldImg = [ans, this.state.randImgArry[ans]];
                LangSetting.wrongAnswer(this.state.languageTag);
                this.disableMicros();
                setTimeout(this.resetMicroImg(oldImg), 2000);
                this.setState({
                    randImgArry: this.state.randImgArry.map((elem, index) => {
                        if (index === ans) {
                            if (this.state.randImgArry[ans] == orange) {
                                return this.state.surpMicroImgArry[0]
                            } else if (this.state.randImgArry[ans] == blue) {
                                return this.state.surpMicroImgArry[1]
                            } else if (this.state.randImgArry[ans] == green) {
                                return this.state.surpMicroImgArry[2]
                            } else if (this.state.randImgArry[ans] == purple) {
                                return this.state.surpMicroImgArry[3]
                            } else if (this.state.randImgArry[ans] == red) {
                                return this.state.surpMicroImgArry[4]
                            } else if (this.state.randImgArry[ans] == yellow) {
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
        return (resetImg = oldImg) => {
            this.enableMicros();
            this.setState({
                randImgArry: this.state.randImgArry.map((elem, index) => {
                    if (index === resetImg[0]) {
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
        var level = this.state.levelNumber + 1;
        var isDisabledReset = [];
        var opacityReset = [];
        for (var i = 0; i < 10; i++) {
            isDisabledReset.push(false);
            opacityReset.push(1);
        }
        if (level < 6) {
            this.setState({
                num: 0,
                levelNumber: level,
                numOfCorrectMicros: 0,
                randImgArry: [],
                reloadFlag: true,
                isDisabled: isDisabledReset,
                opacityTracker: opacityReset
            });
        } else {
            this.setState({
                num: 0,
                levelNumber: 0,
                numOfCorrectMicros: 0,
                randImgArry: [],
                reloadFlag: true,
                isDisabled: isDisabledReset,
                opacityTracker: opacityReset
            });
            this.props.navigation.navigate('EndPage', { languageTag: this.state.languageTag });
        }

    }


    disableMicros = () => {
        var updatedIsDisabled = [];
        for (var i = 0; i < this.state.isDisabled.length; i++) {
            updatedIsDisabled[i] = true;
        }
        this.setState({
            isDisabled: updatedIsDisabled
        });
    }

    enableMicros = () => {
        var updatedIsDisabled = [];
        for (var i = 0; i < this.state.isDisabled.length; i++) {
            updatedIsDisabled[i] = false;
        }
        this.setState({
            isDisabled: updatedIsDisabled
        });
    }

    /**
     * Works in changing the value, it just isnt syncing for some reason
     */

    grayOut = (id) => {
        let opacityChange = this.state.opacityTracker;
        opacityChange[id] = 0.5;
        this.setState({
            opacityTracker: opacityChange
        });
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Image
                    style={{ position: "absolute", width: '100%', height: '100%' }}
                    source={require('../assets/level_background.png')}
                />

                <Image
                    id="Card"
                    style={{ width: 105, height: 160, position: "absolute", right: 5, top: 5 }}
                    source={require('../assets/card.png')}
                />

                <Image
                    id="BubbleCount"
                    style={{ width: 85, height: 115, position: "absolute", right: 10, top: 10 }}
                    source={this.state.numImgArry[this.state.num]}
                />

                <Image
                    id="visualAid"
                    style={{ width: 40, height: 40, position: "absolute", right: 35, top: 125 }}
                    source={this.state.correctAns}
                />
                <View style={{ top: '30%', left: this.state.alignmentLeft, width: '100%', height: '45%', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>

                    <TouchableOpacity onPress={this.countMicro(0)} disabled={this.state.isDisabled[0]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[0] }}
                            source={this.state.randImgArry[0]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(1)} disabled={this.state.isDisabled[1]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[1] }}
                            source={this.state.randImgArry[1]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(2)} disabled={this.state.isDisabled[2]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[2] }}
                            source={this.state.randImgArry[2]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(3)} disabled={this.state.isDisabled[3]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[3] }}
                            source={this.state.randImgArry[3]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(4)} disabled={this.state.isDisabled[4]}>
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[4] }}
                            source={this.state.randImgArry[4]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(5)} disabled={this.state.isDisabled[5]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[5] }}
                            source={this.state.randImgArry[5]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(6)} disabled={this.state.isDisabled[6]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[6] }}
                            source={this.state.randImgArry[6]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(7)} disabled={this.state.isDisabled[7]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[7] }}
                            source={this.state.randImgArry[7]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.countMicro(8)} disabled={this.state.isDisabled[8]} >
                        <Image
                            style={{ width: 75, height: 75, opacity: this.state.opacityTracker[8] }}
                            source={this.state.randImgArry[8]}
                        />
                    </TouchableOpacity>


                </View>

            </View>
        )
    }
}

export default LevelScreen;