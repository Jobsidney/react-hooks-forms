import React from 'react'

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
      console.log(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }
  
    return (
      <Form
        firstName={firstName}
        lastName={'hello'}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
    );
}

export default ParentComponent