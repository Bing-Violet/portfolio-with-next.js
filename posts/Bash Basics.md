---
title: 'Bash Basics'
date: 'July 22, 2023'
excerpt: 'This is my bash notes.'
cover_image: '/images/posts/bash.png'
alt: 'image'
tags: ['linux', 'bash']
---

## Shell Patterns:
Globbing is for file patterns in Bash. Globbing is different from Regular Expressions, which is language specific.

#### Basic globbing includes but not restricted to:
- `*` matches zero or more characters

- `?` matches any single character

- `[...]` matches any of the characters listed

#### Extended globbing (must be enabled with shopt +s extglob):

- ?(patterns): matches zero or one occurrences of pattern

- *(patterns): matches zero or more occurrences of pattern

- +(patterns): matches one or more occurrences of pattern

- @(patterns): matches one occurrence of pattern

#### Examples:

- `ls *.txt`

- `ls ?(e).txt` (note this won’t work without running shopt +s extglob)

- `ls +(e).txt`

## cut:
- `cut` allows you to filter out fields, based on a field separator: `cut -d : -f 1 /etc/passwd`

Use `awk` for more advanced options. But cut is an internal command which is faster, so we should only use awk when cut is not powerful enough.

Like many other commands, cut works based on Internal Field Separators (IFS) which is space by default. We need to specify IFS if it’s not space.

## grep:
`grep` is an external command that helps you filter text.

When using `grep`, it is recommended to put the text pattern you’re searching for between single quotes to avoid interpretation by shell:

```bash
grep `root` *
ps aux | grep 'ssh'
We use grep with regular expression.
```

Useful flags includes `-v` (not include) `-r` (recursive).`-l` (list) `-A` (line after) `-B` (line before)

```bash
ps aux | grep 'cron' | grep -v 'grep'
grep 'root' * //searches occurences of text root in files
grep 'root' * 2>/dev/null //redirecting errors to null device so errors are not displayed
grep -l 'root' * 2>/dev/null //returns a list
grep -A 1 -B 5 'root' * 2>/dev/null // returns 1 line after and 5 lines before the result
```

## sed:
`sed` is the stream editor which allows you to edit files even if no full screen is availa`le which may not be relevant. sed can be really powerful but we only need to know the basics.

```bash
sed -i 's/bot/bet/' sample.txt // replaces bot with bet in sample.txt, only the first occurence in a line would be replaced
sed -i 's/bot/bet/g' sample.txt // g stands for global which botbot would become betbet instead of betbot
```

We can also combine sed with a for loop to manipulate multiple text files .

## awk:
Similar to sed , `awk` is an old and powerful utility that is useful to filter text.

```bash
awk -F : '{ print $4 }' /etc/passwd
awk -F : '/student/ { print $4 }' /etc/passwd
awk -F : '$3 < 999 { print $1 }' /etx/passwd
```
