// Artwork Data Management
// Update this file with your actual artwork information

export const myArtworks = [
  // Colored Artworks
  {
    id: 1,
    title: "Kanao Tsuyuri",
    image: "/images/colored/kanao-tsuyuri.jpeg",
    category: "colored",
    description: "Beautiful colored artwork of Kanao Tsuyuri from Demon Slayer",
    price: 25.99
  },
  {
    id: 2,
    title: "Sasuke Uchiha", 
    image: "/images/colored/sasuke-uchiha.jpeg",
    category: "colored",
    description: "Vibrant colored illustration of Sasuke Uchiha from Naruto",
    price: 29.99
  },
  {
    id: 3,
    title: "Shouko Komi",
    image: "/images/colored/shouko-komi.png",
    category: "colored", 
    description: "Adorable colored artwork of Shouko Komi from Komi Can't Communicate",
    price: 24.99
  },
  {
    id: 4,
    title: "Tanjiro Kamado",
    image: "/images/colored/tanjiro-kamado.jpeg",
    category: "colored",
    description: "Stunning colored portrait of Tanjiro Kamado from Demon Slayer",
    price: 27.99
  },

  // Inked Artworks
  {
    id: 5,
    title: "Hinata Hyuga",
    image: "/images/inked/hinata-hyuga.jpeg",
    category: "inked",
    description: "Detailed black and white artwork of Hinata Hyuga from Naruto",
    price: 22.99
  },
  {
    id: 6,
    title: "Koucho Shinobu",
    image: "/images/inked/koucho-shinobu.jpeg", 
    category: "inked",
    description: "Elegant inked illustration of Koucho Shinobu from Demon Slayer",
    price: 26.99
  },
  {
    id: 7,
    title: "Naruto Uzumaki",
    image: "/images/inked/naruto-uzumaki.jpeg",
    category: "inked",
    description: "Dynamic black and white artwork of Naruto Uzumaki",
    price: 25.99
  },
  {
    id: 8,
    title: "Sakura Haruno",
    image: "/images/inked/sakura-haruno.jpeg",
    category: "inked",
    description: "Beautiful inked portrait of Sakura Haruno from Naruto",
    price: 23.99
  }
];

// Helper functions
export const getColoredArtworks = () => myArtworks.filter(art => art.category === 'colored');
export const getInkedArtworks = () => myArtworks.filter(art => art.category === 'inked');
export const getArtworkById = (id) => myArtworks.find(art => art.id === id);