import { Audio } from 'expo-av';
import AudioEng from './AudioEng.js';
import AudioSpa from './AudioSpa.js';
export default {

  //Call when all the correct answer is selected
  rightAnswer: async (lang) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      await audioLine.loadAsync(AudioEng.rightAnswer1)
    }
    else if (lang === "Spanish") {
      await audioLine.loadAsync(AudioSpa.rightAnswer1)
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 6000);
  },

  //Call when then last level is completed
  gameComplete: async (lang) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      await audioLine.loadAsync(AudioEng.EndGame1)
    }
    else if (lang === "Spanish") {
      await audioLine.loadAsync(AudioSpa.EndGame1)
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 6000);
  },

  //call a title line (every 10 seconds)
  titleLine: async (lang, y) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      if (y === 1) {
        await audioLine.loadAsync(AudioEng.clickPlay)
      }
      else if (y === 2) {
        await audioLine.loadAsync(AudioEng.letsPlay)
      }
    }
    else if (lang === "Spanish") {
      if (y === 1) {
        await audioLine.loadAsync(AudioSpa.clickPlay)
      }
      else if (y === 2) {
        await audioLine.loadAsync(AudioSpa.letsPlay)
      }
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 6000);
  },

  //call reading the title a second after the app loads
  titleRead: async () => {
    const audioLine = new Audio.Sound();
    await audioLine.loadAsync(AudioEng.title)
    await audioLine.playAsync()
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 6000)
  },

  //call line when you click on the wrong answer
  wrongAnswer: async (lang) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      await audioLine.loadAsync(AudioEng.wrongAnswer1)
    } else if (lang === "Spanish") {
      await audioLine.loadAsync(AudioSpa.wrongAnswer1)
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 6000);

  },

  //call lines of information for each micro when you tap on them in the final screen
  microFacts: async (lang, color) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      if (color === "red") {
        await audioLine.loadAsync(AudioEng.redInfo)
      } else if (color === "blue") {
        await audioLine.loadAsync(AudioEng.blueInfo)
      } else if (color === "green") {
        await audioLine.loadAsync(AudioEng.greenInfo)
      } else if (color === "purple") {
        await audioLine.loadAsync(AudioEng.purpleInfo)
      } else if (color === "yellow") {
        await audioLine.loadAsync(AudioEng.yellowInfo)
      } else if (color === "orange") {
        await audioLine.loadAsync(AudioEng.orangeInfo)
      }
    } else if (lang === "Spanish") {
      if (color === "red") {
        await audioLine.loadAsync(AudioSpa.redInfo)
      } else if (color === "blue") {
        await audioLine.loadAsync(AudioSpa.blueInfo)
      } else if (color === "green") {
        await audioLine.loadAsync(AudioSpa.greenInfo)
      } else if (color === "purple") {
        await audioLine.loadAsync(AudioSpa.purpleInfo)
      } else if (color === "yellow") {
        await audioLine.loadAsync(AudioSpa.yellowInfo)
      } else if (color === "orange") {
        await audioLine.loadAsync(AudioSpa.orangeInfo)
      }
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 16500);
  },

  //Call the number that is pressed
  sayNumber: async (lang, num) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      if (num === 1) {
        await audioLine.loadAsync(AudioEng.one)
      } else if (num === 2) {
        await audioLine.loadAsync(AudioEng.two)
      } else if (num === 3) {
        await audioLine.loadAsync(AudioEng.three)
      } else if (num === 4) {
        await audioLine.loadAsync(AudioEng.four)
      } else if (num === 5) {
        await audioLine.loadAsync(AudioEng.five)
      } else if (num === 6) {
        await audioLine.loadAsync(AudioEng.six)
      } else if (num === 7) {
        await audioLine.loadAsync(AudioEng.seven)
      } else if (num === 8) {
        await audioLine.loadAsync(AudioEng.eight)
      } else if (num === 9) {
        await audioLine.loadAsync(AudioEng.nine)
      }
    } else if (lang === "Spanish") {
      if (num === 1) {
        await audioLine.loadAsync(AudioSpa.one)
      } else if (num === 2) {
        await audioLine.loadAsync(AudioSpa.two)
      } else if (num === 3) {
        await audioLine.loadAsync(AudioSpa.three)
      } else if (num === 4) {
        await audioLine.loadAsync(AudioSpa.four)
      } else if (num === 5) {
        await audioLine.loadAsync(AudioSpa.five)
      } else if (num === 6) {
        await audioLine.loadAsync(AudioSpa.six)
      } else if (num === 7) {
        await audioLine.loadAsync(AudioSpa.seven)
      } else if (num === 8) {
        await audioLine.loadAsync(AudioSpa.eight)
      } else if (num === 9) {
        await audioLine.loadAsync(AudioSpa.nine)
      }
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 2000);
  },

  //Plays instructions for the level based on the correst color
  levelInstruct: async (lang, color) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      if (color === "red") {
        await audioLine.loadAsync(AudioEng.redInst)
      } else if (color === "blue") {
        await audioLine.loadAsync(AudioEng.blueInst)
      } else if (color === "green") {
        await audioLine.loadAsync(AudioEng.greenInst)
      } else if (color === "purple") {
        await audioLine.loadAsync(AudioEng.purpleInst)
      } else if (color === "yellow") {
        await audioLine.loadAsync(AudioEng.yellowInst)
      } else if (color === "orange") {
        await audioLine.loadAsync(AudioEng.orangeInst)
      }
    } else if (lang === "Spanish") {
      if (color === "red") {
        await audioLine.loadAsync(AudioSpa.redInst)
      } else if (color === "blue") {
        await audioLine.loadAsync(AudioSpa.blueInst)
      } else if (color === "green") {
        await audioLine.loadAsync(AudioSpa.greenInst)
      } else if (color === "purple") {
        await audioLine.loadAsync(AudioSpa.purpleInst)
      } else if (color === "yellow") {
        await audioLine.loadAsync(AudioSpa.yellowInst)
      } else if (color === "orange") {
        await audioLine.loadAsync(AudioSpa.orangeInst)
      }
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 3000);
  },

  //Plays instructions for endpage
  endInst: async (lang) => {
    const audioLine = new Audio.Sound();
    if (lang === "English") {
      await audioLine.loadAsync(AudioEng.endPageInst)
    } else if (lang === "Spanish") {
      await audioLine.loadAsync(AudioSpa.endPageInst)
    }
    await audioLine.playAsync();
    setTimeout(() => {
      audioLine.unloadAsync();
    }, 10000);
  }
}
