export const handleOpenSelect = (e, setFunction, state, ref) => {
    e.preventDefault();
    setFunction(!state);
       
       if(!state) {
          ref && ref.current.focus()
          !ref.current.readOnly && ref.current.select()
       }
    
 }