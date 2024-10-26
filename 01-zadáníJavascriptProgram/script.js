function ageCheck(number)
{
    if (document.getElementById("ageCheck"))
}

function jednaDeset()
{
    let table = document.getElementById("jednaDeset");

    table.innerHTML = "";

    let tr;
    let td;
    for(let i = 1; i <= 10; i++)
    {
        tr = document.createElement("tr");
        td = document.createElement("td");

        td.innerText = i;

        tr.appendChild(td);
        table.appendChild(tr);
    }
}
function suma(x, y, goal)
{
    goal.value = parseInt(x) + parseInt(y);
    return x+y;
}
