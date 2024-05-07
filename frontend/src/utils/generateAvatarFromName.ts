export type InitialColors = {
    foreground: string;
    background: string;
  };
  const colorCombinations: InitialColors[] = [
    {
      foreground: '#ffd37e',
      background: '	#6e70c5',
    },
    {
      foreground: '#eeb549',
      background: '#505492',
    },
    {
      foreground: '#6e70c5',
      background: '#eeb549',
    },
  ];
  export const getRandomColor = (fullname: string) => {
    const colorIndex =
      fullname?.length > 0
        ? fullname
          .split('')
          .map((x) => x.charCodeAt(0))
          .reduce((a, b) => a + b) % colorCombinations.length
        : 0;
    return colorCombinations[colorIndex];
  };


export const generateAvatarFromName = (fullname: string) => {
    const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const text = fullname.split(' ').map((item) => item.charAt(0).toUpperCase()).slice(0, 2).join('');

  const color = getRandomColor(fullname);

  canvas.width = 120;
  canvas.height = 120;

  // Draw background
  if (context) {
    context.fillStyle = color.background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = `bold 48px Inter`;
    context.fillStyle = color.foreground;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 1.9);
  }
  return text.length > 0 ? canvas.toDataURL('image/png') : undefined;

}