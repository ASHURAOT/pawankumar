# Pawan Kumar DevOps Portfolio

## Overview
Build a polished, single-page React portfolio for recruiters and engineering leaders, using the verified resume and CKA certificate as the source of truth. The visual direction will be a restrained cloud-operations console: crisp typography, deep charcoal and near-white themes, cyan/blue accents, subtle grid texture, and an architectural pipeline motif rather than generic developer imagery.

## What will be built
- Sticky responsive navigation with active-section tracking, smooth scrolling, mobile menu, theme toggle, and LinkedIn/GitHub actions.
- Professional hero with the supplied positioning, CKA credential, three calls to action, and a compact Cloud → CI/CD → Containers → Kubernetes → Monitoring visual.
- About and verified experience timeline for Utho Cloud and Vehant Technologies.
- Categorized skills using scannable technology badges without percentage claims.
- Two detailed, expandable project case studies with architecture flows, technology labels, problem, implementation, and outcomes. GitHub controls will remain clearly unavailable until real URLs are supplied, avoiding broken links.
- Prominent CKA certification presentation using the uploaded certificate, plus verified education history.
- Recruiter-focused contact section and accessible frontend-only contact form with clear submit feedback.
- Footer, scroll-to-top control, visible keyboard focus, reduced-motion support, and responsive behavior across desktop, tablet, and mobile.

## Content and assets
- Use the uploaded resume as the downloadable resume asset.
- Use the uploaded CKA certificate in the certification section and expose its verified Linux Foundation certificate ID/date without inventing a credential URL.
- Use the verified email and LinkedIn URL from the resume.
- Leave GitHub unavailable until a real profile/project URL is provided; no fabricated links, locations, statistics, or achievements.
- Keep portfolio content in typed data modules so experience, skills, projects, certifications, and education can be updated independently of presentation components.

## Technical details
- Keep the existing React 19, Vite, TanStack Start, Tailwind CSS v4, and TypeScript foundation; organize reusable portfolio sections under `src/components/portfolio` and content under `src/data`.
- Define the light/dark design system and all semantic visual tokens centrally in `src/styles.css`.
- Persist theme preference in local storage after hydration and use the operating-system preference initially.
- Implement scroll reveals with Intersection Observer and lightweight CSS transitions; no animation dependency.
- Add route-specific title, description, Open Graph, Twitter card, canonical metadata, semantic landmarks, accessible labels, and descriptive text.
- Add/update favicon, robots.txt, sitemap placeholder, README setup/build/deployment guidance, and package metadata.
- Store uploaded PDFs through the project asset flow rather than committing raw binaries.

## Validation
- Confirm production build health and browser behavior.
- Test desktop and mobile layouts, theme switching and persistence, menu/navigation, expandable projects, resume/certificate actions, contact form feedback, keyboard focus, reduced motion, and horizontal overflow.
