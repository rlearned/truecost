# TrueCost - Anti-Dark Pattern Fintech Intervention

A Value Sensitive Design project demonstrating ethical intervention in BNPL (Buy Now, Pay Later) checkout flows.

## Project Overview

TrueCost is a web application that reimagines the BNPL checkout experience by prioritizing **informed consent** over conversion. When users click "Pay in 4," they see an intervention modal that visualizes the opportunity cost of their purchase decision.

### Key Features

- **Investment Visualization**: Shows what the purchase amount could become if invested over 5 years
- **Cool-Down Timer**: A gentle 60-second nudge introducing healthy friction (skippable)
- **Non-Paternalistic Design**: Respects user autonomy while providing information
- **Educational**: Teaches compound interest and opportunity cost through interaction

## The "Reformed Marketer" Approach

> "In Marketing, I learned how to reduce friction to increase sales. For this project, I used my coding skills to reintroduce friction to increase user wellbeing."

This project demonstrates using technical skills to protect users rather than exploit them.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: Chart.js + react-chartjs-2
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

\`\`\`bash
npm run build
\`\`\`

## User Flow

1. **Landing Page**: Learn about the problem and solution
2. **Shop**: Browse mock products and add to cart
3. **Checkout**: See payment options (Pay in Full vs Pay in 4)
4. **Intervention**: Click "Pay in 4" to trigger the VSD modal
5. **Decision**: Make an informed choice with full transparency

## Design Principles

### Value Sensitive Design (VSD)
- **Informed Consent**: Show consequences before the decision
- **Transparency**: Make the algorithm and assumptions visible
- **User Autonomy**: All options remain available
- **Non-Judgmental**: Information, not prescriptions

### Dark Pattern Contrast
The BNPL button deliberately uses typical dark patterns (gradient, "POPULAR" badge, reduced friction) to demonstrate what we're intervening against. The modal then provides the missing information.

## Key Components

- **InterventionModal**: The heart of the project - shows investment growth visualization
- **InvestmentChart**: Chart.js line graph with compound interest calculation
- **CooldownTimer**: Circular timer with skip option
- **CheckoutPage**: Payment method selection with dark pattern vs ethical design

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy with default settings
4. Vercel will auto-detect Next.js configuration

## Project Structure

\`\`\`
truecost-app/
├── app/
│   ├── page.tsx           # Landing/hero page
│   ├── shop/page.tsx      # Product browsing
│   ├── checkout/page.tsx  # Payment selection
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── InterventionModal.tsx  # VSD intervention modal
└── public/               # Static assets
\`\`\`

## Educational Value

This project demonstrates:
- Applying ethical frameworks (VSD) to real design problems
- Using technical skills for user advocacy
- Balancing business goals with user wellbeing
- Implementing informed consent in UX

## Future Enhancements

- Browser extension version for real e-commerce sites
- A/B testing framework to measure impact
- Customizable investment scenarios
- Multi-language support
- Accessibility improvements (WCAG AAA)

## Credits

**Designer & Developer**: Yiduo (Ross) Learned  
**Framework**: Value Sensitive Design  
**Inspiration**: The need to design technology that serves users, not exploits them

## License

This is a portfolio/educational project demonstrating VSD principles.

---

**Note**: This is a simulation for demonstration purposes. No actual purchases or financial transactions are processed.
