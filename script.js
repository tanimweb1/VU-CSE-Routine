// Save checkbox state in localStorage
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox, index) => {
    // Load saved state
    const saved = localStorage.getItem("checkbox" + index);
    if (saved === "true") {
      checkbox.checked = true;
    }

    // Save state on change
    checkbox.addEventListener("change", () => {
      localStorage.setItem("checkbox" + index, checkbox.checked);
    });
  });
});
