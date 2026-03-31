---
title: "My First CTF Win: How We Took 1st Place at MITS"
date: "2026-01-20"
description: "A breakdown of the strategies and challenges we solved to win the CTF competition at MITS in January 2026."
tags: ["CTF", "forensics", "writeup"]
---

# My First CTF Win: How We Took 1st Place at MITS

In January 2026, our team from MITS took **first place** at the campus CTF competition. Here's a breakdown of how we approached the challenges and what I personally worked on.

## The Competition Format

The CTF ran for 6 hours and had challenges across multiple categories:

- Web exploitation
- Digital forensics
- Cryptography
- OSINT
- Miscellaneous

I focused primarily on forensics and OSINT — my strongest areas.

---

## Challenge: Hidden in Plain Sight (Forensics)

This was a steganography challenge. We were given a PNG image and told that a flag was hidden inside.

**My approach:**

1. First, I ran `file` to confirm the file type
2. Checked metadata with `exiftool`
3. Used `steghide` to attempt extraction
4. Tried `zsteg` for LSB steganography

```bash
zsteg challenge.png -a
```

The flag was embedded in the LSB (Least Significant Bit) of the red channel. Classic!

**Flag:** `FLAG{lsb_is_everywhere}`

---

## Challenge: The Deleted Evidence (Forensics)

We were given a disk image and had to recover deleted files to find the flag.

**Tools used:**
- Autopsy for disk analysis
- `strings` for quick scanning
- `foremost` for file carving

```bash
foremost -i disk.img -o recovered/
```

Found a deleted `.txt` file in the recovered directory containing the flag.

---

## Key Takeaways

- **Enumerate first** — always run multiple tools before assuming nothing is there
- **Know your tools** — `zsteg`, `steghide`, `binwalk`, `foremost` are your best friends
- **Collaborate** — our team divided categories based on strengths, which saved time

---

## What's Next

Planning to solve more CTFs on TryHackMe and PicoCTF to sharpen skills before the next competition. The grind continues.

`> keep hacking, keep learning`
