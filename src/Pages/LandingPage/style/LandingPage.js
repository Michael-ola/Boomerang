import styled from 'styled-components/macro'
import curve from '../../../assets/images/curve.png'

export const Container=styled.div`
min-height:100%;
width:100%;
display:flex;
position:relative;
flex-direction:column;
align-items:center;
&::before{
    content:'';
    display:inline-block;
    width:100%;
    margin:0 auto;
    height:30%;
    transform:translateY(-5%);
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    background:url(${curve})
}
`

export const FirstLayer=styled.div`
display:flex;
width:80%;
height:40%;
margin-top:10%;
`

export const FirstLayerText=styled.h1`
color:#fff;
max-width:22ch;
font-weight:bold;
`
export const SmallerFirstLayerText=styled.h5`
color:#fff;
`
export const SecondLayer=styled.div`
width:80%;
height:40%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:8%;
`

export const SecondLayerText=styled.h1`
color:#000;
font-weight:900;
max-width:44ch;
font-size:1.6em;
`
export const SecondLayerSmallerText=styled.h5`
color:#000;
max-width:85ch;
margin-top:2%;
`
export const Button=styled.button`
background:#EF2D06;
color:#fff;
margin-right:auto;
padding:0.5em 0.6em;
border:none;
font-weight:bold;
font-size:1.2rem;
border-radius:5px;
text-align:center;
box-shadow:1px 1px 1px rgba(0,0,0,0.2);
`
export const Video=styled.div`
margin-left:auto;
`
export const FirstSection=styled.div`
margin-left:10%;
display:flex;
flex-direction:column;
gap:5%;
`
export const Socials=styled.div`
display:flex;
gap:2%;
justify-content:center;
width:100%;
margin-top:4%;
`
export const Icon=styled.img`
width:26px;
height:26px;
&:last-of-type{
    width:30px;
    height:30px;
}
`

export const ThirdLayer=styled.div`
display:flex;
background:#0668b3;
margin-top:3em;
padding-top:3em;
border-radius:7px;
gap:5%;
`
export const ThirdLayerTextContainer=styled.div`
margin-left:3em;
padding-top:2em;
`
export const ThirdLayerHeader=styled.h1`
color:#fff;
font-size:1.2rem;
font-weight:bold;
margin-bottom:1em;
`

export const ThirdLayerSubText=styled.h5`
max-width:48ch;
color:#fff;
font-weight:normal;
font-size:0.8rem;
`

export const ThirdLayerList=styled.ul`
margin-bottom: 3.3em;
`
export const ListItem=styled.li`
max-width:48ch;
position:relative;
color:#fff;
font-weight:normal;
font-size:0.8rem;
margin-left: 3em;
margin-top:1em;
`

export const ThirdLayerImage=styled.img`
margin-right: 3em;
margin-left: 2.2em;
margin-bottom:2em;
min-width:35%;
`

export const FourthLayer=styled.div`
display:flex;
gap:0.3em;
margin-top:3em;
margin-bottom:2em;
`
export const CardContainer=styled.div`
display:flex;
flex-direction:column;
padding:0.8em;
background:#f2f4f6;
border-radius:5px;
`
export const CardImage=styled.img`
height:30%;
margin-bottom:1.2em;
border-radius:5px;
`
export const CardHeaderText=styled.h2`
max-width:27ch;
font-weight:900;
font-size:0.9rem;
margin-bottom:0.8em;
`

export const CardSubText=styled.h4`
font-size:0.6rem;
max-width:42ch;
`

export const FooterContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
background:#0668b3;
margin-top:2.5em;
`

export const FooterInnerContainer=styled.div`
width:60%;
`
export const LogoContainer=styled.div`
width:100%;
display:flex;
margin-top:1.5em;
padding-bottom:2em;
border-bottom:1px solid rgba(255,255,255,0.2);
`

export const Logo=styled.img`

`

export const  GoogleLogo=styled(Logo)`
margin-left:auto;
margin-right:2em;
`

export const AICPALogo=styled(Logo)`

`
export  const LinksContainer=styled.div`
width:100%;
display:flex;
margin-top:0.7em;
gap:4%;
`

export const Link=styled.a`
text-decoration:none;
color:#92bad9;
&:nth-of-type(2){
    margin-left:auto;
}
`
export const  FooterText=styled.p`
color:#92bad9;
font-size:0.8rem;
margin-top:1em;
margin-bottom:2em;
`

export const NavContainer=styled.div`
display:flex;
align-items:center;
width:100%;
height:35px;
box-shadow:3px 0 1px rgba(0,0,0,0.2);
background:#fff;
font-size:0.6rem;
gap:0.5em;
`
export const NavLogo=styled.img`
margin-left:20%;
`