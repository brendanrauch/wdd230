
const url = '/data/directory.json';
const cards = document.querySelector('#cards');

const getMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let urlm = document.createElement('p');
        let membershiplevel = document.createElement('p');
        let imageurl = document.createElement('img');
    

        name.textContent = `name: ${members.name}`;
        address.textContent = `address: ${members.address}`;
        phone.textContent = `phone: ${members.phone}`;
        urlm.textContent = `url: ${members.url}`;
        membershiplevel.textContent = `membershiplevel: ${members.memberShipLevel}`;


        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Company Logo`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(address); 
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
    getMembers(data.member); // no
}
  
  getMemberData();