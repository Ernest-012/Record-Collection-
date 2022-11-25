
//If the value of the property is an empty string, delete the property with the corresponding ID.
//If the value of the property is not tracks, create a new property and assign the value to it.
//If the property value is tracks, append the value into tracks.
//If the id doesn't have a track value, create an empty array of tracks and push the values into it.
//Finally, return the entire record collection.


let recordCollection = {
    1100: {
      albumTitle: "A New Day Has Come",
      artist: "Lucky Dube",
      tracks: ["Don't cry", "Remember Me", "Prisoner"]
    },
    1101: {
      albumTitle: "Reflections",
      artist: "Don William",
      tracks: ["Sing Me Back Home", "Talk is cheap", "Healing Hands"]
    },
    1102: {
      artist: "Brenda Fassie",
      tracks: []
    },
    1103: {
      albumTitle: "Tribute"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {

    if (value === ""){
      delete recordCollection[id][prop];

    }else if (prop !== "tracks"){
      recordCollection[id][prop] = value;

    }else {   
      if ("tracks" in recordCollection[id]){
        recordCollection[id].tracks.push(value);
      } else {
          recordCollection[id].tracks = [];
          recordCollection[id].tracks.push(value);
        }
    }
    return recordCollection;
  }

  console.log(updateRecords( 1103, "tracks", "Walts 78" ));