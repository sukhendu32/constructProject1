

let store=JSON.parse(localStorage.getItem("signInObj"));

if(store!=null){

   document.getElementById("localSignIn").innerText=store.signUpFirstName
   document.getElementById("localSignUp").style.display="none";
}



amenities=[
    {icon:"fa-solid fa-person-swimming", text:"Pool"},
    {icon:"fa-regular fa-snowflake" , text:"Air conditioning"},
    {icon:"fa-solid fa-wifi" , text:"Free Wifi"},
    {icon:"fa-solid fa-utensils", text:"Restaurant"},
    {icon:"fa-solid fa-p", text:"Parking Included"},
    {icon:"fa-solid fa-dumbbell", text:"Gym"}
]

amenities.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#amenities").append(div);
});

cleaningSafety=[
    {icon:"fa-solid fa-pump-medical", text:"Cleaned with disinfectant"},
    {icon:"fa-solid fa-clock", text:"24-hour vacancy between guest room stays"},
    {icon:"fa-solid fa-bell-concierge", text:"Contactless check-in"},
    {icon:"fa-solid fa-pump-soap", text:"Hand sanitiser provided"},
]

cleaningSafety.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#cleaningSafety").append(div);
});

mapp=[
    {icon:"fa-solid fa-location-dot", text:"Saturday Night Market" ,time: "9 min walk"},
    {icon:"fa-solid fa-location-dot", text:"Baga Night Market" ,time: "13 min walk"},
    {icon:"fa-solid fa-car", text:"Miraculous Cross" ,time: "3 min drive"},
    {icon:"fa-solid fa-car", text:"Goa (GOI-Dabolim)" ,time: "44 min drive"}
]

mapp.forEach(ele=>{

    let div1 =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div1.append(i,p);
    div2=document.createElement("div");
    div2.innerText=ele.time
    document.querySelector("#explore").append(div1,div2);
});

// counting no of days.....

let noOfDays=0;
let btn = document.querySelector("#check");
  btn.addEventListener("click", function () {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let checkInDate = new Date(document.querySelector("#checkIn").value);
    let checkOutDate = new Date(document.querySelector("#checkOut").value);
    noOfdays = Math.abs(checkOutDate.getTime() / day - checkInDate.getTime() / day);
    localStorage.setItem("noOfDays", noOfdays) 
    localStorage.setItem("checkInDate", checkInDate);
    localStorage.setItem("checkOutDate", checkOutDate);
  });
 
// overlay of travellers details.....

// let roomCount=1;


// let cross=document.createElement("button");
// cross.innerText="X";
// let head=document.createElement("h3");
// head.innerText="Travellers";
// let hr2=document.createElement("hr");
// document.querySelector("#travellers").append(cross,head,hr2);
//  room();

// function room(){
//     let adultCount=1;
//     let childCount=0;
//     let div=document.createElement("div");

//     let p1=document.createElement("p");
//     p1.innerText="Room "+roomCount;

//     let table=document.createElement("table");

//     let tr1=document.createElement("tr");

//     let td1=document.createElement("td");
//     td1.innerText="Adults";

//     let td2=document.createElement("td");
//     let btn1=document.createElement("button");
//     btn1.innerText="-";
    
//     btn1.addEventListener("click", function(){
//         decrease1(adultCount, count1);
//     });
//     let count1=document.createElement("p");
//     count1.innerText= adultCount;

//     let btn2=document.createElement("button");
//     btn2.innerText="+";
//     btn2.addEventListener("click", function(){
//         increase1(adultCount, count1, btn1);
//     });
//     td2.append(btn1,count1,btn2);

//     tr1.append(td1,td2);

//     let tr2=document.createElement("tr");

//     let td3=document.createElement("td");
//     td3.innerText="Children";

//     let td4=document.createElement("td");
//     let btn3=document.createElement("button");
//     btn3.innerText="-";
//     btn3.disabled=true;
//     btn3.addEventListener("click", function(){
//         decrease2(adultCount, count2);
//     });
//     let count2=document.createElement("p");
//     count2.innerText=childCount;
//     let btn4=document.createElement("button");
//     btn4.innerText="+";
//     btn4.addEventListener("click", function(){
//         increase(adultCount, childCount, btn3, btn1);
//     });
     
