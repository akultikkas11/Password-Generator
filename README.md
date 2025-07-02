# Password Generator React App

An interactive password generator built with **React** and **Vite**. This app allows users to customize the length and composition of their generated password, including the option to include numbers and special characters. It also features a convenient copy-to-clipboard functionality with tooltip feedback.

---

## 🔗 Live Demo
👉 [https://akultikkas11.github.io/Password-Generator/](https://akultikkas11.github.io/Password-Generator/)

---

## Features

- **Password length control:** Adjustable password length via a slider.
- **Include numbers:** Toggle inclusion of numeric characters.
- **Include special characters:** Toggle inclusion of special symbols.
- **Copy to clipboard:** Copy generated password to clipboard with visual tooltip confirmation.
- **Live password generation:** Password updates automatically as options change.

---

## Technologies & Libraries Used

- **React**: Hooks for state and effects.
- **Vite**: Fast development environment and build tool.
- **Material-UI**: For icons (`ContentCopyIcon`) and tooltip UI (`Tooltip`).
- **Tailwind CSS**: Utility-first CSS for styling.

---

## React Hooks Used

- `useState`  
  Manages component states such as:
  - Password length (`length`)
  - Generated password (`password`)
  - Toggles for allowing numbers (`numberAllowed`) and special characters (`characterAllowed`)
  - Tooltip text for copy button (`toolTipText`)

- `useEffect`  
  Triggers password regeneration whenever dependencies (`length`, `numberAllowed`, `characterAllowed`) change, ensuring the password stays updated with user preferences.

- `useRef`  
  References the password input field to programmatically select its content when copying to clipboard.

---

## Usage

1. Adjust the slider to select desired password length (0-36).
2. Toggle checkboxes to include numbers and/or special characters.
3. Copy the generated password using the copy button.
4. Use the password for your security needs!
