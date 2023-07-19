---
title: 'Unshallowing a Repository'
date: 'July 19, 2023'
excerpt: 'This is a quick note on how to Unshallow a Repository'
cover_image: '/images/posts/git-logo-long.png'
alt: 'image'
tags: ['Git']
---

## Background

When cloning large code bases like Jira or Confluence, use `git clone XXXXXXXX  —depth 1` to only clone master branch to minimise the cloning time otherwise it may time out. The step above would change the git config to only fetch master which we can inspect with `git config -l .` We would need to change it after the initial cloning, otherwise we won't be able to pull other branches from remote.

## Operational Steps

1. Modify Git Config
```bash
git config remote.origin.fetch “+refs/heads/*:refs/remotes/origin/*”
```
to change the refs from `remotes/origin/master` to `remotes/origin/*`

2. Unshallow

```bash
git fetch —unshallow
git fetch origin
```

The commands above should fetch all remote branches.
