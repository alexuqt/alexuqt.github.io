function changeTheme() { 
  const container = document.documentElement;
  const svg = document.getElementById('svg-color');
  const theme = container.getAttribute('data-theme');

  if(theme === 'bw') {
    container.setAttribute('data-theme', 'g');
    svg.setAttribute('fill', '#ecf39e');
    
  } else {
    container.setAttribute('data-theme', 'bw');
    svg.setAttribute('fill', '#f8f9fa');
  }
}