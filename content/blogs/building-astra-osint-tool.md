---
title: "Building Astra: A Social Media OSINT Tool for Investigators"
date: "2025-11-10"
description: "Why I built Astra, how it works, and what I learned developing a Python CLI OSINT tool from scratch."
tags: ["OSINT", "Python", "tools", "security"]
---

# Building Astra: A Social Media OSINT Tool for Investigators

OSINT (Open Source Intelligence) is one of the most powerful and underutilized skills in cybersecurity. I built **Astra** to solve a specific problem: law enforcement and investigators spending hours manually collecting public social media data that could be automated in minutes.

## The Problem

Manual social media investigation is:

- Time-consuming (hours per target)
- Inconsistent (human error in data collection)
- Hard to scale (can't run on multiple targets simultaneously)
- Poorly documented (no audit trail)

Astra solves all of these.

---

## What Astra Does

Astra is a Python CLI tool with two core modes:

**Passive Mode** — collects publicly available data without direct interaction
**Active Mode** — performs deeper enumeration with more direct queries

```bash
# Basic usage
python astra.py --target username --mode passive

# Active collection
python astra.py --target username --mode active --output report.json
```

---

## Architecture

The tool is structured around **platform modules** — each social media platform has its own collection module that can be enabled or disabled:

```
astra/
  core/
    collector.py
    parser.py
    report.py
  platforms/
    twitter.py
    instagram.py
    linkedin.py
  utils/
    rate_limiter.py
    logger.py
```

---

## Key Technical Decisions

### Rate Limiting
To avoid getting blocked, every platform module has configurable rate limiting. Requests are spread out with jitter to appear more human-like.

### Data Normalization
Each platform returns data in different formats. A normalization layer converts everything to a standard schema so reports are consistent regardless of source.

### Multi-OS Support
Astra is tested on Linux, macOS, and Windows. Dependencies are minimal and cross-platform.

---

## Lessons Learned

1. **API rate limits are brutal** — you have to design around them from day one
2. **Data normalization is harder than collection** — getting consistent schema across platforms took more time than the collectors themselves
3. **Logging everything matters** — investigators need an audit trail

---

## What's Next for Astra

- Adding more platforms (Reddit, TikTok)
- Export to PDF report format
- Web UI for non-technical users

If you're working on OSINT tooling or have feature requests, open an issue on the repo.

`> automate the boring parts, focus on the analysis`
