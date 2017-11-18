---
layout: page
title: Scrivener
created_at: 2015-12-25 12:23
permalink: /scrivener/
comments: true
sharing: true
footer: true
sidebar: true
date: 2015-12-25 12:23
modified_at: 2015-12-25 12:23
---

**Contents**

* TOC
{:toc}


## Setting Scrivener Up

Keys:

* `⌘` Command (Windows Key on Win32)
* `⌃` Control
* `⎋` Escape
* `⌥` Option/Alt
* `⇧` Shift

### Clear the Pitch

* `⌘-R` Remove the Ruler  
* `⇧⌘-R` Remove Format Bar 
* `⌥⌘-I` Remove Inspector   (or use full-screen)
* `⌥⌘-B` Remove Binder      (or use full-screen)
* `⌥⌘-F` Full Screen       

### Typing

* `⌃⌘-R` Thesuarus 
* `⌥⌘-=` Split Screen Horizontal (reverse `⌘-'`)
* `⇧⌘-*`Insert Comment  (exit `⎋`)

### Project 

* `⇧⌘-T` Project Targets Panel
* `⌥⇧⌘-S` Project Statistics
* `⌥⌃⌘-S` Text Statistics

### Revision

<blockquote><p>Before we come to the review process let’s make sure we’re in a failsafe position to begin the daunting task of rewriting our book. Honest revision requires courage and ruthlessness.</p>
<div><small>Hewson, David (2011-07-28). <em>Writing a Novel with Scrivener</em>. (Kindle Locations 685-686). Kindle Edition.</small></div>
</blockquote>

* `⌘-5` Snapshot the current document, select all documents to revise and snapshot. (Also think Github tagging)
* `⌘-[` `⌘-]` (Previous/Next Change when in Compare mode)
 
## Tracking Writing Progress

Here's a way of capturing writing progress. The gist below will build the log. Depending on your approach, you may either want to have multiple crons running, or put this within a larger script. The commented portion above the cron is an example of the output of the cron.

<script src="https://gist.github.com/Merovex/38a5d12dcf043be97c9e.js"></script>

## Marking TODOs in Text

The Format/Inline Annotation command is designed for just this sort of thing. Anything you type within them will be automatically stripped out when you compile, by default. Chapter 18 goes over all of the various markings that are available, and how to search for them in the future.

Also documented in that chapter is the comments feature. If you want to simply highlight the text and "tag" it, that might work better. 

<div class="alert alert-info" role="alert">
  <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
  <strong>Tip:</strong> How insert a TODO:
  <ol>
    <li>Highlight the problem area</li>
    <li>Make a Comment with <strong>⇧⌘-8</strong></li>
    <li>Type in "TODO //" and then describe the problem. (or TK //, etc.)</li>
  </ol>
</div>

Use a saved search collection that checks for "TODO //". The slashes keep the phrase unique, and they also give me an effective "Done" system (if I’m not deleting it outright). You can use other symbols (e.g. "TODO -/") for Low Priority, etc.

This system also lets you categorise things a bit. "TODO /POST/" might only be spots that I’m concerned about the final appearance of, after I compile. Those I might not delete, if I need to review the formatting in that tricky area every time.

So the trick to getting your "Dynamic To-Do List" is to search for your tag, then select everything in the search results list and switch to Scrivenings mode. Now you can use that Comments sidebar column to locate TODO markers, click on them to scroll to the spot and address them. 

<div class="alert alert-info" role="alert">
  <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
  <strong>Note:</strong> You can use <strong>⌘-0</strong> and <strong>⌘-9</strong> in that sidebar to collapse/expand all notes, respectively).</div>


## Better Collaboration with Editor Who Uses MS Word

Sync content to a Dropbox folder as RTF. The comments from Scrivener are added. The Editor using MS Word would make comments as per that application. Then, they are Merged back. The MS Word comments appear as Inspector comments.

<div class="alert alert-warning" role="alert">
  <span class="fa fa-exclamation-triangle" aria-hidden="true"></span>
  <strong>Warning!</strong> The Editor must save the files as RTF, not as DOC or DOCX.
</div>

