# Video Asset Registry

All video files referenced by the Hontal landing page.

**Drop files into:** `public/videos/`  
**No code changes needed** — filenames are hardcoded. Replace the file, the page updates.

---

## V1 Launch (Required)

| Filename | Status | Where used |
|----------|--------|------------|
| `demo-overview.mp4` | **Required** | Homepage — autoplay product demo |

## Post-V1 (Optional)

| Filename | Status | Where used |
|----------|--------|------------|
| `customer-story.mp4` | Optional | Case study section — Kencana Lima testimonial |
| `mobile-app.mp4` | Optional | Features section — driver mobile app walkthrough |

---

## demo-overview.mp4

**Length:** 45–60 seconds  
**Resolution:** 1920 × 1080 (1080p)  
**Frame rate:** 30fps  
**Format:** MP4, H.264 codec  
**Audio:** None required — designed for silent autoplay  
**File size target:** Under 10MB

### Recommended scene sequence

| # | Scene | Duration | Notes |
|---|-------|----------|-------|
| 1 | Dashboard — Business Health Score visible on screen | 5s | Start here, establishes credibility |
| 2 | Navigate to Dispatch Board — orders visible | 5s | Show populated list, not empty state |
| 3 | Create or assign a new order | 8s | Core action loop |
| 4 | Assign driver from dropdown | 5s | Simple interaction, clear outcome |
| 5 | Map view — driver pins, route lines | 8s | Most visually distinctive screen |
| 6 | Customer Intelligence dashboard | 8s | Show segment breakdown (New, Active, At-Risk) |
| 7 | Business Health Score detail — dimension breakdown | 7s | Communicates depth |
| 8 | Executive Report or trend chart | 5s | Data = trust |
| 9 | Return to dashboard — Hontal wordmark visible | 5s | Close on brand |

### Compress with ffmpeg

```bash
ffmpeg -i raw-demo.mp4 \
  -c:v libx264 -crf 23 -preset slow \
  -vf scale=1920:1080 \
  -an \
  -movflags +faststart \
  public/videos/demo-overview.mp4
```

### Compress with HandBrake (GUI)

- Preset: Fast 1080p30
- Audio: None
- Web optimized: On

---

## customer-story.mp4

**Length:** 90–120 seconds  
**Resolution:** 1920 × 1080  
**Frame rate:** 30fps  
**Format:** MP4, H.264  
**Audio:** Required — testimonial speaker on camera  
**Subtitles:** Indonesian subtitles burned in, or provide separate `.vtt` file

### Recommended structure

1. Speaker introduction — name, role, business name (30s)
2. Before Hontal — what the problem was (30s)
3. After Hontal — specific outcomes (45s)
4. Closing — quote or recommendation (15s)

**Note:** Keep the Kencana Lima quote verbatim: *"Digunakan setiap hari dalam operasional."*

---

## mobile-app.mp4

**Length:** 30–45 seconds  
**Resolution:** 1080 × 1920 (portrait, 9:16)  
**Frame rate:** 30fps  
**Format:** MP4, H.264  
**Audio:** None required

### Recommended sequence

1. Driver receives order notification
2. Opens route in Hontal driver app
3. Marks delivery as completed
4. Moves to next stop
