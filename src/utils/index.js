
export const handleInputChange = (ev, dispatch, action) => {
    dispatch(action(ev.target.value))
}