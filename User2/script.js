
        const events = [
    {
        title: "Music fest",category:"music", date: "2025-11-02"
    },
    {
        title: "Tech meet",category:"tech", date: "2025-11-04"   
    },
    {
        title: "Designing Workshop",category:"tech", date: "2025-11-06"
    }
]
const box = document.getElementById("box");
const filter= document.getElementById("filter");

function showEvents(list) 
{
    box.innerHTML = "";
    for (let i=0;i<list.length;i++)
        {
        const e =list[i]
        const col = document.createElement("div");
        col.className="col-6";
        col.innerHTML = "<div class='p-2 border rounded bg-white'>" + e.title + "<br>" + e.date + "</div>";
        box.appendChild(col);
        }
}
filter.onchange = function()
{
    const val = filter.value;
    const newList =[];
    for (let i=0;i<events.length;i++){
        if(val==="all" || events[i].category===val)
        {
            newList.push(events[i]);
        }
    }
    showEvents(newList);

}
showEvents(events);