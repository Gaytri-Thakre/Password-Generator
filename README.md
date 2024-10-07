# Password Generator

A simple password generator web application that generates random secure passwords based on user preferences, including options for uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Choose the length of the password using a slider.
- Select options to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Password strength indicator (green for strong, yellow for medium, and red for weak).
- Copy password to clipboard.
- Real-time updates based on user input.

## How to Use

1. Adjust the password length using the slider.
2. Select the checkboxes for your preferred password criteria (uppercase, lowercase, numbers, symbols).
3. Click the **Generate Password** button.
4. The generated password will be displayed in the output field.
5. Click the **Copy** button to copy the password to the clipboard.

## Code Overview

- `index.js`: Contains the main functionality for the password generation, password strength calculation, and event listeners.
- Key functions include:
  - `getRandomInteger(min, max)`: Generates a random integer between the given range.
  - `getLowerCase()`, `getUpperCase()`, `getRandomDigit()`, and `getSymbol()`: Functions that generate random lowercase letters, uppercase letters, digits, and symbols respectively.
  - `shufflePassword(array)`: Shuffles the password characters to randomize the order.
  - `calcStrength()`: Determines password strength based on the selected criteria.
  - `copyContent()`: Copies the generated password to the clipboard.

## Future Enhancements

- Option to exclude similar-looking characters (e.g., `1` and `l`).
- Allow users to save their generated passwords.

## Installation and Setup

No additional dependencies are required. Just download the files and open the HTML file in a web browser.

## License

This project is open-source and available under the [MIT License](LICENSE).
