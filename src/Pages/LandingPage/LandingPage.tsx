import React from 'react'
import {Container,FirstLayer,FirstLayerText,SmallerFirstLayerText,
Button,Video,FirstSection,SecondLayerText,SecondLayer,SecondLayerSmallerText,
Icon,Socials, ThirdLayer,ThirdLayerTextContainer,ThirdLayerHeader,ThirdLayerSubText, ThirdLayerList, 
ListItem,ThirdLayerImage,FourthLayer,CardContainer,CardHeaderText,CardImage,CardSubText,
FooterContainer,LogoContainer,Logo,GoogleLogo,AICPALogo,FooterInnerContainer,LinksContainer,
Link,FooterText,NavContainer,NavLogo

} from './style/LandingPage.js'
import phoneImg from '../../assets/images/phoneIMG.PNG'
import cardInfo from '../../JSON/card.json'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import linkedin from '../../assets/images/linkedin-logo.png'
import image1  from '../../assets/images/image1.PNG'
import image2  from '../../assets/images/image2.PNG'
import image3  from '../../assets/images/image3.PNG'
import Logo1 from '../../assets/images/logo.png'
import Logo2 from '../../assets/images/GoogleCloud.png'
import Logo3 from '../../assets/images/AICPA.png'
import navLogo from '../../assets/images/bigLogo.PNG'
const images=[image1,image2,image3]

const LandingPage = () => {
    return (
        <Container>
            <Navbar/>
            <FirstLayer>
                <FirstSection>
                    <FirstLayerText>
                        Powerful email features, an AI voice assistant, and intuitive gestures.
                    </FirstLayerText>
                    <SmallerFirstLayerText>
                        All available in Boomerang for iPhone
                    </SmallerFirstLayerText>
                    <Button>Get Boomerang on iOS</Button>
                </FirstSection>
                <Video>
                        <iframe src="https://player.vimeo.com/video/594794842?h=c9fda36bc4" width="540" height="260"
                         frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
                         </iframe>
                </Video>
            </FirstLayer>
            <SecondLayer>
                <SecondLayerText>
                    Boomerang's iPhone email app brings industry-standard features like send later, 
                    snooze, and Inbox Pause to iOS. But that's just the beginning.
                </SecondLayerText>
                <SecondLayerSmallerText>
                    Our email app also features a powerful voice assistant to let you quickly clear your
                    schedule, retrieve important information from your inbox, and more. And when you're not hands-free, an innovative
                    gesture system helps you quickly get through your email so you can focus on the things that matter. 
                </SecondLayerSmallerText>
                <Socials>
                <Icon src={facebook}/>
                <Icon src={twitter}/>
                <Icon src={linkedin}/>
            </Socials>
            </SecondLayer>

            <ThirdLayer>
                <ThirdLayerTextContainer>
                    <ThirdLayerHeader>
                        One app. Countless applications.
                    </ThirdLayerHeader>
                    <ThirdLayerSubText>
                    There are many email clients, calendar apps, and voice assistants. But only Boomerang for iPhone unifies these
                    functionalities in a seamless way, helping you achieve peaceful productivity
                    </ThirdLayerSubText>
                    <ThirdLayerList>
                        <ListItem>Use intuitive voice commands to clear your schedule for the day or find important information buried in your inbox.</ListItem>
                        <ListItem>Pause your Inbox, schedule your outgoing emails, and snooze messages to return later.</ListItem>
                        <ListItem>Get a real-time torecast of vour email and meetings for the day and manage your time more intelligently.</ListItem>
                    </ThirdLayerList>
                </ThirdLayerTextContainer>
                <ThirdLayerImage src={phoneImg}/>
            </ThirdLayer>
            <FourthLayer>{
                cardInfo.map((data,id)=>{
                    return(   
                     <Card key={id} image={images[id]} headerText={data.headerText} subText={data.subText}/>
                    )
                })
            }</FourthLayer>
            <Button style={{margin:'0 auto'}}>Get Boomerang on iOS</Button>
            <Footer/>
        </Container>
    )
}

const Card=({image,headerText,subText}:{image:string,headerText:string,subText:string})=>{
    return(
        <CardContainer>
            <CardImage src={image}/>
            <CardHeaderText>
                {headerText}
            </CardHeaderText>
            <CardSubText>
                {subText}
            </CardSubText>
        </CardContainer>
    )
}

const Footer=()=>{
    return(
        <FooterContainer>
            <FooterInnerContainer>
            <LogoContainer>
                <Logo src={Logo1}/>
                <GoogleLogo  src={Logo2}/>
                <AICPALogo  src={Logo3}/>
            </LogoContainer>
            <LinksContainer>
                <Link>© 2016-2022 Baydin,Inc.</Link>
                <Link>Home</Link>
                <Link>Pricing</Link>
                <Link>About</Link>
            </LinksContainer>
            <FooterText>Gmail is a registered trademark of Google. 
                We are not affiiated with google or Gmail, but we 
                are happy to be part of their ecosystem! Boomerang 
                for Gmails's use of information received from Google
                APIs Will adhere to Googe API Services User Data Policy.
                Including the Limited use of requirements. 
            </FooterText>
            </FooterInnerContainer>
        </FooterContainer>
    )
}

export const Navbar=()=>{
    return(
        <NavContainer>
            <NavLogo src={navLogo}/>
            for Gmail
        </NavContainer>
    )
}
export default LandingPage
