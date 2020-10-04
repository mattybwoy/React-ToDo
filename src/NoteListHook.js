import React from 'react';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(localStorage.getItem('localStoredValue') || "");

    React.useEffect(() => {
    localStorage.setItem('localStorageKey', value);
  }, [value]);
  return [value, setValue];
};

const NoteListHook = () =>{
  const [value, setValue] = useStateWithLocalStorage('localStoredValue');
  
  const onChange = event => setValue(event.target.value);

  return(
    <div>
      <h1>Welcome to NoteList v2.0 with local storage</h1>
      <input value={value} type ='text' onChange={onChange} />
      <p>{value}</p>
      
    </div>

  )
}

export default NoteListHook
