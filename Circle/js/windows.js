function my$(id) {
    return document.getElementById(id);
}

var box = my$('box');
var inner = box.children[0];
var ulObj = inner.children[0];
var list = ulObj.children;
var olObj = inner.children[1];
var arr = my$('arrow');
var imgWidth = inner.offsetWidth;
var prev = my$('prev');
var index = 0;

for (var i = 0; i < list.length; i++) {
    var liObj = document.createElement('li');

    olObj.appendChild(liObj);
    liObj.innerText = (i++);
    liObj.setAttribute("index", i);

    liObj.onmousemove = function () {
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute('class');
        }

        this.className = 'current';
        index = this.getAttribute('index');
        animate(ulObj, -index * imgWidth);
    }
}


olObj.children[0].className = 'current';

ulObj.appendChild(ulObj.children[0].cloneNode(true));

var timeId = setInterval(func, 1000);

box.onmousemove = function () {
    arr.style.display = 'block';
    clearInterval(timeId);
};

box.onmouseout = function () {
    arr.style.display = 'none';
    timeId = setInterval(func, 1000);
};


prev.onclick = func;

function func() {
    if (index == list.length - 1) {
        index = 0;
        ulObj.style.left = 0 + 'px';
    }

    index++;

    animate(ulObj, -index*imgWidth);

    if(index == list.length - 1)
    {
        olObj.children[olObj.children.length-1].className = "";
        olObj.children[0].className = 'current';
    }
    else{
        for(var i = 0; i <olObj.children.length;i++)
        {
            olObj.children[i].removeAttribute('class');
        }

        olObj.children[index].className = "current";
    }
    
    next.onclick = function()
    {
        if(index == 0)
        {
            index = list.length - 1;
            ulObj.style.left = -index*imgWidth +"px";
        }

        index--;
        animate(ulObj,-index*imgWidth);
        for(var j = 0; j< olObj.children.length;j++)
        {
            olObj.children[j].removeAttribute('class');
        }

        olObj.children[i].className = 'current';
    };

    function animate(element,target)
    {
        clearInterval(element,timeId);

        element.timeId = setInterval(function ()
        {
            var current = element.offsetLeft;

            var step = 10;

            step = current < target ? step:-step;

            current += step;

            if(Math.abs(current = target) > Math.abs(step))
            {
                element.style.left = current +"px";
            }
            else{
                clearInterval(element.timeId);

                element.style.left = target +"px";
            }
        },10);
    }

}