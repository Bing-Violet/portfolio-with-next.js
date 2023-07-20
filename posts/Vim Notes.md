---
title: 'Vim Notes'
date: 'July 20, 2023'
excerpt: 'This is my vim notes'
cover_image: '/images/posts/Vim.png'
alt: 'image'
tags: ['vim']
---

## Text Manipulation:

1. ctrl + c instead of esc

2. ci{ or ci[ to replace the content instead {} or []

3. / to search

4. :reg to inspect the history

5._ move to the first left word in a line

6. 0 move to the first space (including space) in a line

7. $ move to the last space in a line

8. D delete from right to the cursor

9. f to find in a line, ; and , to move to the previous/next match

10. zz to center the window

11. ctrl + u/d to move

12. { or } to move up and down by block

13. [[ or]]to move to the top or bottom

14. :h to use help the manual like :h motion

15. daw to delete a word, r to replace a character

16. yy to yank a line, p to paste. dd deletes and yanks a line

17. w to go to the next word, b to go to the previous word, e to move to the end

18. o: insert new line below line and go into insert mode O: insert new line above line and go into insert mode

```bash
set scrolloff=8
set number
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent

call plug#begin('~/.vim/plugged')

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

call plug#end()

packadd! doki-theme
syntax enable
colorscheme hatsune_miku
```