//     td4.append(btn3,count2,btn4);

//     tr2.append(td3,td4);
//     let hr1=document.createElement("hr");

//     table.append(tr1,tr2);
//     div.append(p1,table,hr1);
    
//     let addBtn=document.querySelector("button");
//     addBtn.innerText="Add another room";
//     addBtn.addEventListener("click",function(){
//         addRoom(div);
//     })

//     document.querySelector("#travellersOverlay").append(div, addBtn);
    

// }

// function for decreasing count;

//  function decrease1(adultCount, count1){
//     if(count1.innerText==1){
//         event.target.disabled=true;
//     }else{
//         adultCount--;
//         count1.innerText=adultCount; 
//     }           
//  }
//  function decrease2(childCount, count2){
//     if(count2.innerText==0){
//         event.target.disabled=true;
//     }else{
//         adultCount--;
//         count2.innerText=childCount;
//     }
//  }

//  function for increasing count;

//  function increase1(adultCount, count1, btn1){
//     btn1.disabled=false;
//     if(count1.innerText==2){
//         event.target.disabled=true;
//     }else{
//         adultCount++;
//         count1.innerText=adultCount;
//     }
//  }

//  function addRoom(div){
//     event.target.remove();
//     roomCount++;
//     room();
//     let remove=document.createElement("button");
//     remove.innerText="Remove Room";
//     remove.addEventListener("click", function(){
//         event.target.parentNode.remove();
//         roomCount--;
//     })
//     div.append(remove);
//  }

// Details of how many rooms and travellers.........

let noOfroom=document.querySelector("#noOfRooms");
localStorage.setItem("noOfroom", noOfroom.value);

let noOfTravellers=document.querySelector("#noOfTravellers");


document.querySelector("#check").addEventListener("click",checkAvailability);

function checkAvailability(){

    localStorage.setItem("noOfroom", noOfroom.value);   
    localStorage.setItem("noOfTravellers", noOfTravellers.value);

    if(noOfTravellers.value > 2 * noOfroom.value){
        p1=document.querySelector("#notAvailable>p");
        p1.innerText="The available rooms can't accommodate "+ noOfTravellers.value+" guests. Add another room.";        
        document.querySelector("#notAvailable").style.display="block";
        document.querySelector("#chooseRoom").style.display="none";
    }
    else{
        document.querySelector("#notAvailable").style.display="none";
        document.querySelector("#chooseRoom").style.display="grid";

    }
}
roomData = [
    {
      img: "https://i.ibb.co/frsQLXQ/ec4b1f9e.webp",
      name: "Room, 1 Queen Bed, Non Smoking",
      area: "194 sq ft",
      view: "City view",
      sleep: 2,
      bed: "1 Queen Bed",
      wifi: "Free WiFi",
      parking: "Free self-parking",
      paymentType: "Reserve now, pay later",
      price: 5349,
    },
    {
      img: "https://i.ibb.co/ZB6Y4TT/449c65d9.webp",
      name: "Room, 1 Single Bed, Non Smoking",
      area: "194 sq ft",
      view: "City view",
      sleep: 2,
      bed: "1 Single Bed",
      wifi: "Free WiFi",
      parking: "Free self-parking",
      paymentType: "Reserve now, pay later",
      price: 5349,
    },
    {
      img: "https://images.trvl-media.com/hotels/16000000/15520000/15518800/15518705/a4403450.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      name: "Room, 2 Single Beds, Non Smoking, Pool View",
      area: "194 sq ft",
      view: "Pool view",
      sleep: 2,
      bed: "2 Single Bed",
      wifi: "Free WiFi",
      parking: "Free self-parking",
      paymentType: "Reserve now, pay later",
      price: 6549,
    },
    {
      img: "https://images.trvl-media.com/hotels/16000000/15520000/15518800/15518705/52b4be52.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      name: "Room, 2 Single Beds, Non Smoking",
      area: "194 sq ft",
      view: "Hill view",
      sleep: 2,
      bed: "1 Queen Bed",
      wifi: "Free WiFi",
      parking: "Free self-parking",
      paymentType: "Reserve now, pay later",
      price: 6549,
    },
    {
      img: "https://images.trvl-media.com/hotels/16000000/15520000/15518800/15518705/c3ca2100.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      name: "Studio Suite, 1 Queen Bed, Non Smoking, Pool View",
      area: "194 sq ft",
      view: "Pool view",
      sleep: 2,
      bed: "1 Queen Bed",
      wifi: "Free WiFi",
      parking: "Free self-parking",
      paymentType: "Reserve now, pay later",
      price: 7799,
    }
  ];
  
