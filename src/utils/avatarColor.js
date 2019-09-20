export function avatarColor(name = '') {
  const colors = [
    '#3d5afe',
    '#43a047',
    '#ff6f00',
    '#f4511e',
    '#9c27b0',
    '#00796b',
    '#9c27b0',
    '#ec407a'
  ];

  const colorIndex = (name.charCodeAt(0) - 65) % colors.length;
  return colors[colorIndex];
}
