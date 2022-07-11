const activityHtml = document.getElementById("activity")

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
      activityHtml.classList.add('activity-answer')
      activityHtml.textContent = data.activity
    })
})