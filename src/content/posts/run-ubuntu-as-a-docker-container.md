---
title: "Run Ubuntu as a Docker Container"
description: "We will go though how to install and run ubuntu as a docker image"
pubDate: "Mar 26 2023"
updatedDate: "Mar 26 2023"
tags:
  - docker
---

Make sure docker is installed on your system. If not, check out the [install docs](https://docs.docker.com/engine/install/).

# Why would you want to run Ubuntu as a Docker image?

Mostly for testing, but you can play around with Linux commands and getting familiar with the Linux system. I mostly use it for testing my dotfiles config with ansible.

# Run process

To pull the latest `ubuntu` images run the following command:

```
sudo docker pull ubuntu
```

To run the docker image in interactive mode run the following:

```
sudo docker run -ti --rm ubuntu /bin/bash
```

It will start Ubuntu with the bash shell.
