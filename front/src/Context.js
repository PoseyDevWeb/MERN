import { createContext } from "react";

export const MyContext = createContext({});
/*import React, { useState } from 'react';

// Composant parent qui enveloppe tous les autres composants
function ParentComponent() {
  const [someProp, setSomeProp] = useState('');

  // Fonction qui sera passée en prop à ChildComponent
  const handleChildUpdate = (newProp) => {
    setSomeProp(newProp);
  }

  return (
    <>
    <ChildComponent handleUpdate={handleChildUpdate} />
    <p>{someProp}</p>
    </>
  );
}

// Composant enfant qui reçoit une propriété
function ChildComponent({ handleUpdate }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
    <input
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
    <button onClick={() => handleUpdate(inputValue)}>
      Mettre à jour le composant parent
    </button>
    </>
  );
} */
