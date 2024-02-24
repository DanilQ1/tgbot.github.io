document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.display = 'none';
        document.querySelector('.app').style.display = 'flex'; 
    }, 2000);
});

document.getElementById('flipButton').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    result.textContent = '';
    coin.classList.add('flipping');
    setTimeout(() => {
      coin.classList.remove('flipping');
      let flipResult = Math.random() < 0.5;
      coin.style.backgroundImage = flipResult ? "url('1.png')" : "url('2.png')";
      result.textContent = flipResult ? "РЕШКА" : "ОРЕЛ";
    }, 2000);
  });

