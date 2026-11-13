// --- Theme Toggle ---
function setTheme(theme) {
  document.body.dataset.theme = theme;
}

// --- Modal Toggles ---
function toggleMenu() {
  document.getElementById('menu-modal').classList.toggle('active');
}

function toggleSettings() {
  document.getElementById('settings-modal').classList.toggle('active');
}

function toggleAddExpense() {
  document.getElementById('add-modal').classList.toggle('active');
}

// --- Custom Calculator Logic ---
let calcString = "";
const display = document.getElementById('calc-display');

function calc(val) {
  if (val === 'C') {
    calcString = "";
    display.innerText = "0";
  } else if (val === '=') {
    try {
      // Safe evaluation for basic math
      // eslint-disable-next-line no-eval
      calcString = String(eval(calcString));
      display.innerText = calcString;
    } catch (e) {
      display.innerText = "Error";
      calcString = "";
    }
  } else {
    calcString += val;
    display.innerText = calcString;
  }
}
