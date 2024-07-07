import songsData from "./songsData.js";

// Get the container element where you want to append the song items
const songItemContainer = document.getElementById("songItemContainer");

// Loop through the songsData and create the songItem dynamically
songsData.forEach((song, index) => {
  const songItem = document.createElement("div");
  songItem.className = "songItem";

  // Create img element
  const imgElement = document.createElement("img");
  imgElement.alt = song.id;
  imgElement.src = song.coverPath;
  // Append img to songItem
  songItem.appendChild(imgElement);

  // Create span elements for songName
  const songNameSpan = document.createElement("span");
  songNameSpan.className = "songName";
  songNameSpan.textContent = song.songName;

  // Append span elements to songItem
  songItem.appendChild(songNameSpan);

  // Create span element for songlistplay
  const songListPlaySpan = document.createElement("span");
  songListPlaySpan.className = "songlistplay";

  //Create span element for timestamp
  const timestampSpan = document.createElement("span");
  timestampSpan.className = "timestamp";
  timestampSpan.textContent = song.timestamp;

  //Append span element to songListPlaySpan
  songListPlaySpan.appendChild(timestampSpan);

  // Create i element for songItemPlay
  const songItemPlayIcon = document.createElement("i");
  songItemPlayIcon.id = song.id;
  songItemPlayIcon.className = "songItemPlay fa-regular fa-circle-play";

  // Append i to songlistplay
  songListPlaySpan.appendChild(songItemPlayIcon);

  // Append songlistplay to songItem
  songItem.appendChild(songListPlaySpan);

  // Append songItem to the container
  songItemContainer.appendChild(songItem);
});
