// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
      ],
    },
    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        'module-1-ros2/index',
        'module-1-ros2/ros2',
        'module-1-ros2/architecture',
        'module-1-ros2/nodes-topics-services',
        'module-1-ros2/urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2-digital-twin/index',
        'module-2-digital-twin/gazebo-simulation',
        'module-2-digital-twin/unity-hri',
        'module-2-digital-twin/sensor-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module-3-ai-brain/index',
        'module-3-ai-brain/isaac-sim',
        'module-3-ai-brain/vslam-navigation',
        'module-3-ai-brain/nav2-humanoid',
      ],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA)',
      items: [
        'module-4-vla/index',
        'module-4-vla/voice-action',
        'module-4-vla/cognitive-planning',
        'module-4-vla/capstone-project',
      ],
    },
  ],
};

export default sidebars;