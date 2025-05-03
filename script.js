const vibeData = {
  Happy: {
    colors: ['#FFD700','#FF69B4','#FFB6C1'],
    songs: [
      { name: 'Happy - Pharrell Williams', url: 'https://youtu.be/y6Sxv-sUYtM' },
      { name: 'Can’t Stop the Feeling - Justin Timberlake', url: 'https://youtu.be/ru0K8uYEZWw' }
    ],
    quotes: [
      "Happiness is not by chance, but by choice.",
      "Choose joy every day."
    ]
  },
  Sad: {
    colors: ['#708090','#A9A9A9','#4682B4'],
    songs: [
      { name: 'Let Her Go - Passenger', url: 'https://youtu.be/RBumgq5yVrA' },
      { name: 'Someone Like You - Adele', url: 'https://youtu.be/hLQl3WQQoQ0' }
    ],
    quotes: [
      "Tears are the silent language of grief.",
      "Sometimes, letting go is the only way."
    ]
  },
  Friends: {
    colors: ['#4CAF50','#81C784','#AED581'],
    songs: [
      { name: 'Count on Me - Bruno Mars', url: 'https://youtu.be/yJYXItns2ik' },
      { name: 'Best Day of My Life - American Authors', url: 'https://youtu.be/Y66j_BUCBMY' }
    ],
    quotes: [
      "Friends are the family we choose.",
      "Good times + crazy friends = amazing memories."
    ]
  },
  Aesthetic: {
    colors: ['#D8BFD8','#E6E6FA','#F5E1FD'],
    songs: [
      { name: 'Sweater Weather - The Neighbourhood', url: 'https://youtu.be/GCdwKhTtNNw' },
      { name: 'Electric Feel - MGMT', url: 'https://youtu.be/MxvLO68KqYs' }
    ],
    quotes: [
      "Beauty is how you feel inside, and it reflects in your eyes.",
      "Create your own aesthetic."
    ]
  },
  Romantic: {
    colors: ['#FFC0CB','#FF69B4','#FFB6C1'],
    songs: [
      { name: 'Perfect - Ed Sheeran', url: 'https://youtu.be/2Vv-BfVoq4g' },
      { name: 'All of Me - John Legend', url: 'https://youtu.be/450p7goxZqg' }
    ],
    quotes: [
      "Love is composed of a single soul inhabiting two bodies.",
      "You are my today and all of my tomorrows."
    ]
  },
  Dark: {
    colors: ['#2C2C2C','#1A1A1D','#0D0D0D'],
    songs: [
      { name: 'Heathens - Twenty One Pilots', url: 'https://youtu.be/UprcpdwuwCg' },
      { name: 'Lovely - Billie Eilish ft Khalid', url: 'https://youtu.be/V1Pl8CzNzCw' }
    ],
    quotes: [
      "In the midst of darkness, seek the light.",
      "Embrace the shadows to know the light."
    ]
  },
  Calm: {
    colors: ['#ADD8E6','#B0E0E6','#E0FFFF'],
    songs: [
      { name: 'Weightless - Marconi Union', url: 'https://youtu.be/UfcAVejslrU' },
      { name: 'Bloom - The Paper Kites', url: 'https://youtu.be/8inJtTG_DuU' }
    ],
    quotes: [
      "Peace begins with a smile.",
      "Calm mind brings inner strength."
    ]
  }
};

function generateVibe(vibe) {
  const data = vibeData[vibe];

  // Colors
  const colorContainer = document.getElementById('colorSuggestions');
  colorContainer.innerHTML = '';
  data.colors.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="color-box" style="background:${c}"></div><p>${c}</p>`;
    colorContainer.appendChild(card);
  });

  // Songs
  const songContainer = document.getElementById('songList');
  songContainer.innerHTML = '';
  data.songs.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<a href="${s.url}" target="_blank">${s.name}</a>`;
    songContainer.appendChild(card);
  });

  // Quotes
  const quoteContainer = document.getElementById('quoteList');
  quoteContainer.innerHTML = '';
  data.quotes.forEach(q => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<p>"${q}"</p>`;
    quoteContainer.appendChild(card);
  });
}
