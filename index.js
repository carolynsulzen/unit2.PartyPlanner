const state = {
    allEvents : [],
}

const getParties = async()=>{
    const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-FTB-MT-WEB-PT/events`);
    const data = await response.json();
    const eventInformation = data.data;
    state.allEvents = eventInformation;
    renderAllNames();
    renderAllDates();
    renderAllLocations();
    renderAllDescriptions();

}


const renderAllNames = ()=>{
    //grab the ul element
    const mainNames = document.querySelector(`#names`)
    //make an ordered list
    const olNames = document.createElement(`ol`);
    //make each name into an li - list item
    const eventNames = state.allEvents.map ((singleName)=>{
        return `<li>${singleName.name}</li>`;
    });
    
    //put the li's into the ul
    olNames.innerHTML = eventNames.join(``);

    //append
    mainNames.append(olNames);
}
getParties();

const renderAllDates = ()=>{
    const mainDates = document.querySelector(`#dates`);
   const olDates = document.createElement(`ol`);
   const eventDates = state.allEvents.map((singleDate)=>{
        return `<li>${singleDate.date}</li>`;
    })
    olDates.innerHTML = eventDates.join(``);
    mainDates.append(olDates);
   
}

const renderAllLocations = ()=>{
    const mainLocation = document.querySelector(`#location`);
    const olLocation = document.createElement(`ol`);
    const eventLocation = state.allEvents.map((singleLocation)=>{
        return `<li>${singleLocation.location}</li>`;
    })
    olLocation.innerHTML = eventLocation.join(``);
    mainLocation.append(olLocation);
}

const renderAllDescriptions = ()=>{
    const mainDescription = document.querySelector(`#description`);
    const olDescription = document.createElement(`ol`);
    const eventDescription = state.allEvents.map ((singleDescription)=>{
        return `<li>${singleDescription.description}</li>`;
    })
    olDescription.innerHTML = eventDescription.join(``);
    mainDescription.append(olDescription);

}