unList=[
    {icon:"fa-solid fa-ruler-combined", text:"194 sq ft"},
    {icon:"fa-solid fa-city", text:"City view"},
    {icon:"fa-solid fa-user-group" ,text: "Sleeps 2"},
    {icon:"fa-solid fa-bed", text: "1 Queen Bed"},
    {icon:"fa-solid fa-wifi", text: "Free WiFi"},
    {icon:"fa-solid fa-square-parking", text:"Free self-parking"},
    {icon:"fa-solid fa-check", text:"Reserve now, pay later"},

]
let refundOneDaybefore= 1800;
// localStorage.setItem("refundOneDaybefore", refundOneDaybefore);

let breakFastbuffet= 750;
// localStorage.setItem("breakFastbuffet", breakFastbuffet);

let totalMenupack=2750;
// localStorage.setItem("totalMenupack",totalMenupack);



  chooseRoom(roomData);


  function chooseRoom(roomData){

    

    roomData.forEach(ele=>{

        let variablePrice=0;

        let roomSpace=document.createElement("div");

        let imgDiv=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.img;
        imgDiv.append(image);

        let roomTitle=document.createElement("h3");
        roomTitle.innerText=ele.name;

       let unOrderedlist=document.createElement("ul");
       unOrderedlist.setAttribute("class","fa-ul");

       unList.forEach((element)=>{

         let list=document.createElement("li");
         let span=document.createElement("span");
         span.setAttribute("class","fa-li");
         let ic=document.createElement("i");
         ic.setAttribute("class",element.icon)
         span.append(ic);
         list.innerText=element.text;
         list.append(span);
         unOrderedlist.append(list);
       });

       let line=document.createElement("hr");
       let cancelDiv=document.createElement("div");
       cancelDiv.id="cancelDiv"

       let div1=document.createElement("div");
       div1.innerText="Cancellation policy";
       div1.id="policy";

       let div2=document.createElement("div");
       div2.innerText="per night";

       let div3=document.createElement("div");
       let checkbox1=document.createElement("input");
       checkbox1.type="radio";
       checkbox1.className="radio11"
       checkbox1.name="radio1";
       checkbox1.value=0;
       let label1=document.createElement("label");
       label1.innerText="Fully refundable 2 days before";
       div3.append(checkbox1, label1);

       let div4=document.createElement("div");
       div4.innerText="+ Rs0";

       let div5=document.createElement("div");
       let checkbox2=document.createElement("input");
       checkbox2.type="radio";
       checkbox2.name="radio1";
       checkbox2.value=refundOneDaybefore;
       let label2=document.createElement("label");
       label2.innerText="Fully refundable  1 day before";
       div5.append(checkbox2, label2);

       let div6=document.createElement("div");
       div6.innerText="+ Rs"+refundOneDaybefore;

       cancelDiv.append(div1,div2,div3,div4,div5,div6);

       let extraDiv=document.createElement("div");
       extraDiv.id="extraDiv";

       let line1=document.createElement("hr");

       let div7=document.createElement("div");
       div7.innerText="Extras";
       div7.id="extra";

       let div8=document.createElement("div");
       div8.innerText="per night";

       let div9=document.createElement("div");
       let checkbox3=document.createElement("input");
       checkbox3.type="radio";
       checkbox3.name="radio2"
       checkbox3.value=0;
       let label3=document.createElement("label");
       label3.innerText="No Extras";
       div9.append(checkbox3,label3);

       
       let div10=document.createElement("div");
       div10.innerText="+ Rs0";

       let div11=document.createElement("div");
       let checkbox4=document.createElement("input");
       checkbox4.type="radio";
       checkbox4.name="radio2"
       checkbox4.value=breakFastbuffet;
       let label4=document.createElement("label");
       label4.innerText="Breakfast buffet";
       div11.append(checkbox4,label4);

       let div12=document.createElement("div");
       div12.innerText="+ Rs "+breakFastbuffet;

       let div13=document.createElement("div");
       let checkbox5=document.createElement("input");
       checkbox5.type="radio";
       checkbox5.name="radio2"
       checkbox5.value=totalMenupack
       let label5=document.createElement("label");
       label5.innerText="Breakfast buffet + Lunch + Dinner + Special deal";
       div13.append(checkbox5,label5);

       let div14=document.createElement("div");
       div14.innerText="+ Rs "+totalMenupack;

       let btn15=document.createElement("button");
       btn15.innerText="Click to confirm"
       btn15.addEventListener("click", function(){

        if(checkbox2.checked){
            variablePrice+=Number(checkbox2.value);
        }if(checkbox4.checked){
            variablePrice+=Number(checkbox4.value);
        }else if(checkbox5.checked){
            variablePrice+=Number(checkbox5.value);
        }
        console.log(variablePrice);
        pricePerNight.innerText= "Rs"+(ele.price + variablePrice);

        let z=(ele.price +variablePrice) * Number(noOfroom.value) * localStorage.getItem("noOfDays");
        localStorage.setItem("totalTax", z*0.18)

        total.innerText="Rs"+ Math.ceil(z + 0.18*z) +" total";
        localStorage.setItem("totalExpense", Math.ceil(z*1.18));
        variablePrice=0;
       });

       extraDiv.append(div7,div8,div9,div10,div11, div12, div13, div14, btn15 );

       
        let divv=document.createElement("div");
        divv.id="positioningDiv"
        let expenseDiv=document.createElement("div");
        expenseDiv.id="expenseDiv";
        let pricePerNight=document.createElement("h2");
        pricePerNight.innerText= "Rs"+(ele.price + variablePrice);
        let total=document.createElement("p");

        let y=(ele.price +variablePrice) * Number(noOfroom.value);

        total.innerText="Rs"+Math.ceil(y + 0.18*(y))+" total";

        document.querySelector("#check").addEventListener("click", function(){

            let x= (ele.price +variablePrice) * Number(noOfroom.value) * localStorage.getItem("noOfDays")

            total.innerText="Rs"+ Math.ceil(x + 0.18*x) +" total";
           
            if(noOfroom.value>1){
                p2.innerText="for "+ noOfroom.value +" rooms"; 
                reserveBtn.innerText="Reserve "+noOfroom.value+ " Rooms";
                document.querySelector("#menu>button>a").innerText="Reserve "+noOfroom.value+ " Rooms";
            }else{
                p2.innerText="for "+ noOfroom.value +" room";
            }
        });
        let p2=document.createElement("p");
        p2.innerText="for "+ noOfroom.value +" room" 

        let reserveDiv=document.createElement("div");
        reserveDiv.id="reserveDiv";
        let reserveBtn=document.createElement("button");
        reserveBtn.innerText="Reserve a Room";
        reserveBtn.addEventListener("click", function(){
          window.location.href="payment.html"
        })
        reserveDiv.append(reserveBtn);        

        expenseDiv.append(pricePerNight,total, p2,reserveDiv);
        divv.append(expenseDiv)

        roomSpace.append(imgDiv, roomTitle, unOrderedlist, line, cancelDiv, line1, extraDiv, divv);
        document.querySelector("#chooseRoom").append(roomSpace);          
    })
    
  };

 



  
 



  










