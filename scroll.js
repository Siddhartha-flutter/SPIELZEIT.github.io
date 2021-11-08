var menu = document.getElementById("arrow");
window.onscroll = function(){scrollit()};
function scrollit()
{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("header").style.fontSize = "9px";
        document.getElementById("logo").style.maxWidth = "50%";
        document.getElementById("header").style.backgroundColor = "rgba(0, 193, 203, 0.6)";
        document.getElementById("header").style.backgroundBlendMode = "darken";
        menu.style.display = "block";
    }
    else
    {
        document.getElementById("header").style.fontSize = "16px";
        document.getElementById("logo").style.maxWidth = "100%";
        document.getElementById("header").style.backgroundColor = "#00c2cb";
        menu.style.display = "none";
    }
  }