
async function loadData(){
    let response = await fetch("data.json");
    let data = await response.json();
    return data;
}

async function init() {
    let data = await loadData();
    setData('title', data);
    setData('presenters', data);
    setData('institution', data);
    setData('time', data);
    setData('subtitle', data);
}
function setData(attribute, data) {
    if (Object.keys(data[index]).includes(attribute)) {                 
        let element = document.getElementById(attribute);
        if (element) {
            let elementData = data[index][attribute];

            if (typeof elementData == "string") {
                element.innerHTML = elementData;
            } else if(Array.isArray(elementData)) {
                element.innerHTML = elementData.join(", ");                    
            } else {
                element.innerHTML = `${elementData.start} - ${elementData.end}`;
            }
        }
    }
}


let index = 0;

init();

