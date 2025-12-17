# Research: Docusaurus Structure for Physical AI Book

**Feature**: 002-docusaurus-structure
**Date**: 2025-01-07
**Status**: Completed

## Overview

Research conducted to inform the setup and configuration of a Docusaurus-based documentation site for the Physical AI & Humanoid Robotics book. This research focuses on Docusaurus best practices, installation procedures, configuration options, and GitHub Pages deployment strategies.

## Research Questions & Findings

### 1. Docusaurus Version Selection

**Research Task**: Determine which version of Docusaurus to use for the project.

**Decision**: Use Docusaurus v3.x (latest stable version)

**Rationale**: 
- Docusaurus v3 is the current stable version with the latest features and security updates
- Better performance and SEO capabilities compared to v2
- Active community and documentation support
- Aligns with modern React/Node.js standards

**Alternatives Considered**:
- Docusaurus v2: Rejected as it's older with fewer performance improvements
- Beta versions: Rejected as they may introduce stability issues

### 2. Node.js Version Requirements

**Research Task**: Identify the optimal Node.js version for Docusaurus installation.

**Decision**: Use Node.js v18+ (LTS version)

**Rationale**:
- Docusaurus requires Node.js 18.0 or higher
- LTS versions provide stability and security updates
- Better compatibility with GitHub Actions and deployment platforms
- Long-term support ensures continued compatibility

**Alternatives Considered**:
- Node.js v16: Rejected as it's below the minimum requirement
- Node.js v20: Viable but v18 is more commonly used and tested

### 3. Site Architecture: Docs-First vs Other Presets

**Research Task**: Determine the appropriate Docusaurus preset for a book-style documentation site.

**Decision**: Use classic preset with docs-only configuration

**Rationale**:
- Classic preset provides the most flexibility for customization
- Docs-only configuration aligns with book structure requirements
- No need for blog or pages functionality initially
- Easier to maintain and extend for book content

**Alternatives Considered**:
- Blog-focused preset: Rejected as it's not appropriate for a book structure
- Custom preset: Rejected as classic preset meets all requirements
- Pages-only: Rejected as it doesn't support document hierarchy well

### 4. Markdown vs MDX Decision

**Research Task**: Determine whether to use Markdown or MDX for book content.

**Decision**: Use Markdown (.md) with limited MDX as needed

**Rationale**:
- Markdown is simpler for academic content and writing
- Better support for citations and academic formatting
- Easier for contributors to work with
- Sufficient for most book content needs
- MDX available for complex interactive elements if needed

**Alternatives Considered**:
- MDX only: Rejected as it adds complexity unnecessary for most content
- Mixed approach: Accepted as we'll use Markdown primarily with MDX for special components

### 5. Versioning Strategy

**Research Task**: Determine whether to enable versioning initially.

**Decision**: Disable versioning initially but make site structure ready for future versioning

**Rationale**:
- Book is initially a single version
- Future versioning capability needed for updates
- Simpler to start without versioning and add later
- Structure can be prepared for versioning without enabling it

**Alternatives Considered**:
- Enable versioning from start: Rejected as it adds complexity for initial setup
- No future-proofing: Rejected as it would require restructuring later

### 6. GitHub Pages Deployment Configuration

**Research Task**: Identify the necessary configuration for GitHub Pages deployment.

**Decision**: Configure with proper baseUrl and deployment workflow

**Rationale**:
- GitHub Pages requires specific build configuration
- baseUrl setting is crucial for proper asset loading
- Need to account for potential subdirectory deployment
- Deployment should be automated via GitHub Actions

**Alternatives Considered**:
- Alternative hosting: Rejected as GitHub Pages meets requirements and budget constraints
- Manual deployment: Rejected as it's not scalable or maintainable

## Technical Implementation Findings

### Folder Structure Recommendation

Based on Docusaurus documentation and best practices:
```
book/
├── docs/
│   ├── intro.md
│   ├── module-1-ros2/
│   ├── module-2-digital-twin/
│   ├── module-3-ai-brain/
│   ├── module-4-vla/
│   └── _category_.json
├── src/
├── static/
├── docusaurus.config.js
├── package.json
├── sidebars.js
└── README.md
```

### Sidebar Configuration Options

Research shows two primary approaches:
1. Single sidebar for entire book (simpler, good for linear reading)
2. Separate sidebars per module (more organized, better for reference)

**Decision**: Start with single sidebar, potentially split into collapsible sections per module.

### Front Matter Conventions

Based on Docusaurus documentation, each document should include:
- title: For display in navigation and page
- sidebar_label: For sidebar navigation (if different from title)
- sidebar_position: To control ordering in sidebar
- description: For SEO

## Common Windows-Specific Considerations

### PowerShell Command Differences
- Use `npm.cmd` instead of `npm` when required
- Proper path handling with backslashes vs forward slashes
- Execution policy considerations for scripts

### Node.js Package Management
- npm vs yarn considerations on Windows
- Cache and permission issues
- Path length limitations

## Next Steps

1. Install Node.js v18+ if not already available
2. Initialize Docusaurus project with classic preset
3. Configure docusaurus.config.js for book requirements
4. Set up initial folder structure following the planned architecture
5. Configure sidebar navigation to reflect module structure
6. Test local development server functionality
7. Verify build process works correctly
8. Prepare for GitHub Pages deployment configuration