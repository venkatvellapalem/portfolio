---
title: "Setting Up a Home SIEM with Wazuh: What I Learned"
date: "2025-09-05"
description: "A practical guide to deploying Wazuh SIEM at home for real-world threat detection experience — without an enterprise budget."
tags: ["SIEM", "Wazuh", "Linux", "blue team", "homelab"]
---

# Setting Up a Home SIEM with Wazuh: What I Learned

You don't need an enterprise environment to get hands-on with SIEM (Security Information and Event Management). I deployed **Wazuh** on a Linux machine at home managing two endpoints. Here's everything I learned.

## Why Wazuh?

- Free and open source
- Full SIEM capabilities: log analysis, FIM, vulnerability detection, compliance
- Active community and good documentation
- Can scale from homelab to production

---

## My Setup

```
Wazuh Manager (Linux VM) ← collects from →
  Agent 1: Main laptop (Ubuntu)
  Agent 2: Windows machine
```

The manager runs the Wazuh server, Elasticsearch, and Kibana (the dashboard).

---

## Installation

### Manager (on Ubuntu Server)

```bash
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh
sudo bash ./wazuh-install.sh -a
```

This installs everything. The dashboard will be at `https://your-ip:443`.

### Agent (on endpoint)

```bash
# Add Wazuh repo, then:
sudo apt install wazuh-agent
sudo WAZUH_MANAGER='YOUR_MANAGER_IP' systemctl start wazuh-agent
```

---

## What I Configured

### File Integrity Monitoring (FIM)
FIM watches critical directories and alerts on any modification.

```xml
<!-- In /var/ossec/etc/ossec.conf -->
<syscheck>
  <directories check_all="yes">/etc,/usr/bin,/home</directories>
</syscheck>
```

Any unauthorized change to `/etc` triggers an alert — useful for detecting persistence mechanisms.

### Custom Rules
I wrote rules to monitor browser activity and flag unusual patterns:

```xml
<rule id="100001" level="7">
  <if_sid>5715</if_sid>
  <match>tor|.onion</match>
  <description>Possible Tor browser usage detected</description>
</rule>
```

---

## What I Detected in the First Week

Running a SIEM on your own network is eye-opening:

- **SSH brute force attempts** — my VPS was getting hammered daily
- **Unusual outbound connections** — flagged a misconfigured app phoning home
- **Failed sudo attempts** — caught a misconfigured script

---

## Key Takeaways

1. **False positives are real** — tune your rules carefully or alerts become noise
2. **Log volume is huge** — plan your storage accordingly
3. **Correlation is everything** — single events mean little; patterns mean threats

---

## Resources

- [Wazuh Documentation](https://documentation.wazuh.com)
- Wazuh has a free training course on their website
- TryHackMe has Wazuh-specific rooms worth completing

If you're building a homelab and want real blue team experience, a SIEM is the best starting point.

`> build the lab, break things, learn everything`
