import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-book/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug', '2c1'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/config', '3f3'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/content', 'bcb'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/globalData', '35d'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/metadata', 'e0b'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/registry', 'cdb'),
    exact: true
  },
  {
    path: '/physical-ai-book/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-book/__docusaurus/debug/routes', 'f28'),
    exact: true
  },
  {
    path: '/physical-ai-book/docs',
    component: ComponentCreator('/physical-ai-book/docs', '312'),
    routes: [
      {
        path: '/physical-ai-book/docs',
        component: ComponentCreator('/physical-ai-book/docs', 'b07'),
        routes: [
          {
            path: '/physical-ai-book/docs',
            component: ComponentCreator('/physical-ai-book/docs', '194'),
            routes: [
              {
                path: '/physical-ai-book/docs/intro',
                component: ComponentCreator('/physical-ai-book/docs/intro', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-1-ros2/',
                component: ComponentCreator('/physical-ai-book/docs/module-1-ros2/', 'c21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-1-ros2/architecture',
                component: ComponentCreator('/physical-ai-book/docs/module-1-ros2/architecture', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-1-ros2/nodes-topics-services',
                component: ComponentCreator('/physical-ai-book/docs/module-1-ros2/nodes-topics-services', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-1-ros2/urdf',
                component: ComponentCreator('/physical-ai-book/docs/module-1-ros2/urdf', '5b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-2-digital-twin/',
                component: ComponentCreator('/physical-ai-book/docs/module-2-digital-twin/', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-2-digital-twin/gazebo-simulation',
                component: ComponentCreator('/physical-ai-book/docs/module-2-digital-twin/gazebo-simulation', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-2-digital-twin/sensor-simulation',
                component: ComponentCreator('/physical-ai-book/docs/module-2-digital-twin/sensor-simulation', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-2-digital-twin/unity-hri',
                component: ComponentCreator('/physical-ai-book/docs/module-2-digital-twin/unity-hri', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-3-ai-brain/',
                component: ComponentCreator('/physical-ai-book/docs/module-3-ai-brain/', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-3-ai-brain/isaac-sim',
                component: ComponentCreator('/physical-ai-book/docs/module-3-ai-brain/isaac-sim', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-3-ai-brain/nav2-humanoid',
                component: ComponentCreator('/physical-ai-book/docs/module-3-ai-brain/nav2-humanoid', 'd26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-3-ai-brain/vslam-navigation',
                component: ComponentCreator('/physical-ai-book/docs/module-3-ai-brain/vslam-navigation', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-4-vla/',
                component: ComponentCreator('/physical-ai-book/docs/module-4-vla/', 'f3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-4-vla/capstone-project',
                component: ComponentCreator('/physical-ai-book/docs/module-4-vla/capstone-project', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-4-vla/cognitive-planning',
                component: ComponentCreator('/physical-ai-book/docs/module-4-vla/cognitive-planning', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-book/docs/module-4-vla/voice-action',
                component: ComponentCreator('/physical-ai-book/docs/module-4-vla/voice-action', '8f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
