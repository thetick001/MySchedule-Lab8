$(document).ready(function (){
    $("input[name=day]").on("click", choice)
});
function choice() {

    let day = $("input:checked").data("day");

    if (day === "Sunday") {
        $("p#event").text("Sleep in")
        $("p#time").text("12:00 pm min")
    } else if (day === "Monday") {
        $("p#event").text("Work")
        $("p#time").text("7:00am - 4:00pm")
    } else if (day === "Tuesday") {
        $("p#event").text("Work")
        $("p#time").text("8:30am - 6:30pm")
    } else if (day === "Wednesday") {
        $("p#event").text("School")
        $("p#time").text("6:00am - 9:50pm")
    } else if (day === "Thursday") {
        $("p#event").text("Band practice")
        $("p#time").text("3:00pm - 11:00pm")
    } else if (day === "Friday") {
        $("p#event").text("Work")
        $("p#time").text("7:00am - 4:00pm")
    } else if (day === "Saturday") {
        $("p#event").text("Grocery shopping")
        $("p#time").text("10:00am - (11:00am - 12:00pm)")
    }
}
