const testimonials = [
    {
        name: "Cherish G",
        photoUrl:"https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" ,
        text: "If you are a business owner, and you don't have Apple in your toolkit just yet, I highly recommend that you check it out."
    },
    {
        name: "Blessy S",
        photoUrl:"https://images.unsplash.com/photo-1599570426270-911078b4fa6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" ,
        text: "Blessy has helped my team and I stay on the same page. Previously, we were all over the board. Using blessed has definitely saved us time and money."
    },
    {
        name: "Sajin B",
        photoUrl:"https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" ,
        text: "I love hahaha sajin! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl= document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const{name, photoUrl, text}= testimonials[idx];
    imgEl.src= photoUrl
    textEl.innerText = text
    usernameEl.innerText= name;
    idx++
    if(idx=== testimonials.length ) {
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 2000)
}