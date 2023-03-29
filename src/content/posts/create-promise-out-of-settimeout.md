---
title: "Create Promise out of setTimeout"
description: "I always forget how to make a awaitable Promise out of setTimeout. It it pretty useful for testing loading states to make e.g. 10 sec timeout to see how it will look like."
pubDate: "Mar 29 2023"
updatedDate: "Mar 29 2023"
tags:
  - typescript
---

I always forget how to make a awaitable Promise out of setTimeout. It it pretty useful for testing loading states to make e.g. 10 sec timeout to see how it will look like. (network throtting works fine as well, but sometimes it isn't enough).

```typescript
async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
```

And you can call it like this:

```typescript
async function fetchData(): Promise<Data> {
    await wait(10_000); // 10s
    const res = await fetch("");

    return res.json();
}
```
