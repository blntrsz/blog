---
title: "Revert a bad rebase or force push"
description: "How to get back your changes from a rebase without rewriting the whole dang thing? How to get back from a horrible force push without rewriting the whole codebase? We will go through it in this article"
pubDate: "Mar 29 2023"
updatedDate: "Mar 29 2023"
tags:
  - git
---

Let's considet a couple of opsies that I think we all experienced in our carier, unless to avoid rebase wholeheartedly.

# "I rebased back to my previous commit but it turned out I need those changed and typing it out again would take a whole day"

Git stores all the "moves" that happend in your local git repository. A "move" is when the tips of branches and other references were updated (so e.g. rebase or new commit). Running `git reflog` shows us something like this:

```
97b72ce (HEAD -> main, origin/main) HEAD@{0}: commit: add BlogList style to tags
20affa7 HEAD@{1}: commit: add docker tag; smaller gap
21d098a HEAD@{2}: commit: fix hidden timestamp
158d3a4 HEAD@{3}: commit: hide date under small
...
```

On the left side we see what happend and on the right side we see the hash and the HEAD reference `HEAD@{N}` where `N` indicated how many moves before that happend. To reset to that move, we can simply run:

```
git reset HEAD@{2}
```

And now we avoided the disaster, we safed one day of typing.

# "I force pushed to a PR and now many days of work have been lost"

Do not panic, there's a solution and it is pretty simple. On the PR we can checkout the force push:

```
person force-pushed the main branch from 7f1ee6c to cbdb543 2 minutes ago
```

Here the `cbdb543` has been replaced with the `7f1ee6c` hash, so let's revert this:

```
git reset --hard cbdb543
```

...and push it:

```
git push --force
```

...aaand we done! Catastropy has been resolved.
