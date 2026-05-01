## What's happening

Your Cloudflare Pages build is running `bun install --frozen-lockfile` (Bun's default in CI when a `bun.lockb` is present). That mode refuses to install if `package.json` and `bun.lockb` are even slightly out of sync — which is what the "lockfile had changes, but lockfile is frozen" error means.

Your repo currently has BOTH lockfiles committed:
- `bun.lockb` (Bun)
- `package-lock.json` (npm)

Having two lockfiles is the root cause of the drift — they get updated by different tools at different times and inevitably disagree with `package.json`.

## Recommendation: standardize on Bun

Lovable's environment uses Bun (see `bunfig.toml`), so the cleanest fix is to keep Bun and drop npm's lockfile.

### Changes I'll make

1. **Regenerate `bun.lockb`** by running `bun install` against the current `package.json`, so the lockfile matches dependencies exactly.
2. **Delete `package-lock.json`** so only one lockfile exists in the repo.
3. **Add a short note** (no config change needed) — Bun already reads `bunfig.toml`.

These changes will be auto-pushed to your connected GitHub repo by Lovable's two-way sync, so Cloudflare Pages will pick them up on the next build.

### Cloudflare Pages build settings to use

In your Cloudflare Pages project → Settings → Builds & deployments:

- **Build command:** `bun run build`
- **Install command (if shown separately):** `bun install` (NOT `bun install --frozen-lockfile`)
- **Build output directory:** `dist` (TanStack Start with Cloudflare adapter — verify after first successful build; it may be `.output/public` depending on adapter version)
- **Environment variable:** add `NODE_VERSION = 20` (Bun still needs Node available for some toolchain bits)

### Should you use `bun install` or `npm install`?

**Use `bun install`.** Reasons:
- `bunfig.toml` is already in the repo and configured for Bun.
- Lovable generates/updates `bun.lockb`, so npm in CI would constantly fight it.
- Bun is significantly faster on Cloudflare's build runners.

If for any reason you'd rather use npm on Cloudflare, tell me and I'll do the inverse: delete `bun.lockb` + `bunfig.toml`, keep `package-lock.json`, and you'd set the build command to `npm ci && npm run build`. But I don't recommend it.

## Technical details

- `bun install` (without `--frozen-lockfile`) updates the lockfile to match `package.json`, then installs. This is what we need to run once to resync.
- Cloudflare Pages auto-detects Bun when `bun.lockb` is present and switches to frozen mode. The fix is making sure the committed lockfile is in sync — not changing CI flags.
- After this, every time Lovable adds/removes a dependency it will regenerate `bun.lockb`, the change pushes to GitHub, and Cloudflare's next build will succeed.

## After approval I will

1. Run `bun install` to regenerate `bun.lockb`.
2. Delete `package-lock.json`.
3. Confirm both lockfile state and that no other config needs touching.

You then trigger a new Cloudflare Pages deploy (or just push — it'll auto-build).