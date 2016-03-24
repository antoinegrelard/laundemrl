---
layout: project
title: "Le titre <br/> du projet"
image: http://lab.laundemorel.fr/images/dmdm_2x.gif
permalink: /styleguide/

text-block_1:
  title: "Un bloc de texte"
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

video-block:
  videoID: 148872823
  title: "Ton titre :"
  desc: "Ta description<br/>Sur plusieurs lignes ou pas."
  alignTop: false
  reverseOrder: false

video-block_2:
  videoID: 148872823
  title: "Ton titre :"
  desc: "Ta description<br/>Sur plusieurs lignes ou pas."
  alignTop: true
  reverseOrder: false

video-block_3:
  videoID: 148872823
  title: "Ton titre :"
  desc: "Ta description<br/>Sur plusieurs lignes ou pas."
  alignTop: false
  reverseOrder: true

video-block_4:
  videoID: 148872823
  title: "Ton titre :"
  desc: "Ta description<br/>Sur plusieurs lignes ou pas."
  alignTop: true
  reverseOrder: true

text-block_2:
  title: "Un autre bloc de texte"
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

gallery:
  - 
    type: img
    src: http://lab.laundemorel.fr/images/dmdm_2x.gif
  - 
    type: video
    src: 148872823
  - 
    type: img
    src: http://lab.laundemorel.fr/images/dmdm_2x.gif
  - 
    type: img
    src: http://lab.laundemorel.fr/images/dmdm_2x.gif

text-more:
  -
    title: Lorem Ipsum
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  -
    title: Dolor sit amet
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat."

pagination:
  previous: tac
  next: tic

---

{% include text-block.html title=page.text-block_1.title content=page.text-block_1.content %}

{% include video-block.html videoID=page.video-block_3.videoID title=page.video-block_3.title desc=page.video-block_3.desc alignTop=page.video-block_3.alignTop reverseOrder=page.video-block_3.reverseOrder %}

{% include video-block.html videoID=page.video-block_2.videoID title=page.video-block_2.title desc=page.video-block_2.desc alignTop=page.video-block_2.alignTop reverseOrder=page.video-block_2.reverseOrder %}

{% include video-block.html videoID=page.video-block_4.videoID title=page.video-block_4.title desc=page.video-block_4.desc alignTop=page.video-block_4.alignTop reverseOrder=page.video-block_4.reverseOrder %}

{% include video-block.html videoID=page.video-block.videoID title=page.video-block.title desc=page.video-block.desc alignTop=page.video-block.alignTop reverseOrder=page.video-block.reverseOrder %}

{% include text-block.html title=page.text-block_2.title content=page.text-block_2.content %}

{% include know-more.html more=page.text-more %}

{% include gallery.html gallery=page.gallery %}

{% include pagination.html previous=page.pagination.previous next=page.pagination.next %}