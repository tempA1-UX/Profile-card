// TIME
function updateTime() {
  document.getElementById("time").textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// AVATAR UPLOAD
const avatar = document.getElementById("avatar");
const upload = document.getElementById("upload");

document.querySelector(".upload-btn").onclick = () => upload.click();

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatar.src = reader.result;
    };
    profileImage.src = uploadedImageUrl;
  }
});
