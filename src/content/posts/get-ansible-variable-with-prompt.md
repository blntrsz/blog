---
title: "Get Ansible variable with prompt"
description: "Ansible is able to get the varialbe as an input that the user can type in"
pubDate: "Mar 25 2023"
updatedDate: "Mar 25 2023"
tags:
  - ansible
---

With the `vars_prompt` we can read user input to Ansible task.
My preferred use case for it is to handle dotfile management to use the same dotfiles for work and personal use, but with a variable, we can use different configurations or tasks:

```yaml
- hosts: localhost
  vars_prompt:
    - name: profile
      prompt: What is your profile? ('personal' or 'work')
      private: false
  pre_tasks:
    - name: Update Apt
      become: true
      ansible.builtin.package:
        update_cache: yes
        upgrade: yes
  tasks:
    - import_tasks: tasks/neovim.yml
```
