export function addElement(element) {
    return {
        type: 'ADD_ELEMENT',
        payload: element
    };
}

export function removeElement(element) {
    return {
        type: 'REMOVE_ELEMENT',
        payload: element
    };
}