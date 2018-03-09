$(init);

function init()
{
    //cloneDragMe();
    //cloneDroppable();
    //$("#target").clone().insertAfter("div.target");
    $("button").hide();
    $(".dragMe1").draggable();
    $(".dragMe2").draggable();
    $(".dragMe3").draggable();
    $(".target1").droppable();
    $(".target2").droppable();
    $(".target3").droppable();
    $(".target1").bind("drop", highlightTarget1);
    $(".target1").bind("dropout", resetTarget1);
    $(".target2").bind("drop", highlightTarget2);
    $(".target2").bind("dropout", resetTarget2);
    $(".target3").bind("drop",highlightTarget3);
    $(".target3").bind("dropout",resetTarget3);


}


function cloneDragMe()
{
    for (i = 1; i < 3; i++) {
        if (i == 1) {
            zValue = 101 + i;
            xPos = 20 * i;
            yPos = 80 + 20 * i + "px";
            $("div:first").clone()
                .insertAfter("div:first")
                .css("left", xPos)
                .css("top", yPos)
                .css("zIndex", zValue)
                .append(" #" + i);
        }
    }
}

function highlightTarget1(event, ui)
{
    var text = $.trim(ui.draggable.text());

    //alert("text is "+ text);
    if(String(text) === "Movie") {
        //alert("correct");

        $(".target1").addClass("selected")
            .html("Dropped ")
            .append(ui.draggable.text());
    }

    if(($(".target1").hasClass("selected")) && ($(".target2").hasClass("selected")) && ($(".target3").hasClass("selected")))
    {
        alert("all 3 correct");
        $("button").show();
    }
}

function resetTarget1(event, ui)
{
    $(".target1").removeClass("selected")
        .html("Drop movie picture on me");
}

function highlightTarget2(event,ui)
{
    var text = $.trim(ui.draggable.text());
    //alert(text);
    if(String(text) === "Restaurant") {
        $(".target2").addClass("selected")
            .html("Dropped ")
            .append(ui.draggable.text());
    }

    if(($(".target1").hasClass("selected")) && ($(".target2").hasClass("selected")) && ($(".target3").hasClass("selected")))
    {
        alert("all 3 correct");
        $("button").show();
    }
}

function resetTarget2(event,ui)
{
    $(".target2").removeClass("selected")
        .html("Drop restaurant picture on me");

}

function highlightTarget3(event,ui)
{
    var text = $.trim(ui.draggable.text());
    if(String(text) === "Shopping") {
        $(".target3").addClass("selected")
            .html("Dropped ")
            .append(ui.draggable.text());
    }

    if(($(".target1").hasClass("selected")) && ($(".target2").hasClass("selected")) && ($(".target3").hasClass("selected")))
    {
        alert("all 3 correct");
        $("button").show();
    }
}

function resetTarget3(event,ui)
{
    $(".target3").removeClass("selected")
        .html("Drop shopping picture on me");


}