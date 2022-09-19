
import { useState, useEffect } from "react";

import MeetupList from "../Components/meetups/MeetupList";


function AllMeetupsPage(){

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect( () => {

      setIsLoading(true);

      fetch(
        'https://kollegeh-b3fa3-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {

        const meetups = [];

        for(const key in data){
            const meetup = {
              id: key,
              ...data[key]
            };

            meetups.push(meetup);
        }


          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    }, []);  


    if(isLoading){
      return (<section>
        <p>Loadingg.....</p>
      </section>);
    }


    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetupsPage;