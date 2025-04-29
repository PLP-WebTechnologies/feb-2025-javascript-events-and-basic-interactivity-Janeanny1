const button = document.getElementById("button");
button.addEventListener("click", () =>{
    alert("Successful clicked");
});

const hoverBox = document.getElementById("hoverbox");
hoverBox.addEventListener("mouseover", () =>{
    hoverBox.style.backgroundColor = "green";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "#87CEFA"; 
  });

  const keyPressInput = document.getElementById("keyPressInput");
  keyPressInput.addEventListener("keydown", (event) => {
    console.log("Key pressed: ${event.key}");
  });

  const secretBox = document.getElementById("secretBox");
  secretBox.addEventListener("dblclick", () =>{
    secretBox.style.backgroundColor ="blue";
    secretBox.innerText = "Woow, Amazing!";
  });

  const changeButton = document.getElementById("changeButton");
  changeButton.addEventListener("click", () =>{
    changeButton.innerText = "You clicked me";
    changeButton.style.backgroundColor ="gold";
    changeButton.style.color ="red";
  });

  const images = [
    "https://images.pexels.com/photos/19817585/pexels-photo-19817585/free-photo-of-high-angle-view-of-a-street-in-a-mountain-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/31663138/pexels-photo-31663138/free-photo-of-serene-tropical-coastline-view-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/31544399/pexels-photo-31544399/free-photo-of-scenic-view-of-fira-s-iconic-santorini-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30921085/pexels-photo-30921085/free-photo-of-majestic-waterfall-in-iceland-s-scenic-landscape.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  let currentImageIndex = 0;
  const galleryImage = document.getElementById("imageGallery");
  const nextImageButton = document.getElementById("nextImage");
  
  nextImageButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
      document.getElementById(tab.dataset.tab).style.display = "block";
    });
  });

const form = document.getElementById("validationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

  if (!nameInput.value.trim()) {
    alert("Name is required");
    return;
  }

  if (!emailInput.value.includes("@")) {
    alert("Invalid email format");
    return;
  }

  const password = passwordInput.value;

  if (password.length < 8 && !symbolRegex.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one special symbol (!, @, #, etc.)");
    return;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  } else if (!symbolRegex.test(password)) {
    alert("Password must contain at least one special symbol (!, @, #, etc.)");
    return;
  }

  alert("Form submitted successfully");
  form.reset();
});




