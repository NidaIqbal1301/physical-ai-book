import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3d2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '01b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f94'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/',
                component: ComponentCreator('/docs/module-1-ros2/', 'fb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/',
                component: ComponentCreator('/docs/module-1-ros2/', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/architecture',
                component: ComponentCreator('/docs/module-1-ros2/architecture', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/nodes-topics-services',
                component: ComponentCreator('/docs/module-1-ros2/nodes-topics-services', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/ros2',
                component: ComponentCreator('/docs/module-1-ros2/ros2', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/urdf',
                component: ComponentCreator('/docs/module-1-ros2/urdf', '5c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/',
                component: ComponentCreator('/docs/module-2-digital-twin/', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/gazebo-simulation',
                component: ComponentCreator('/docs/module-2-digital-twin/gazebo-simulation', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/sensor-simulation',
                component: ComponentCreator('/docs/module-2-digital-twin/sensor-simulation', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/unity-hri',
                component: ComponentCreator('/docs/module-2-digital-twin/unity-hri', 'c68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/',
                component: ComponentCreator('/docs/module-3-ai-brain/', 'fa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/isaac-sim',
                component: ComponentCreator('/docs/module-3-ai-brain/isaac-sim', '881'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/nav2-humanoid',
                component: ComponentCreator('/docs/module-3-ai-brain/nav2-humanoid', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/vslam-navigation',
                component: ComponentCreator('/docs/module-3-ai-brain/vslam-navigation', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/',
                component: ComponentCreator('/docs/module-4-vla/', '375'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/capstone-project',
                component: ComponentCreator('/docs/module-4-vla/capstone-project', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/cognitive-planning',
                component: ComponentCreator('/docs/module-4-vla/cognitive-planning', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/voice-action',
                component: ComponentCreator('/docs/module-4-vla/voice-action', '3c9'),
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
