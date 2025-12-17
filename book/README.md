# Physical AI & Humanoid Robotics Book

This repository contains the source for the "Physical AI & Humanoid Robotics" book, implemented as a Docusaurus-based documentation site.

## Structure

The book is organized into four core modules:

1. **Module 1: The Robotic Nervous System (ROS 2)** - Learn how to connect digital AI agents with physical robots using ROS 2.
2. **Module 2: The Digital Twin (Gazebo & Unity)** - Explore physics simulation and environment building for humanoid robots.
3. **Module 3: The AI-Robot Brain (NVIDIA Isaac)** - Discover advanced perception and AI training systems.
4. **Module 4: Vision-Language-Action (VLA)** - Understand how LLMs enable cognitive planning in robots.

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static hosting service.

### Deployment

The site is configured for GitHub Pages deployment. Use the following command:

```bash
npm run deploy
```

This command builds the site and deploys it to the `gh-pages` branch.