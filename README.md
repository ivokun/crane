# Crane - A Robotic Arm Simulation

Welcome to Crane, a serverless robotic arm simulation. This application offers
an interactive web-based environment to visualize and manipulate a 3D model of a
robotic arm.

## Tech Stack

Crane is built using three core technologies:

[SST (Serverless Stack Toolkit)](https://sst.dev): SST is our serverless
framework. It facilitates local development and testing of our serverless
applications, and enables seamless deployment on AWS. This results in a scalable
backend that can efficiently manage multiple user requests.

[Astro](https://astro.build): Astro is the chosen frontend framework for Crane.
Its unique architecture enables us to create fast, optimized websites with a
smaller footprint. Astro supports the use of your favorite JavaScript framework
(or none at all), and delivers fully static HTML for quick loading and an
SEO-friendly user experience.

[ThreeJS](https://threejs.org): I use ThreeJS as our WebGL rendering library to
create interactive 3D content on the web. It simplifies the creation of complex
3D graphics in the browser, making our application more engaging and visually
appealing.

## Project Description

Crane is a web-based robotic arm simulation that allows users to observe and
manipulate a 3D model of a robotic arm directly in their browsers. Users can
control the arm's movements, simulate various tasks, and even tweak the model's
parameters to observe different behaviors.

The SST framework manages all the server-side operations, including handling
user commands, managing the 3D model data, and communicating with the frontend.
Astro, on the other hand, is used to build a fast, optimized frontend interface
that communicates seamlessly with our SST backend.

ThreeJS plays a critical role in rendering the 3D robotic arm. It translates the
model data into beautiful, interactive 3D graphics, providing users with a
realistic and immersive simulation experience.
