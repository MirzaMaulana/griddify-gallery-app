<div align="center" style="display: flex; justify-content: space-between; align-items: center;">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="200" alt="Laravel Logo">
  </a>
  <a href="https://reactjs.org/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="100" alt="React Logo">
  </a>
</div>

# Griddify Gallery App

Griddify Gallery App is a web application built with Laravel, Inertia.js, and React.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MirzaMaulana/griddify-gallery-app.git
2. Navigate to the project directory:
    ```terminal
    cd griddify-gallery-app
3. Install PHP dependencies
    ```php
    composer install
4. Install NPM dependencies
   ```npm
   npm install
5. Create a copy of the .env file:
   ```terminal
   cp .env.example .env
6. Generate an application key
   ```php
   php artisan key:generate
7. Migrate the database
   ```php
   php artisan migrate
8. Start the development server
   ```php
   php artisan serve
9. Visit http://localhost:8000 in your browser to view the application.
