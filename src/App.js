import logo from './logo.svg';
import {membersl} from './members.jsx';
import MemberList from './components/memberlist/memberlist.component'
import Searchbox from './components/searchbox/searchbox.component';
import ActivityFilter from './components/ActivityFilter/activityfilter.component'
import './App.css';

import { useState, useEffect } from 'react';

const App = () => {
 
  const [members, setMembers] = useState(membersl);
  const [searchfield, setSearchfield] = useState('');
  const [filteredMembers, setFilterMembers] = useState(members);
  const [radio, setRadio] = useState('');


	const onSearchChange =(event) => {
		setSearchfield(event.target.value.toLocaleLowerCase());
	}
  useEffect(() => {
    const newFilteredMembers = members.filter((member) => {
      return member.name.toLocaleLowerCase().includes(searchfield);
    });

    setFilterMembers(newFilteredMembers);
  }, [members, searchfield]);
  
  useEffect(() => {
    const newFilterRadio = members.filter((member) => {
      return member.activities.filter((activity) => {
        return activity.includes(radio);
      })
    })
      setFilterMembers(newFilterRadio);
    }, [members, radio])
  


  return (
    <div className="tc">
      <h1 className='tc f1'>Outdoor Adventure Club</h1>
      <Searchbox searchChange={onSearchChange} />
      <ActivityFilter value="Biking" onClick={()=>setRadio('biking')}/>
      <ActivityFilter value="Running" onClick={()=>setRadio('running')}/>
      <ActivityFilter value="Biking" onClick={()=>setRadio('biking')}/>
      <MemberList members = {filteredMembers} />
    </div>
  );
}

export default App;
