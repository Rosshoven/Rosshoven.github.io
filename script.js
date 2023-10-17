    // document.getElementById('view-button-1').onclick = function () {
    //     window.location.href = "https://github.com/Rosshoven/Pacmen_Mod_7.git";
    // };

    // const beethoven = () => {
    //  let beethoven = getElementById('left').innerHTML;
    //  beethoven = 
    // }


// function beethoven () {
//         window.location.href="./Images/Beethoven-Warhol.jpg";
//     };

const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
