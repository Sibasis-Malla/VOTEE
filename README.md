<br />
<p align="center">
  <a href="https://github.com/Sibasis-Malla/pilot">
    <img src="image/logo.webp" alt="Logo" width="130">
  </a>

  <h3 align="center">Votee</h3>

  <p align="center">
    The official repository for the website of VOTEE
    <br />
    <a href="votee-six.vercel.app">View Live</a>
    ·
    <a href="https://www.youtube.com/watch?v=0ZJEvmKRGrA">Project Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
  </ol>
</details>

## About The Project

Votee is a voting platform using blockchain that allows various groups to make rooms and add voters in them, to vote for various proposals craeted inside the room. 

## Built With

Following technologies and libraries are used for the development of this website

- [React](https://reactjs.org/)
- [Truffle](https://trufflesuite.com/)
- [Material UI](https://mui.com/)
- [Vercel](https://vercel.com/)

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

  ```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```


### Running the project.

The project uses NPM. It is strictly advised to stick with NPM so as to avoid dependency conflicts down the line.

```
## Checkout into the project client directory
cd client

## Install Dependencies
npm install

## Run the Project
npm start

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
npm install <package-name>

## Remove an existing Package
npm uninstall <package-name>

## Save Package as a Dev Dependency
npm install <package-name> --save-dev
```

## Features

* Transparency of voting process among all the voters.
* Verified Voters are added by room admin.
* Verified Proposals are added by verified VOTEES.

## Screenshots

<img src="image/Screenshot1.png" alt="Logo" width="100%">
<img src="image/Screenshot2.png" alt="Logo" width="100%">
<img src="image/Screenshot3.png" alt="Logo" width="100%">