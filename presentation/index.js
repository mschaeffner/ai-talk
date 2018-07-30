// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Intro from './slides/Intro'
import MediaCoverage from './slides/MediaCoverage'
import History from './slides/History'
import InternetUsage from './slides/InternetUsage'
import Terminology1 from './slides/Terminology1'
import Terminology2 from './slides/Terminology2'
import Terminology3 from './slides/Terminology3'
import Terminology4 from './slides/Terminology4'
import Demo from './slides/Demo'
import Jobs from './slides/Jobs'
import HorsesChart from './slides/HorsesChart'
import HorsesImage from './slides/HorsesImage'
import RobotsHardware from './slides/RobotsHardware'
import RobotsSoftware from './slides/RobotsSoftware'
import Fridge from './slides/Fridge'

// Require CSS
require("normalize.css")

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
})

const SLIDES = [
  Intro,
  MediaCoverage,
  History,
  InternetUsage,
  Terminology1,
  Terminology2,
  Terminology3,
  Terminology4,
  Jobs,
  HorsesImage,
  HorsesChart,
  RobotsHardware,
  RobotsSoftware,
  Fridge
]

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        {SLIDES.map(slide => {
          const C = slide
          return(
            <Slide bgColor="secondary" textColor="primary">
              <C theme={theme} />
            </Slide>
          )
        })}
      </Deck>
    )
  }
}
