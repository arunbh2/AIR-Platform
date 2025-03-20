# AIR Platform

AIR (Augmented Intelligence for Resilience) Platform is a specialized digital ecosystem designed to build climate resilience in communities across Asia. It integrates technology, collaborative knowledge sharing, and crowdfunding-inspired funding mechanisms to provide comprehensive support for climate adaptation and resilience-building initiatives.

## Project Overview

This repository contains the prototype website for the AIR Platform with the following main sections:

- **Homepage**: Introduction to the platform and navigation to all sections
- **Impact Marketplace**: Explore and fund climate resilience projects
- **Knowledge Hub**: Access resources, case studies, and research
- **Community Forum**: Connect with experts and share knowledge
- **Tools & Training**: Learn and grow your climate expertise
- **Donor Dashboard**: Track your impact and find new projects

## Project Structure

```
air-platform/
│
├── index.html                  # Homepage
├── marketplace.html            # Impact Marketplace
├── knowledge-hub.html          # Knowledge Hub
├── community-forum.html        # Community Forum
├── tools-training.html         # Tools & Training
├── donor-dashboard.html        # Donor Dashboard
│
├── css/                        # Stylesheets
│   ├── styles.css              # Main styles
│   ├── forum.css               # Community forum styles
│   └── dashboard.css           # Donor dashboard styles
│
├── js/                         # JavaScript files
│   ├── main.js                 # Main functionality
│   ├── forum.js                # Forum functionality
│   └── dashboard.js            # Dashboard functionality
│
├── images/                     # Image assets
│   ├── logo.png                # AIR Platform logo
│   ├── hero-banner.jpg         # Hero banner image
│   ├── icons/                  # UI icons
│   ├── marketplace/            # Project images
│   └── partners/               # Partner logos
│
└── README.md                   # Project documentation (this file)
```

## Deployment Instructions for GitHub Pages

Follow these step-by-step instructions to deploy the AIR Platform website to GitHub Pages.

### 1. Create a GitHub Account (if you don't have one)

1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and follow the instructions to create an account

### 2. Create a New Repository

1. After logging in to GitHub, click the "+" sign in the top-right corner and select "New repository"
2. Name your repository `air-platform` (or any name you prefer)
3. Make sure the repository is set to "Public"
4. Do not initialize the repository with a README, .gitignore, or license
5. Click "Create repository"

### 3. Set Up Git on Your Computer (if not already installed)

**For Windows:**
1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer with default settings

**For Mac:**
1. Open Terminal
2. Type `git --version`. If not installed, it will prompt you to install it

**For Linux:**
1. Open Terminal
2. Type `sudo apt-get install git` (for Ubuntu/Debian) or `sudo yum install git` (for Fedora)

### 4. Configure Git

1. Open Terminal (Mac/Linux) or Git Bash (Windows)
2. Set your name: `git config --global user.name "Your Name"`
3. Set your email: `git config --global user.email "your_email@example.com"`

### 5. Clone the Repository

1. On GitHub, click the "Code" button on your repository page and copy the URL
2. Open Terminal/Git Bash
3. Navigate to where you want to store your project: `cd /path/to/your/folder`
4. Clone the repository: `git clone https://github.com/yourusername/air-platform.git`
5. Navigate into the project folder: `cd air-platform`

### 6. Add Project Files

1. Download this project as a ZIP file or copy all the files into your project folder
2. Make sure the file structure matches the project structure described above

### 7. Commit and Push Your Files

1. In Terminal/Git Bash, run these commands:
   ```
   git add .
   git commit -m "Initial commit of AIR Platform website"
   git push origin main
   ```

### 8. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch and "/(root)" folder
5. Click "Save"
6. Wait a few minutes for your site to be published
7. GitHub will show you the URL where your site is published (typically `https://yourusername.github.io/air-platform/`)

### 9. Access Your Website

1. Visit the URL provided by GitHub Pages
2. Your AIR Platform website is now live!

## Making Updates to Your Website

To make changes to your website:

1. Edit the files on your computer
2. Commit and push the changes:
   ```
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. Wait a few minutes for GitHub Pages to update your site

## Notes

- GitHub Pages may take a few minutes to update after you push changes
- If you're using placeholder images, replace them with actual images before final deployment
- Make sure all links between pages are working correctly
- Test your website on different devices to ensure responsive design works properly

## Resources for Further Learning

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS/JavaScript tutorials on MDN](https://developer.mozilla.org/en-US/docs/Web)
- [Git and GitHub guide](https://guides.github.com/activities/hello-world/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
