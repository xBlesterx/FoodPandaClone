# FoodPanda Replica

This is a project created to replicate foodpanda, a food delivery servies application based in Malaysia. Built using React Native.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [NativeWind](https://www.nativewind.dev/)
- [Sanity](https://www.sanity.io)
- [ReactNavigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [React Native Maps](https://www.npmjs.com/package/react-native-maps)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Say what the step will be

    git clone https://github.com/xBlesterx/FoodPandaReplica.git

## Table of Contents

- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

### Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Javascript</a></li>
    <li><a href="https://docs.expo.dev/workflow/expo-cli">Expo</a></li>
    <li><a href="https://reactnative.dev">React Native</a></li>
     <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.sanity.io">Sanity</a></li>
    <li><a herf="https://redux.js.org/">Redux</a></li>
  </ul>
</details>

<br />

<a href="https://www.instagram.com/bl8klester/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="Instagram" width="30" height="30" /></a>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/183095729-0ae04014-a62c-4013-93ff-6861fbff308e.png" alt="" width="30" height="30" /></a>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
<a href="#google"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/google.svg" alt="Google" width="30" height="30" /></a>
<a href="#google"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="Google" width="30" height="30" /></a>
<a href="#github"><img src="https://user-images.githubusercontent.com/99184393/182531543-22e5cec1-bf41-444c-80b0-c2b7205b99ca.png" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://user-images.githubusercontent.com/99184393/182531694-325c7651-c586-4b79-9304-9b7d39fd2a95.png" alt="GitHub" width="30" height="30" /></a>
<a href="https://github.com/xBlesterx"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/github.svg" alt="GitHub" width="30" height="30" /></a>

## Getting Started

### Prerequisites

- Sign up for a Sanity account <a href='https://www.sanity.io'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

### Installation

![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

Install my-project with expo

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

Installing Expo CLI

```
npm install --global expo-cli
```

Initializing the project

```
npx create-expo-app FoodPandaReplica
```

```
cd FoodPandaReplica
```

Install dependencies

### Setup Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```

Tailwindcss requires a `tailwind.config.js` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.

```
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

Add `TailwindProvider` at the top level of your application. The `TailwindProvider` creates the context for reactive styles and the atomic style objects.

```
import { TailwindProvider } from "tailwindcss-react-native";
function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
```

##### Configure your babel.config.js

```
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
```

Install dependencies

<a href="https://github.com/SashenJayathilaka/FoodPandaReplica/blob/master/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->

### Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/SashenJayathilaka/FoodPandaReplica.git
```

change directory

```bash
  cd FoodPandaReplica
```

Install dependencies

```bash
  npx expo install
```

Start the server

```bash
  npx expo start
```

<hr />

### Creating a Build

- Optimize the assets for speed - `npx expo-optimize` (formerly expo optimize)
- Bundle the project for production - `npx expo export:web` (`expo build:web` in the legacy Expo CLI).
- Creates a production ready static bundle in the `web-build/` directory. Don't edit this folder directly.
- If you make any changes to your project, you'll need to re-build for production.
- For more help use `npx expo export:web --help`
- <a href="https://docs.expo.dev/eas" target="_blank">More Info</a>

<!-- Deployment -->

### Deployment

To deploy this project run

#### Expo Publish

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

publish your project

```
expo publish
```

## Help

- [Youtube video](https://www.youtube.com/watch?v=AkEnidfZnCU) - This video will help you with creating your own app from scratch
