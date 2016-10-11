export default function reducer(currentList=[], action) {

    switch (action.type) {
        case "ADD_ELEMENT": {
            const newList = [].concat(currentList);
            newList.push(action.payload);
            return newList
        }
        case "REMOVE_ELEMENT": {
            const newList = currentList.filter((el) => {
                return el !== action.payload;
            });
            return newList;
        }
    }

    return currentList;
}