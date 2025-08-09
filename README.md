# 📺 Tech It Easy – NOVI Frontend Module

This repository contains my solution for the **Tech It Easy Dashboard** exercise from the Frontend Development module at [Novi University](https://www.novi.nl).  
The goal of this assignment is to practice working with **JavaScript array methods**, **helper functions**, and **React rendering** by building an internal financial dashboard for a TV store.

The app uses a static dataset of TV models (for now), displays sales and stock data, formats product information, and sorts/filter products based on user actions.

---

![Tech it easy](./src/assets/tech_it_easy.png)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Preview](#preview)
- [Project Setup](#project-setup)
- [Credits](#credits)
- [License](#license)

---

## Tech Stack

- **React** (v18.2.0)
- **Vite**
- **HTML5**
- **CSS3**
- **JavaScript ES6+**
- **Node.js** & **NPM**

---

## Key Features

### 📊 Sales & Stock Data
- Helper functions to:
    - Calculate total TVs sold.
    - Calculate total TVs purchased.
    - Calculate remaining stock.
- Dynamic color-coded stats:
    - **Green** for sold items.
    - **Blue** for purchased stock.
    - **Red** for stock left to sell.

### 🛒 Product Information
- Functions to format:
    - TV names in format `[brand] [type] – [name]`.
    - Prices (e.g. `€549,-`).
    - Available sizes in both inches and centimeters.
- Display of **best-selling TV** with image and available features.

### 🎛 Sorting & Filtering
- Buttons for:
    - **Best-selling first**
    - **Cheapest first**
    - **Best for sports first** (based on refresh rate)
- Console logging of sorted datasets.
- Bonus: **Largest screen first** sorting.

### Array Method Practice
- Extract TV types, brands, and specs using `.map()`, `.filter()`, and `.find()`.
- Find TVs:
    - That are sold out.
    - With 65"+ screen sizes.
    - With Ambilight support.
- Create formatted arrays of sports-suitable TVs.

---

## Preview

<details>
<summary><strong> Dashboard Overview </strong></summary>

![Tech It Easy Dashboard](src/assets/screenshot-dashboard-overview.png)

</details>

---

## Project Setup

1. Clone or open the repository in an IDE

2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:5173 to view the app.


## Credits

> This assignment, visual designs and base project setup were created and provided by **Novi University** as part of the Frontend module.

---

## License

> "This project is for **educational purposes only**. All images, designs, and dummy content are to be used for learning and non-commercial use."

---

