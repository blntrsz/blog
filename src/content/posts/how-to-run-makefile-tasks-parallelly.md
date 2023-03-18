---
title: "How to run Makefile tasks parallelly"
description: "This article explains how two tasks can be run parallelly from a Makefile"
pubDate: "Jul 08 2022"
heroImage: "/placeholder-hero.jpg"
---

You have created the following `Makefile` before:

```
one:
  echo one

two:
  echo two

parallel: one two
```

Maybe you were clever and did the following to achieve parallel tasks:

```
parallel:
  echo one & \
  echo two
```

But both of them will fail when it comes to long running tasks. But if we run `make --help` there's an interesting flag we should look into:

```
-j [N], --jobs[=N]    Allow N jobs at once; infinite jobs with no arg.
```

With that we can run from the command line to run task `one` and `two`:

```
make -j one two
```

...or even better, stick it into the Makefile to make it reusable:

```
one:
  echo one

two:
  echo two

parallel:
  make -j one two
```
