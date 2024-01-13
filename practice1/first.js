console.log("hello world");

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'purple';
secondSection.style.backgroundColor = 'yellowgreen';
secondSection.style.border = '1px solid transfarent';
secondSection.style.borderRadius = '15px';
secondSection.style.padding = '15px';

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = "new added item";
secondList.appendChild(li);


const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> New section added</h1>
<p>a pragraph added</p>
<ul>
<li>item-1</li>
<li>item-2</li>
<li>item-3</li>
<li>item-4</li>
<li>item-5</li>
</ul>
`
main.appendChild(section);


//querySelector
//querySelectorAll
const secondLi = document.querySelectorAll('#second-section li');
for (const li of secondLi) {
    console.log(li.innerText);
}

// getAttribute (), setAttribute (),NodeList, htmlcollection, parentNode, childnodes, createElement

