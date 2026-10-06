# Yasmin Korin — Machine-Readable Identity Profile

A static GitHub Pages website demonstrating the difference between human-readable profile information and the same information represented as structured JSON for software and AI systems.

## Files

- `index.html` — main website
- `styles.css` — visual design and responsive layout
- `script.js` — Human View / Machine View toggle, JSON loading, and copy button
- `profile.json` — the machine-readable profile data
- `README.md` — setup and deployment instructions

## Preview locally

Because the site loads `profile.json` using JavaScript, it is best to preview it through a small local server rather than double-clicking `index.html`.

### Easy option with VS Code

1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Python option

If Python is installed, open Terminal / Command Prompt in this folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

### 1. Create a GitHub repository

Go to GitHub and create a new public repository. A good name is:

```text
machine-readable-identity
```

Do not initialize it with extra files if you plan to upload this folder directly.

### 2. Upload the files

Open the repository and choose **Add file → Upload files**.

Upload these five files directly into the main repository level:

```text
index.html
styles.css
script.js
profile.json
README.md
```

Do **not** put them inside another folder unless you know how to configure GitHub Pages for that folder.

### 3. Commit the files

Scroll down and click **Commit changes**.

### 4. Enable GitHub Pages

In the repository:

1. Open **Settings**.
2. Select **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch: `main`.
5. Select folder: `/ (root)`.
6. Click **Save**.

### 5. Find the live site

GitHub will show the site URL in the Pages settings after deployment.

It will normally look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/machine-readable-identity/
```

## Update the website later

Edit any file in GitHub, commit the change, and GitHub Pages will redeploy automatically.

## Where to edit your machine-readable identity data

Edit:

```text
profile.json
```

The Machine View on the website automatically loads that file.

If you later create a more formal SBT or structured identity JSON object, you can either:

1. Replace the contents of `profile.json`, or
2. Adapt the schema while keeping the same filename.

## Important placeholders / future updates

You should update the GitHub Repository button in `index.html` after you know the final repository URL. Search for:

```html
https://github.com/
```

and replace it with your actual repository URL.

You may also want to add:

- evidence URLs for specific claims
- external validation when a school, employer, or organization actually confirms a claim
- a published schema definition
- JSON-LD or another interoperable data format
- version history for profile changes

## Verification terminology

This prototype intentionally distinguishes between:

- **Verified** — confirmed by the subject or submitting source
- **Validated** — independently reviewed by an authorized institution or third party

The current demo should not imply institutional validation where none has occurred.
