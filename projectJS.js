const formy = document.getElementById("form")
// retrieving the form inputs
    formy.addEventListener("submit", function(event){
        event.preventDefault()
        let name = document.getElementById("name").value
        let goal = document.getElementById("goal").value;
        let breakfast = document.getElementById("Breakfast").value;
        let snack1 = document.getElementById("snack_1").value;
        let lunch = document.getElementById("lunch").value;
        let snack2 = document.getElementById("snack_2").value;
        let dinner = document.getElementById("dinner").value;

        //new page
        document.write(".")
        var mywindow = window.open("apeen.html", "MsgWindow","width=500, height=500")
        //retrieving banner
        let a = document.createElement("img")
        a.src="banner.png"

        document.body.appendChild(a)
        //making line
        let b = document.createElement("hr")
        b.style="border: 5px solid"
        document.body.appendChild(b)
        //making paragraph
        let c = document.createElement("p")
        document.body.appendChild(c)
        document.body.style = "text-align: center;"
        c.innerHTML = `Hello, ${name}, here is your meal plan!`
        
        mywindow.onload = function() {
        let d = mywindow.document.createElement("pre")
        //showing meal plan
        d.innerHTML =   `

Your Goal:${goal}

Monday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Tuesday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Wednesday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Thursday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Friday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Saturday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+

Sunday
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|              Breakfast           |              Snack 1             |               Lunch              |              Snack 2             |              Dinner              |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
|${breakfast + " ".repeat(34 - breakfast.length)}|${snack1 + " ".repeat(34 - snack1.length)}|${lunch + " ".repeat(34 - lunch.length)}|${snack2 + " ".repeat(34 - snack2.length)}|${dinner + " ".repeat(34 - dinner.length)}|
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
`;




        mywindow.document.body.appendChild(d)
        //making print button
        let print = mywindow.document.createElement("button")
        print.textContent = "Print"

        print.addEventListener("click", function() {
            mywindow.print()
        })
        mywindow.document.body.appendChild(print)
            

        //making clear button
        let clear = mywindow.document.createElement("button")
        clear.textContent = "Clear Meal Plan"

        clear.addEventListener("click", function() {
            mywindow.document.body.innerHTML=" "
        })
        mywindow.document.body.appendChild(clear)
        //making a button to reset the form
        
        let reset = document.createElement("button")
        reset.textContent = "Reset"

        reset.addEventListener("click", function() {
            open("finalProject.html")
        })
        document.body.appendChild(reset)
            
        }
        

    })


