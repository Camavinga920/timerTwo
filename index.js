
setInterval(() => {
    let hours = document.querySelector("#hours");
    let min = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
  
    let time = new Date();
  
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
  
    // Update the time
    hours.innerHTML = hour > 12 ? hour - 12 : hour;
    min.innerHTML = minute.toString().padStart(2, '0');
    seconds.innerHTML = second.toString().padStart(2, '0');
  
    // Set the meridian
    let meridian = document.querySelector("#meridian");
    meridian.innerHTML = hour >= 12 ? "PM" : "AM";
  
  }, 1000);
