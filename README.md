# Base Mini App Starter

A simple, ready-to-use starter template for building Base Mini Apps with Next.js. Base Mini Apps run in the Farcaster ecosystem and are discoverable in the Base app.

Assets generated using [mini app asset generator](https://www.miniappassets.com/)

## Features

✅ Next.js 15 with App Router  
✅ TypeScript & Tailwind CSS  
✅ Pre-configured manifest (`/.well-known/farcaster.json`) for Base Build  
✅ Embed metadata for rich sharing in feeds  
✅ Starter assets (icon, splash, hero images)  
✅ Eruda mobile debugging console (optional)  
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

**Update embed metadata** in `app/layout.tsx`:

- Replace `starterminiapp.com` with your domain in the `fc:miniapp` metadata
- Update the `name`, `title`, and `description` fields
- Ensure image URLs point to your assets
- The embed controls how your app appears when shared in Base and Farcaster feeds

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

**Optional: Enable Eruda debugging console**

Eruda provides a mobile-friendly dev console for debugging your mini app inside Farcaster/Warpcast:

```bash
# Enable Eruda (useful for testing in mobile environments)
NEXT_PUBLIC_LOAD_ERUDA=true npm run dev
```

Or add to `.env.local`:
```
NEXT_PUBLIC_LOAD_ERUDA=true
```

⚠️ **Important**: Don't enable this in production! Only use for development/testing.

### 5. Deploy

Deploy to Vercel (or your preferred hosting):

```bash
npm run build
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/patnir/starterminiapp)

### 6. Verify Domain Ownership

After deploying:

1. Ensure your manifest is accessible at `https://your-domain.com/.well-known/farcaster.json`
2. Use the [Base Build Account Association tool](https://www.base.dev/preview?tab=account)
3. Enter your domain and sign with your wallet to generate `accountAssociation` fields
4. Copy the generated values back into your `farcaster.json` file and redeploy
5. Your `baseBuilder.allowedAddresses` should contain the wallet address you used for signing

**Note**: You can also use [Warpcast's Mini App Manifest Tool](https://warpcast.com/~/developers/mini-apps) for verification if needed.

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

## Manifest vs Embeds

Your mini app uses **two** types of metadata:

### 1. Manifest (`public/.well-known/farcaster.json`)
- **Purpose**: Defines your app's overall identity, capabilities, and configuration
- **Scope**: Domain-level (applies to your entire app)
- **Used for**: App discovery, search indexing, app store listings, verification

### 2. Embed Metadata (`app/layout.tsx`)
- **Purpose**: Controls how individual pages appear when shared in Base and Farcaster feeds
- **Scope**: Page-level (can be different per page/route)
- **Used for**: Rich embed cards in feeds, share previews, launch buttons

Both are required for a complete Base Mini App experience! The manifest establishes your identity, while embeds make your content shareable.

For more details, see the [Farcaster Manifest vs Embed Guide](https://miniapps.farcaster.xyz/docs/guides/manifest-vs-embed).

## Using the MiniApp Context

This starter includes a `MiniAppProvider` that lets any component access mini app context data. Use the `useMiniApp()` hook in any component:

```tsx
'use client';

import { useMiniApp } from './providers/miniAppProvider';

export default function MyComponent() {
  const { isInMiniApp, context, isLoading } = useMiniApp();

  if (isLoading) return <div>Loading...</div>;

  if (isInMiniApp && context) {
    // Access user data
    const { user, location, client } = context;
    
    return (
      <div>
        <p>Hello, @{user.username}!</p>
        <p>FID: {user.fid}</p>
        {user.pfpUrl && <img src={user.pfpUrl} alt="Profile" />}
      </div>
    );
  }

  return <div>Not in mini app context</div>;
}
```

**Available context data:**
- `isInMiniApp`: Boolean indicating if running as a mini app
- `context.user`: User profile (fid, username, displayName, pfpUrl, bio, location)
- `context.location`: Launch context (cast_embed, notification, launcher, etc.)
- `context.client`: Platform info (platformType, clientFid, added, safeAreaInsets)
- `context.features`: Available features (haptics, cameraAndMicrophoneAccess)
- `isLoading`: Whether the context is still being fetched

## Debugging in Mobile

This starter includes [Eruda](https://github.com/liriliri/eruda), a mobile-friendly dev console that's invaluable for debugging mini apps inside the Base app and Warpcast where you don't have access to browser dev tools.

To enable it, set the environment variable:
```bash
NEXT_PUBLIC_LOAD_ERUDA=true
```

When enabled, you'll see a floating debug button in your mini app that gives you access to:
- Console logs
- Network requests
- DOM inspector
- Local storage viewer
- And more

**Remember to disable it in production!** The provider automatically skips loading if the env var isn't set to `true`.

## Resources

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps)
- [Base Build Tools](https://www.base.dev/preview)
- [Farcaster Mini Apps Documentation](https://miniapps.farcaster.xyz/docs)
- [Mini App Asset Generator](https://www.miniappassets.com/)
- [Warpcast Developer Tools](https://warpcast.com/~/developers)
- [Eruda Documentation](https://github.com/liriliri/eruda)

## Author

Created by [@patnir](https://github.com/patnir)

## License

MIT
