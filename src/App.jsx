import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import wireframe from './assets/wireframe.png'
import prototype from './assets/prototype.png'
import palette from './assets/ColorPalette.png'
import chosenFont from './assets/Font.png'
import comparison from './assets/comparison.png'
import persona1 from './assets/Slide1.png'
import persona2 from './assets/Slide2.png'
import persona3 from './assets/Slide3.png'
import userJourney from './assets/UserJourney.png'
import logo from './assets/medicine-sign-icon.svg'

function App() {

  

  return (
    <>
      <div style={{background: "white", padding: "20px"}}>
        <h1>Case Study: UX/UI Design of a Health Companion Super App</h1>
        <p style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'10em', width:"80%", paddingLeft:"10%"}}><b>MED</b><img src={logo} style={{width: "20%"}}/><b>HELP</b></p>
      </div>
      <div className='mainDiv'>
        <h2>Problem Statement</h2>
        <p>
        The software being designed during this project serves the purpose of helping individuals with chronic illnesses manage their medication and facilitate communication with their respective medical professionals. The aim here is to provide a simple and intuitive design solution that focuses on the user experience through out a process that is expected to happen almost daily. The problem with existing solutions will be discussed in the later section since they were obtained by interviewing potential users.
        </p>
        <h2>Research Method</h2>
        <p>
        The main research method selected for this project is to conduct one on one interviews with various patients and a medical professional. There is a reason why this method was chosen over a simple form to be distributed online. Although the number of answers will be smaller with interviews, the quality of said answers will be much higher. This is due to the fact that follow up questions can be asked depending on the answers obtained. Here are the questions that were asked to each person:
        <ul>
          <li>How often do you need to communicate with your doctor?</li>
          <li>Do you take prescribed medication regularly?</li>
          <li>What method do you use to keep track of your medication?</li>
          <li>Is that method effective? Why or why not?</li>
          <li>How comfortable are you with mobile applications?</li>
          <li>Do you prefer an application that mostly uses icons or text?</li>
        </ul>
        The first four questions were to get a general idea of the current situation of the individual while the last two were to give me a general idea of the design to follow. Furthermore, I interviewed an occupational therapist to get their input on the matter. My findings with the therapist will be discussed at length later on since they played an important role in the app’s design.
        </p>
        <h2>Results</h2>
        <p>
        I will now proceed to go over each question and share my findings.
        <br/><br/>The number of times someone needed to talk to their doctor differed greatly from person to person. Some had to talk to multiple professionals every week while some only had to see their doctor if their condition changed or when they needed to renew their prescription.
        <br/><br/>Everyone questioned took medication everyday. Some even had multiple pills that had to be taken at various times during the same day.
        <br/><br/>The most interesting part of the interviews was the section about the methods that were currently being used to remember taking medication. I will now list each method that was shared with me and its effectiveness.
        </p>
        <div style={{border: "1px solid black", padding:"15px"}}>
        <h3>Pill boxes</h3>
        <p>
        Most people I interviewed tried pill boxes at some point or another but all of them stopped using them. The main issue I hear was that simply putting pills in the right box wouldn’t remind them to take the medication. I was also told that sometimes they’d forget what day it is and take pills from the wrong day which would entangle everything and lead to confusion in the future.
        </p>
        <h3>Integrating taking medication in their routine</h3>
        <p>
        This was the most effective method but it’s also the hardest one to implement since it requires having a very organized lifestyle. This is rarely the case with individuals that take medication for mental problems.
        </p>
        <h3>Mobile applications</h3>
        <p>
        One person reported using mobile applications to set alarms and reminders. The problem encountered with these apps was that they would only send a single notification and that if the notification reached the patient at a busy time, they would most likely ignore it and forget about the medication. This specific problem was one I aimed to fix with my design and will be mentioned later.
        </p>
        </div>
        <p>
        The final two questions related to their preference with mobile applications. To this I got a wide range of answers that seemed to correlate with the individual’s age. Older people noted that they were very uncomfortable with using a cell phone and that navigating menus was very complicated. This was the opposite for the younger demographic. As for icons versus text, the answer seemed to tilt towards text. That said, one of the individuals I interviewed is illiterate and thus saw no use in text.
        </p>
        <h2>Interview with the therapist</h2>
        <p>My interview with the occupational therapist had a more open format. Although I went over the questions that I asked to the other individuals, we did branch out to other topics. In order to keep this short, I’ll simply list the main takeaways from our conversation.
          <ul>
            <li>The most effective method to remember taking medication is a combination of methods</li>
            <li>Both text and icons are essential the same way they are on medication bottles</li>
            <li>Text should be clear and use bold rather than italic to attract attention</li>
            <li>Visual stimulation and animations should be kept to a minimum to avoid overwhelming patients</li>
          </ul>
        </p>
        <h2>Personas</h2>
        <p>
        Based on the data collected during the various interviews, I’ve determined three personas that represent the archetypes of users targeted by the software being developed.
        </p>
        <img src={persona1}/><br/><br/>
        <img src={persona2}/><br/><br/>
        <img src={persona3}/><br/><br/>
        <p>
        Using these three personas, a number of requirements can be extracted for the design of both the user experience and the user interface.
        <ul>
          <li>Avoid menus and streamline navigation</li>
          <li>Make the features easy to use</li>
          <li>Make the text clear and have significant icons with it</li>
          <li>Minimize the amount of visual stimulation</li>
        </ul>
        </p>
        <h2>Journey Maps</h2>
        <p>
        Based on the first persona presented above, here is a journey map showing how they would go about setting a new reminder on the app.
        </p>
        <img src={userJourney} style={{borderRadius: "25px"}}/>
        <h2>Wireframes</h2>
        <p>
        This is a low fidelity wireframe showcasing all the different screens on the app with arrows showing how the interact with each other.
        </p>
        <img src={wireframe} style={{borderRadius: "25px"}}/>
        <h2>Color Palette and Font</h2>
        <p>
        I’ve chosen the “Inter” font for this application because of the clarity of the characters. They are distinct with very little room for confusion at a glance. Both the font and the color palette have been shared with some of the individuals that were interviewed in order to confirm my choice and receive feedback.
        </p>
        <img src={chosenFont} style={{borderRadius: "25px"}}/>
        <img src={palette}/>
        <p>
        An example of feedback I received relates to the choice of colors. I originally when with a green theme but was told that it made the confirmation buttons unclear at first sight. I therefore switched it to blue and ended up with the current palette. I intentionally avoided saturated colors as to not strain the eyes of the users. 
        </p>
        <img src={comparison}/>
        <h2>Prototype</h2>
        <p>
        This is the final prototype with a link to the interactive version on <a href='https://www.figma.com/design/vinYHVGrfNogORW3zgn2Yk/MED-HELP?node-id=0-1&t=rxEbPn1zPoB0YDWG-1'>Figma</a>. It showcases once again, all the screens that would be visible on the app and all the necessary features.
        </p>
        <img src={prototype}/>
        <h2>Usability Testing</h2>
        <p>
        This is how I plan on conducting my usability tests. First, I’ll make a test for each of the main features. Those are “Creating a new reminder”, “Creating a new contact”, and “Setting a new appointment”. To test those features I’ll gather participants in person and ask them to perform those tasks. I would then silently observe how they go about performing them and noting down how they do it and what parts to they seem to be struggling with. I will then conduct short interviews with them in order to get their feedback. With this data, I would be able to address many designs concern that may arise during the tests.
        </p>
        <h2>Conclusion</h2>
        <p>
        Throughout my work on this project, I’ve learned quite a bit about developing user interfaces and user designs. Going through the various interviews with both the people using medication and the medical professional have allowed me to identify various aspects of the design that I wouldn’t have been able to thing about by myself. This coupled with the constant feedback I received during the development of the prototype have made for a positive design. I ran into some challenges mostly when selecting a font and color palette by I overcame them by testing multiple types and having the people that answered my survey give their opinion.
        </p>
      </div>
    </>
  )
}

export default App
