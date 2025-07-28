 function showSearchBar() {
      document.getElementById('searchBar').style.display = 'flex';
    }

    function hideSearchBar() {
      document.getElementById('searchBar').style.display = 'none';
    }
     function showSlide(index) {
      const wrapper = document.getElementById('sliderWrapper');
      wrapper.style.transform = `translateX(-${index * 100}%)`;

      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
    // 2nd slider -----
    function showSlide2(index) {
      const wrapper2 = document.getElementById('sliderWrapper2');
      wrapper2.style.transform = `translateX(-${index * 100}%)`;

      const dots2 = document.querySelectorAll('.dot2');
      dots2.forEach(dot2 => dot2.classList.remove('active2'));
      dots2[index].classList.add('active2');
    }
    // popup start
    function openPopup() {
      document.getElementById("popupForm").style.display = "flex";
    }

    // Close popup
    function closePopup() {
      document.getElementById("popupForm").style.display = "none";
    }

    // Validation function
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");

      errorMsg.innerHTML = "";

      if (name === "") {
        errorMsg.innerHTML = "Name is required.";
        return false;
      }

      if (email === "" || !email.includes("@gmail") || !email.includes(".com")) {
        errorMsg.innerHTML = "Enter a valid email.";
        return false;
      }

      if (password.length < 6) {
        errorMsg.innerHTML = "Password must be at least 6 characters.";
        return false;
      }

      alert("Registration successful!");
      closePopup(); // Close the popup after success
      return false; // Prevent actual form submission for demo
    }