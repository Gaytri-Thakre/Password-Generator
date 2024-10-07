# Password Generator

A web-based application that allows users to generate random and secure passwords based on various criteria such as length, uppercase letters, lowercase letters, numbers, and symbols. The application also includes a feature to copy the generated password to the clipboard.

## Features

- Generate random passwords with customizable options:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Password length slider to adjust the desired length.
- Displays a strength indicator that shows the strength of the generated password.
- Option to copy the generated password to the clipboard.

## Live Demo

You can view and use the Password Generator [here](https://gaytri-thakre.github.io/Password-Generator/).

## Usage

1. Open the live demo link in your browser.
2. Select the criteria you want for the password:
   - Toggle checkboxes for uppercase letters, lowercase letters, numbers, and symbols.
   - Use the slider to select the desired length of the password.
3. Click the "Generate" button to generate a password.
4. View the generated password in the output field.
5. To copy the password, click the "Copy" button.

## Code Overview

The project consists of the following key components:

### HTML

The HTML structure includes various input elements like checkboxes and sliders to let the user define password requirements.

### JavaScript

- **Password Generation**: The password is generated using random characters based on the selected criteria. It ensures at least one character of each selected type (uppercase, lowercase, etc.) is present in the password.
- **Strength Calculation**: The strength of the password is evaluated based on the selected criteria and password length.
- **Shuffling**: The Fisher-Yates method is used to shuffle the password to ensure randomness.
- **Copy to Clipboard**: This feature copies the generated password to the user's clipboard.

### Strength Indicator

The strength indicator changes color based on the strength of the generated password:
- Green (`#4caf50`) for strong passwords.
- Yellow (`#ff0`) for medium passwords.
- Red (`#f00`) for weak passwords.

## Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gaytri-thakre/Password-Generator.git
