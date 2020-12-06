function getImage(image) {
  switch (image) {
    case 'call-of-duty-infinite-warfare.png':
      return require('../assets/call-of-duty-infinite-warfare.png');
    case 'super-mario-odyssey.png':
      return require('../assets/super-mario-odyssey.png');
    case 'the-witcher-iii-wild-hunt.png':
      return require('../assets/the-witcher-iii-wild-hunt.png');
    case 'call-of-duty-wwii.png':
      return require('../assets/call-of-duty-wwii.png');
    case 'mortal-kombat-xl.png':
      return require('../assets/mortal-kombat-xl.png');
    case 'shards-of-darkness.png':
      return require('../assets/shards-of-darkness.png');
    case 'terra-media-sombras-de-mordor.png':
      return require('../assets/terra-media-sombras-de-mordor.png');
    case 'fifa-18.png':
      return require('../assets/fifa-18.png');
    default:
      return require('../assets/horizon-zero-dawn.png');
  }
}

export default getImage;
