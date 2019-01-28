window.onresize = function() 
{
    var elem = document.getElementsByName('body');
    var navbar = document.getElementById('');
};

window.onclick = function(event)
{
    if (event.target != document.getElementById('small-screen-container'))
    {
        if (event.target != document.getElementById('links-img'))
        {
            var elems = document.getElementsByClassName('linksHidden');
            for (var i = 0; i < elems.length; i++) {
                var elem = elems[i];
                elem.style.display = "none";
            }
        }
    }
}

function showLinks()
{
    var elems = document.getElementsByClassName('linksHidden');
    for (var i = 0; i < elems.length; i++)
    {
        var elem = elems[i];
        elem.style.display = "block";
    }
}


