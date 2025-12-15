# TajHouse Main - API Configuration

## Environment Variables Setup

The `.env.local` file has been created with:

```
PORT=5000
NEXT_PUBLIC_API_BASE_URL=https://api.tajera.net/api/v1
```

## Port Configuration

The website is configured to run on **port 5000**:
- Development: `npm run dev` (runs on http://localhost:5000)
- Production: `npm run start` (runs on port 5000)

## API Endpoints Used

1. **Projects API**: `${BASE_URL}/projects?lang=en`
2. **Contacts API**: `${BASE_URL}/contacts`

## Files Updated

- `package.json` - Updated scripts to use port 5000
- `next.config.js` - Added HTTPS image remote patterns for tajhouse.net
- `.env.local` - Created with port and API configuration
- `src/components/project.jsx` - Updated fallback URL from localhost to production

## Notes

- The contact component uses `process.env.NEXT_PUBLIC_API_BASE_URL` directly
- The project component has a fallback to `https://api.tajera.net/api/v1` if env var is not set
- Newsletter subscription uses Formspree (third-party service, no changes needed)
- Images are configured to load from both localhost (dev) and tajhouse.net (production)

