const humanTab = document.getElementById('human-tab');
const machineTab = document.getElementById('machine-tab');
const humanView = document.getElementById('human-view');
const machineView = document.getElementById('machine-view');
const jsonOutput = document.getElementById('json-output');
const copyButton = document.getElementById('copy-json');
const jumpMachine = document.getElementById('jump-machine');

let profileData = null;

function setView(view) {
  const machine = view === 'machine';

  humanView.classList.toggle('hidden', machine);
  machineView.classList.toggle('hidden', !machine);

  humanTab.classList.toggle('active', !machine);
  machineTab.classList.toggle('active', machine);

  humanTab.setAttribute('aria-selected', String(!machine));
  machineTab.setAttribute('aria-selected', String(machine));
}

humanTab.addEventListener('click', () => setView('human'));
machineTab.addEventListener('click', () => setView('machine'));

jumpMachine.addEventListener('click', () => {
  setView('machine');
  document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
});

async function loadProfile() {
  try {
    const response = await fetch('profile.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    profileData = await response.json();
    jsonOutput.textContent = JSON.stringify(profileData, null, 2);
  } catch (error) {
    jsonOutput.textContent = 'Could not load profile.json. If you opened index.html directly, run the site through a local server instead. GitHub Pages will load it normally.';
    console.error(error);
  }
}

copyButton.addEventListener('click', async () => {
  if (!profileData) return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(profileData, null, 2));
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy JSON'; }, 1400);
  } catch {
    copyButton.textContent = 'Copy failed';
  }
});

loadProfile();
