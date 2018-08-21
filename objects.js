var playlist = {
  artistName : 'songTitle'
};

function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign({}, plalist, {
    
    artistName: ['']
    
  })
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  
  return playlist;
}