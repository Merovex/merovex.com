---
layout: page
title: Book Production Process
date: 2014-11-29 10:14
modified_at: 2014-11-29 10:14
created_at: 2014-11-29 10:14
permalink: /book-production-process/
---

## Introduction

I've tinkered with a lot of different ways to manage my book production over the years. This is my effort to capture the process so I can stop screwing around. This is my effort to organize.

## Series Bible

The Series Bible will be a Git repository. It will include a directory for:

* Stories in the series
* Notebook with all the series data.

## Book Metadata

Most Git repository sites (e.g. Bitbucket, Github) use the "README.md" page as a signal to markup and publish the content. This is where basic information on the specific novel is kept:

* Characters
* Locations
* Plot Summaries (by character)

## Managing Book Development via Git

Why keep books in a version control tool? I discuss the rationale in [How I protect My Copyright](/articles/how-i-protect-my-copyright/). [Git](https://en.wikipedia.org/wiki/Git) is a distributed revision control system with an emphasis on speed, data integrity, and support for distributed, non-linear workflows. I'm fairly linear, but there are other strengths; such as remote hosting repositories. I can even snapshot a version within the same local computer should I want to store the repo on Dropbox.

### Overview

Repository Rules:

1. Repositories are private
1. Each book gets its own repository. This prevents branch & tag mis-match.
1. Book Repositories include the book series and sequence. For example "Bellicose" would be "PMS-01-Bellicose."

### Branching

The following terms will be used to mark branches:

* first - Original draft
* second - Second Draft
* editor - When incorporating feedback from Editor
* beta - When incorporating feedback from Beta readers
* master - Published branch

When a branch other than "Master" is complete, it will be merged into "Master." Whenever a branch is created or merged, Master will be tagged. There will be no tagging of a non-Master branch.

<pre><code class="language-bash">

git checkout -b /branch/ # Creates & switches to new branch
git checkout /branch/ # Switches to exisiting branch
git merge /branch/ # Merges branch into active branch

git log --pretty=oneline

</code></pre>

The "rake archive" command will sync to the remote repository the active branch. More on branching/merging is available at the [Git-SCM Branching/Merging page](http://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

### Tagging

Whenever a work is disseminated to an external entity (editor, Createspace, Kindle) or a new branch is created, then master is tagged. The "Master" branch is checked-out. The branch is tagged with the date, the destination is added as a memo. There are more tips on tagging at the [Git-SCM Tagging page](http://git-scm.com/book/en/v2/Git-Basics-Tagging).

<pre><code class="language-ruby">

git tag -l # Lists tags in alphabetical order
git tag -a v2014.11.29 -m 'Sending to Editor' or
git tag -a v2014.11.29-editor
git tag -a v2014.11.29-amazon
git tag -a v2014.11.29-beta
git show v2014.11.29

</code></pre>
