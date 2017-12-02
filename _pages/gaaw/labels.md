---
permalink: /github-as-a-writer/labels
date: 2017-12-02 11:02:33
title: "GaaW: Label Groups"
---

## Introduction

We group labels by color, according to broad themes. Labels are consistent across repositories, except for a few language specific topics. This makes switching between projects easy, since you don’t need domain expertise in order to write an issue. New team members can learn the system once, and use it everywhere.

### Reader Feedback Form

These labels are used by my customer-feedback form, but otherwise speaks to problems or areas to improve.

Labels can easily be added via the script at the bottom of this page.

#### Problems

<button class="btn gh problems"><i class='fa fa-tag'></i> Odd</button>
<button class="btn gh problems"><i class='fa fa-tag'></i> Syntax</button>
<button class="btn gh problems"><i class='fa fa-tag'></i> Typo</button>
<br>
Issues that make the story feel broken.
* **Typo** Misspelling, punctuation, etc.
* **Syntax** Grammar or poor wording
* **Odd** A change from earlier in the story (e.g., character eye color change).
* Red: **#CC0000**

#### Reader Experience

Affect user’s comprehension, or overall enjoyment of the story.

<button class="btn gh experience"><i class='fa fa-tag'></i> Dull</button>
<button class="btn gh experience"><i class='fa fa-tag'></i> Unclear</button>
<button class="btn gh experience"><i class='fa fa-tag'></i> Weak</button>
<br>

* **Weak** Something happens in the story that is hard to believe or implausible.
* **Unclear** A passage is hard to read
* **Dull** A section is boring.
* Orange: **#FFCC33**

<button class="btn gh improvements"><i class='fa fa-tag'></i> Fix</button>
<button class="btn gh improvements"><i class='fa fa-tag'></i> Idea</button>
<br>
* **Fix** an better way
* **Idea** a suggestion
* Light Blue: **#66CCFF**

### Supporting Materials

<button class="btn gh feedback"><i class='fa fa-tag'></i> Docs</button>
<button class="btn gh additions"><i class='fa fa-tag'></i> Character</button>
<button class="btn gh additions"><i class='fa fa-tag'></i> Plot</button>
<button class="btn gh additions"><i class='fa fa-tag'></i> Setting</button>
<br>
* **Docs** Not a part of the story narrative, but supporting documentation. (#CC3399)
* **Character** Work to be done on a character (#33CC33)
* **Plot** Work to be done on the plot (#33CC33)

### Miscellaneous

<button class="btn gh pending"><i class='fa fa-tag'></i> Pending</button>
<button class="btn gh inactive"><i class='fa fa-tag'></i> Inactive</button>
<button class="btn gh mindless"><i class='fa fa-tag'></i> Chore</button>
<button class="btn gh mindless"><i class='fa fa-tag'></i> Todo</button>

* **Pending** Taking action, but need a few things to happen first. A feature that needs dependencies merged, or a bug that needs further data. (#FFCC00)
* **Inactive** No action needed or possible. The issue is either fixed, addressed better by other issues, or just out of product scope. (#CCCCCC)
* **Chore** Converting measurements, reorganizing folder structure, and other necessary (but less impactful) tasks. (#CCCCFF)

```javascript

/*
  Go on your labels page (https://github.com/user/repo/labels)
  Edit the following label array
  or
  Use this snippet to export github labels (https://gist.github.com/MoOx/93c2853fee760f42d97f)
  and replace it
  Paste this script in your console
  Press Enter!!
*/
[
  { name: "odd",       color: "CC0000"},
  { name: "syntax",    color: "CC0000"},
  { name: "typo",      color: "CC0000"},

  { name: "dull",      color: "FFCC33"},
  { name: "unclear",   color: "FFCC33"},
  { name: "weak",      color: "FFCC33"},

  { name: "fix",       color: "66CCFF"}, 
  { name: "idea",      color: "66CCFF"}, 

  { name: "docs",      color: "CC3399"}, 
  { name: "character", color: "33CC33"}, 
  { name: "plot",      color: "33CC33"}, 
  { name: "setting",   color: "33CC33"},

  { name: "pending",    color: "FFCC00"}, 
  { name: "won't fix",  color: "FFFFFF"}, 
  { name: "inactive",   color: "CCCCCC"}, 
  { name: "chore",      color: "CCCCFF"}, 
  { name: "todo",       color: "CCCCFF"}
].forEach(function(label) {
  addLabel(label)
})

function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.js-new-label-name-input').value = label.name
      element.querySelector('.js-new-label-color-input').value = '#' + label.color
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
    }
  })
  return flag
}

function addNewLabel (label) {
  document.querySelector('.js-new-label-name-input').value = label.name
  document.querySelector('.js-new-label-color-input').value = '#' + label.color
  document.querySelector('.js-details-target ~ .btn-primary').click()
}

function addLabel (label) {
  if (!updateLabel(label)) addNewLabel(label)
}

```
