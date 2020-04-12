import React from 'react';
import styled from 'styled-components'
import scrollDown from '../../assets/scroll-down-animation.json';
import { PhotoWall, InfoCard } from '../../Components'

interface HomeScreenProps {

}

interface HomeScreenState {
  showRemainingElements: boolean
  showScrollIndicator?: boolean

  screenWidth: number
  screenHeight: number
}

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {

  public readonly state: HomeScreenState = {
    showRemainingElements: false,
    showScrollIndicator: undefined,

    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  }

  listenForScroll(event: Event) {
    this.setState({ showScrollIndicator: false, showRemainingElements: true })
  }

  listenForResize(event: Event) {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenForScroll.bind(this))
    window.addEventListener('resize', this.listenForResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenForScroll.bind(this));
    window.removeEventListener('resize', this.listenForResize.bind(this))
  }

  render() {
    return (
      <HomeScreenContainerDiv>
        {/* <ScrollIndicatorContainterDiv isShown={this.state.showScrollIndicator === true}>
        </ScrollIndicatorContainterDiv>
        <PhotoWallDiv>
          <PhotoWall isShown={this.state.showRemainingElements} />
        </PhotoWallDiv> */}

        <ContentDiv>
          <MattImage />
          <InfoCard style={{
            width: this.state.screenWidth >= 1440 ? "50vw" : "auto",
            padding: this.state.screenWidth >= 1440 ? "0.5in" : "0.2in",
            margin: this.state.screenWidth >= 1440 ? "0.5in" : "0px",
            disableDecor: this.state.screenWidth >= 1440 ? false : true
          }}>
            {
              `
# Hey! My name is Matthew Braun.

I'm a software developer located in [Edmonton, AB, Canada](https://www.google.com/maps/place/Edmonton,+AB). I'm a 3rd year Computer Engineering Student at the [University of Alberta](https://uab.ca).

I've been interested in technology for as long as I can remember. As a kid I was addicted to the computer. I was thrown into the world of computing with videogames. Minecraft was the first game I played that really got me interested in technology. In grade 7, I hosted my first server to play with my friends. I then, shortly after, moved into hosting public servers to play games with over 20 people at a time. I then transitioned into making websites using HTML, CSS, and JavaScript.

Throughout my university career I completed 2 internships for a total of 8 months of experience in the software development world. My first internship was at [DevFacto](https://devfacto.com/) as a __Software Consultant Intern__ for __4 months__ whilst my second internship was at [Compugen](https://www.compugen.com/en/) as a __Deskside Support Analyst__ for __4 months__.

I primarily identify as a __Full-Stack Developer__ however I am most experienced in __Back-End Development__. I specialize in __Web Development__ and __Desktop Applications__. If you would like to know more or if you would like to get in touch, please don't hesitate to [contact](/contact) me.
              `
            }
          </InfoCard>
        </ContentDiv>
      </HomeScreenContainerDiv>
    )
  }
}

const ContentDiv = styled.div`
  position: relative;
  margin-top: 100vh;
  display: flex;
  flex-direction: row-reverse;
  @media screen and (max-width: 1440px) {
    display: flexbox;
  }
  justify-content: center;
  align-items: center;
  z-index: 5;
`

const MattImage = styled.div`
  position: relative;
  height: 550px;
  width: 350px;
  margin: 0.5in 0in;
  @media screen and (max-width: 1440px) {
    display: none;
  }
  ::after {
    box-shadow: 0px 0px 20px 0px #000000FF;
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: url("https://i.imgur.com/Z8rPxRa.jpg") center 0%;
    background-size: cover;
    z-index: -1;
  }
`

const HomeScreenContainerDiv = styled.div`
  z-index: 1;
`
const LottieContainerDiv = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 5;
  
  `
const ScrollIndicatorContainterDiv = styled.div`
  opacity: ${(props: { isShown: boolean }) => props.isShown ? 1 : 0};
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 300ms ease-in-out;
  pointer-events: none;
  z-index: 5;
`
const PhotoWallDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`