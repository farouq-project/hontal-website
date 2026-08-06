# Video Assets

Drop video files here. No code changes required — the website references them by filename.

## V1 Launch (Required)

| File | Status | Description |
|------|--------|-------------|
| `demo-overview.mp4` | **Required** | Product demo video for the homepage |

## Future (Not required for V1)

| File | Status | Description |
|------|--------|-------------|
| `customer-story.mp4` | Optional | Kencana Lima customer testimonial video |
| `mobile-app.mp4` | Optional | Mobile experience demo (driver app) |

---

## demo-overview.mp4 Spec

**Length:** 45–60 seconds  
**Resolution:** 1920×1080 (1080p)  
**Frame rate:** 30fps  
**Format:** MP4, H.264 codec  
**Audio:** None required (silent autoplay)  
**File size target:** Under 10MB (compress with HandBrake or ffmpeg)

### Recommended sequence

| # | Scene | Duration |
|---|-------|----------|
| 1 | Dashboard overview — Business Health Score visible | 5s |
| 2 | Create new order on Dispatch Board | 8s |
| 3 | Assign driver | 5s |
| 4 | Route optimization on map | 8s |
| 5 | Driver live tracking from dispatcher view | 7s |
| 6 | Customer Intelligence — segmentation dashboard | 8s |
| 7 | Business Health Score detail | 7s |
| 8 | Executive Report | 5s |
| 9 | Close on dashboard — Hontal wordmark visible | 5s |

### Compress command (ffmpeg)

```bash
ffmpeg -i raw-demo.mp4 -c:v libx264 -crf 23 -preset slow -vf scale=1920:1080 -an demo-overview.mp4
```
