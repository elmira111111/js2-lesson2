// DOM
const content = document.querySelector('#content');
const ulTag = document.querySelector('.ul');

//REST API - Representation state
const base_url = "https://baiastan-linguist2024.up.railway.app/api/v1"

// api - aplication programming interface
const api = {
    test_list: '/test_list',
}

async function fetchTestList() {
    const response = await fetch(base_url + api.test_list);
    const testList = await response.json();
    const h1EL = document.createElement("h1");
    console.log(testList);
    h1EL.textContent = testList[0].title;
    content.appendChild(h1EL);
    const {questions} = testList[0];
    let options

    for (const question of questions) {
        console.log(question.option_a);
        console.log(question.option_b);
        options = object.keys(question);
        ulTag.innerHTML += `
    <div>
    ${question.title}
    </div>`;
    console.log(options);
    }
    }

fetchTestList();

function renderOptions(obj) {
    for(let i = 0; i<4; i++){
        console.log(obj['options' + variants[i]]);
    }
}

