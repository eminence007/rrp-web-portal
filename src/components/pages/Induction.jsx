import React from 'react'
import { useState } from 'react'
import CurrentLocationForm from '../induction/CurrentLocationForm';
import ProfilePicUploader from '../induction/ProfilePicUploader';
import VoterInfoForm from '../induction/VoterInfoForm'
import ElectionQuestionForm from '../induction/ElectionQuestionForm';
import CampeigningQuestion from '../induction/CampeigningQuestion';
import FundingQuestionForm from '../induction/FundingQuestionForm';


const Induction = () => {
  const [formSerial, setFormSerial] = useState(1); 
  
  return (
   <>
   {(formSerial===1) &&<VoterInfoForm handleNext={setFormSerial}/>}
   {(formSerial===2) &&<CurrentLocationForm handleNext={setFormSerial}/>}
   {(formSerial===3) &&<ProfilePicUploader handleNext={setFormSerial}/>}
   {(formSerial===4) &&<ElectionQuestionForm handleNext={setFormSerial}/>}
   {(formSerial===5) &&<FundingQuestionForm handleNext={setFormSerial}/>}
   {(formSerial===6) &&<CampeigningQuestion handleNext={setFormSerial}/>}
   </>
  )
}

export default Induction