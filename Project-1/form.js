
        var data = {
            Name : null,
            Phone : null,
            Email : null,
            Trip : "OUTSTATION",
            Type : "ONEWAY",
            From : null,
            To : null,
            Pick_Date : null,
            Pick_Time : null,
            distance : null,
            duration : null,
            error : null
        }

        // data.Trip = "One Way"; 
        // data.Type = "Economy"; 
        // data.From = "New York"; 
        // data.To = "Los Angeles"; 
        // data.Pick_Date = "2024-12-25";
        // data.Pick_Time = "10:30 AM"; 

        console.log(data)
        function selectTripType(event, tripType) {
            const tripButtons = document.querySelectorAll('.trip-btn');
            data.Type = tripType; 
            tripButtons.forEach((btn) => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            if(tripType === "DROP TO AIRPORT" ){

                document.getElementById("toAddress").value = "Chennai International Airport (MAA), Airport Road, Meenambakkam, Chennai, Tamil Nadu, India"
                document.getElementById("fromAddress").value = null

         

            }else if(tripType === "PICK FROM AIRPORT" ){
                document.getElementById("fromAddress").value = "Chennai International Airport (MAA), Airport Road, Meenambakkam, Chennai, Tamil Nadu, India"
                document.getElementById("toAddress").value = null;

            }
        }
        function openTab(event, tabName) {
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            event.target.classList.add('active');
            if(tabName === "OUTSTATION"){
                
            data.Name = null;
            data.Phone = null;
            data.Email = null;

            data.Trip = "OUTSTATION"; 
            data.Type = "ONEWAY"; 
            data.From = null; 
            data.To = null; 
            data.Pick_Date = null;
            data.Pick_Time = null; 

                document.getElementById("tripsi").innerHTML = `
                    <button class="trip-btn active" onclick="selectTripType(event, 'ONEWAY')">ONE WAY</button>
                    <button class="trip-btn" onclick="selectTripType(event, 'ROUNDTRIP')">ROUND TRIP</button>
                                `;
                document.getElementById("createform").innerHTML = `

                 <div class="form-group">
                    <label for="user_name">Name</label>
                    <input type="text" id="user_name" required>
                </div> 
                <div class="form-group">
                    <label for="user_phone">Phone</label>
                    <input type="number" id="user_phone" required>
                </div>
                 <div class="form-group">
                    <label for="user_email">Email</label>
                    <input type="email" id="user_email">
                </div>


                <div class="form-group">
                    <label for="fromAddress">FROM</label>
                    <input type="text" id="fromAddress" onchange="initAutocomplete" required>
                </div>
                <div class="form-group">
                    <label for="toAddress">TO</label>
                    <input type="text" id="toAddress" required>
                </div>
                <div class="form-group inline">
                    <div>
                        <label for="pickupDate">PICK UP </label>
                        <input type="date" id="pickupDate" value="2024-11-28" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pickupTime">PICK UP AT</label>
                    <input type="time" id="pickupTime" value="07:00" required>
                </div>
                <button type="submit" class="explore-btn">EXPLORE CABS</button>
                                `;
                initAutocomplete();

            }
        else if(tabName === "LOCAL"){

        data.Name = null;
        data.Phone = null;
        data.Email = null;
        data.Trip = "LOCAL"; 
        data.Type = "local"; 
        data.From = null; 
        data.To = null; 
        data.Pick_Date = null;
        data.Pick_Time = null; 

            document.getElementById("tripsi").innerHTML = `
                    
                                `;

            document.getElementById("createform").innerHTML = `
                <div class="form-group">
                    <label for="user_name">Name</label>
                    <input type="text" id="user_name" required>
                </div> 
                <div class="form-group">
                    <label for="user_phone">Phone</label>
                    <input type="number" id="user_phone" required>
                </div>
                 <div class="form-group">
                    <label for="user_email">Email</label>
                    <input type="email" id="user_email">
                </div>



                <div class="form-group">
                    <label for="fromAddress">Pick At</label>
                    <input type="text" id="fromAddress" required>
                </div>
                <div class="form-group inline">
                    <div>
                        <label for="pickupDate">PICK UP DATE</label>
                        <input type="date" id="pickupDate" value="2024-11-28" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pickupTime">PICK UP TIME</label>
                    <input type="time" id="pickupTime" value="07:00" required>
                </div>
                <button type="submit" class="explore-btn">EXPLORE CABS</button>`
                initAutocomplete();

        }
        else if(tabName === "AIRPORT"){

        data.Name = null;
        data.Phone = null;
        data.Email = null;
        data.Trip = "AIRPORT"; 
        data.Type = "DROP TO AIRPORT"; 
        data.From = null; 
        data.To = null; 
        data.Pick_Date = null;
        data.Pick_Time = null; 

            document.getElementById("tripsi").innerHTML = `
                    <button class="trip-btn active" onclick="selectTripType(event, 'DROP TO AIRPORT')">DROP TO AIRPORT</button>
                    <button class="trip-btn" onclick="selectTripType(event, 'PICK FROM AIRPORT')">PICK FROM AIRPORT</button>
                                `;
                document.getElementById("createform").innerHTML = `
                <div class="form-group">
                    <label for="user_name">Name</label>
                    <input type="text" id="user_name" required>
                </div> 
                <div class="form-group">
                    <label for="user_phone">Phone</label>
                    <input type="number" id="user_phone" required>
                </div>
                 <div class="form-group">
                    <label for="user_email">Email</label>
                    <input type="email" id="user_email">
                </div>



                <div class="form-group">
                    <label for="fromAddress">FROM</label>
                    <input type="text" id="fromAddress" required>
                </div>
                <div class="form-group">
                    <label for="toAddress">TO</label>
                    <input type="text" id="toAddress" required>
                </div>
                <div class="form-group inline">
                    <div>
                        <label for="pickupDate">PICK UP </label>
                        <input type="date" id="pickupDate" value="2024-11-28" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pickupTime">PICK UP AT</label>
                    <input type="time" id="pickupTime" value="07:00" required>
                </div>
                <button type="submit" class="explore-btn">EXPLORE CABS</button>
                                `;
                initAutocomplete();
                document.getElementById("toAddress").value = "Chennai International Airport (MAA), Airport Road, Meenambakkam, Chennai, Tamil Nadu, India"
                document.getElementById("fromAddress").value = null


        }
        
        }
 
  
        let originInput, destinationInput;

            


// Initialize Google Places Autocomplete
    function initAutocomplete() {
    originInput = new google.maps.places.Autocomplete(document.getElementById("fromAddress"));
    destinationInput = new google.maps.places.Autocomplete(document.getElementById("toAddress"));
    console.log("function working")
    console.log(originInput)
}


window.onload = initAutocomplete;
// Initialize the autocomplete fields when the page loads

  


    document.getElementById('createform').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the page from refreshing

    //   data.error = "Error while find distance and time";
    //   const origin = document.getElementById("fromAddress").value;
    //   const destination = document.getElementById("toAddress").value;
    //   const service = new google.maps.DistanceMatrixService();


    //   service.getDistanceMatrix(
    //             {
    //                 origins: [origin],
    //                 destinations: [destination],
    //                 travelMode: google.maps.TravelMode.DRIVING,
    //             },
    //             (response, status) => {
    //                 if (status === google.maps.DistanceMatrixStatus.OK) {
    //                     var distance = response.rows[0].elements[0].distance.text;
    //                     var duration = response.rows[0].elements[0].duration.text;
    //                     data.distance = distance;
    //                     data.duration = duration;
    //                     data.error = "Error while find distance and time";
    //                 } else {
    //                     console.log("done")
    //                 }
    //             }
    //         );


        data.Name = document.getElementById("user_name") ? document.getElementById("user_name").value : null; 
        data.Phone = document.getElementById("user_phone") ? document.getElementById("user_phone").value : null; 
        data.Email = document.getElementById("user_email") ? document.getElementById("user_email").value : null; 
        data.From = document.getElementById("fromAddress") ? document.getElementById("fromAddress").value : null; 
        data.To = document.getElementById("toAddress") ? document.getElementById("toAddress").value : null; 
        data.Pick_Date = document.getElementById("pickupDate") ? document.getElementById("pickupDate").value : null; 
        data.Pick_Time = document.getElementById("pickupTime") ? document.getElementById("pickupTime").value : null; 
        localStorage.setItem("userData", JSON.stringify(data));
        console.log("Page 1 Loading")
        console.log(data)
        window.location.href = "booking.html";
    });
