# Starter Mini App

A simple, ready-to-use starter template for building Farcaster Mini Apps with Next.js.

Assets generated using [mini app asset generator](https://www.miniappassets.com/)

## Features

✅ Next.js 15 with App Router  
✅ TypeScript & Tailwind CSS  
✅ Pre-configured Farcaster manifest (`/.well-known/farcaster.json`)  
✅ Starter assets (icon, splash, hero images)  
✅ Ready to deploy on Vercel

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/patnir/starterminiapp.git my-miniapp
cd my-miniapp
npm install
```

### 2. Customize Your Mini App

**Update the manifest** at `public/.well-known/farcaster.json`:

- Replace `starterminiapp.com` with your domain throughout the file
- Update `name`, `subtitle`, and `description` to match your app
- Change `primaryCategory` and `tags` to fit your use case
- Update `splashBackgroundColor` if desired
- Keep the asset URLs pointing to `/icon.png`, `/splash.png`, `/hero.png` (or update if you change asset names)

**Replace the assets** in `/public`:
- `icon.png` - 1024×1024px PNG (app icon)
- `splash.png` - 200×200px (loading screen)
- `hero.png` - 1200×630px (promotional image)

Tip: Use [miniappassets.com](https://www.miniappassets.com/) to generate properly sized assets

### 3. Update package.json

Replace the repository information:

```json
"name": "your-miniapp-name",
"repository": {
  "type": "git",
  "url": "https://github.com/yourusername/your-repo.git"
},
"homepage": "https://your-domain.com"
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy

Deploy to Vercel (or your preferred hosting):

```bash
npm run build
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/patnir/starterminiapp)

### 6. Verify Domain Ownership

After deploying:

1. Ensure your manifest is accessible at `https://your-domain.com/.well-known/farcaster.json`
2. Use [Warpcast's Mini App Manifest Tool](https://warpcast.com/~/developers/mini-apps) to verify domain ownership
3. Sign the manifest with your wallet to generate `accountAssociation` fields
4. Copy the generated values back into your `farcaster.json` file
5. Redeploy your app

For Base Build:
1. Use the [Base Build Account Association tool](https://www.base.dev/preview?tab=account)
2. Enter your domain and verify
3. Update the `baseBuilder.allowedAddresses` field in your manifest

## Project Structure

```
simple-miniapp/
├── app/              # Next.js app router pages
├── public/
│   ├── .well-known/
│   │   └── farcaster.json   # Mini app manifest
│   ├── icon.png
│   ├── splash.png
│   └── hero.png
├── package.json
└── README.md
```

## Resources

- [Farcaster Mini Apps Documentation](https://miniapps.farcaster.xyz/docs)
- [Base Build Documentation](https://docs.base.org/mini-apps)
- [Mini App Asset Generator](https://www.miniappassets.com/)
- [Warpcast Developer Tools](https://warpcast.com/~/developers)

## License

MIT
