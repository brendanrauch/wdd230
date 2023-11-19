
const url = 'data/members.json';
const cards = document.querySelector('#cards');

const getMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let addressm = document.createElement('p');
        let phone = document.createElement('p');
        let urlm = document.createElement('p');
        let membershiplevel = document.createElement('p');
        let imageurl = document.createElement('img');
    

        name.textContent = `Name: ${member.name}`;
        address.textContent = `Address: ${member.address.street1} ${member.address.street2} `;
        addressm.textContent = ` ${member.address.city} ${member.address.state} ${member.address.zip} `;
        phone.textContent = `Phone: ${member.phone}`;
        urlm.textContent = `Url: ${member.url}`;
        membershiplevel.textContent = `Membership Level: ${member.memberShipLevel}`;


        // Build the image portrait by setting all the relevant attributes
        imageurl.setAttribute('src', member.imageUrl);
        imageurl.setAttribute('alt', `Company Logo`); // fill in the blank
        imageurl.setAttribute('loading', 'lazy');
        imageurl.setAttribute('width', '160');
       
    
        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address); 
        card.appendChild(addressm);
        card.appendChild(phone);
        card.appendChild(urlm);
        card.appendChild(membershiplevel);
        card.appendChild(imageurl);

        

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    //console.table(data.prophets);
    getMembers(data.members);
}
  
  getMemberData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
