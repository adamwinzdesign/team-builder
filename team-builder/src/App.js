import React, { useState } from 'react';
import './App.css';

import MemberForm from './components/MemberForm';
import MemberCard from './components/MemberCard';

function App() {
  const [ memberCard, setMemberCard ] = useState([
    {
      id: 1,
      name: 'Keith Kogane',
      email: 'keith@voltron.com',
      role: 'Leader, Pilot of Black Lion (Torso and Head of Voltron)'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMemberCard([...memberCard, newMember])
  }

  return (
    <div className="App">
      <h1>Meet the Team!</h1>
      <MemberForm addNewMember = {addNewMember} />
      <MemberCard memberCard = { memberCard } />
    </div>
  );
}

export default App;
