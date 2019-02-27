function setData(param, value) {
    localStorage.setItem(param, value);
}

function getData(param) {
    return (localStorage.getItem(param));
}

const Storage = {
    setData,
    getData
};

export default Storage;