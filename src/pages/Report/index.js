import React, { useState } from 'react';
import './styles.scss'
import Input, { Gender, Option2, Option3 } from '../../components/Input'

export default function Report() {
  const [ age, setAge ] = useState('');
    return (
      <div className="report">
        <div className="max-width">
        <h1> You can only report your personal case </h1>
        <form>
          <h3> Enter Bio-data </h3>
          <section className="e__bio__data"> 
          <Input 
          type="text"
          placeholder="Age"
          label="What is your age?"
          value={age}
          />
          <Gender 
          label="What is your gender?"
          value1="male"
          value1Text="Male"
          value2="female"
          value2Text="Female"
          />
          </section>
          <h3 style={{ marginTop: '20px' }}> Symptoms </h3>
          <div className="que">
          <section> 
         <Option2 
         label="Yes"
         value="yes"
         label_2="No"
         value_2="no"
         text="Do you have a fever?"
         />
          </section>
          <section>  
          <Option3 
         label="High"
         value="high"
         label_2="Low"
         value_2="low"
         label_3="Intermittent"
         label_4="intermittent"
         text="How would you grade your fever – High, Low or Intermittent? "
         />
          </section>
          </div>
        </form>
        </div>
      </div>
    );
}
