// Firebase configuration (exactly as provided)
const firebaseConfig = {
  apiKey: "AIzaSyA7n2ue0wvZxarsQsZqgOlbhPrC5_KpAgE",
  authDomain: "landing-page-99a45.firebaseapp.com",
  databaseURL: "https://landing-page-99a45-default-rtdb.firebaseio.com",
  projectId: "landing-page-99a45",
  storageBucket: "landing-page-99a45.firebasestorage.app",
  messagingSenderId: "893541422521",
  appId: "1:893541422521:web:723558c3713f1b53355268",
  measurementId: "G-7PWGQ7V6QF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Loading overlay helpers
const overlay = document.getElementById("loading-overlay");
function showLoading() {
  if (overlay) overlay.classList.remove("hidden");
}
function hideLoading() {
  if (overlay) overlay.classList.add("hidden");
}

/**
 * Fetches the current group link from Firebase Realtime Database
 * Path used: /groupLink  (string value)
 * You can change the link anytime in Firebase Console → Realtime Database → groupLink
 */
function joinCommunity() {
  showLoading();

  database.ref("groupLink").once("value")
    .then((snapshot) => {
      const link = snapshot.val();
      hideLoading();

      if (link && typeof link === "string" && link.startsWith("http")) {
        // Open the group link
        window.location.href = link;
      } else {
        alert("Community link is not set yet. Please try again later or contact support.");
        console.warn("groupLink is missing or invalid in Firebase. Current value:", link);
      }
    })
    .catch((error) => {
      hideLoading();
      console.error("Firebase error:", error);
      alert("Unable to connect to the community right now. Please try again in a moment.");
    });
}

// Attach to all CTA buttons
["main-cta", "header-cta", "banner-cta"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      joinCommunity();
    });
  }
});
