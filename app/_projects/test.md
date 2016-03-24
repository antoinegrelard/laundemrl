---
layout: project
title: Dis-moi <br/> Dix mots
type: projets
image: http://lab.laundemorel.fr/images/dmdm_2x.gif
permalink: /test/

text-block_1:
  title: "Contexte."
  content: "Organisée chaque année autour du 20 mars, la Semaine de la langue française et de la Francophonie est le rendez-vous des amoureux des mots en France comme
  à l’étranger."

video-block:
  videoID: 148872823
  title: "Champagné :"
  desc: "n. m. Employé au Congo.<br/>Personne d’influence, aux nombreuses relations."
  alignTop: false
  reverseOrder: false

text-block_2:
  title: "Réalisation"
  content: "Motion design mettant en mouvement des éléments vectoriels et typographiques, réalisé sur After Effects."

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
    title: Concept
    content: "Le but est de créer un genre de miroir interactif mis en place uniquement lors des portes ouvertes 2016. Il permettrait aux visiteurs de se divertir et d'être acteurs au sein de ce projet."
  -
    title: Fonctionnement
    content: "Le but est de créer un genre de miroir interactif mis en place uniquement lors des portes ouvertes 2016. Il permettrait aux visiteurs de se divertir et d'être acteurs au sein de ce projet."

pagination:
  previous: tac
  next: tic

---

{% include text-block.html title=page.text-block_1.title content=page.text-block_1.content %}

{% include video-block.html videoID=page.video-block.videoID title=page.video-block.title desc=page.video-block.desc alignTop=page.video-block.alignTop reverseOrder=page.video-block.reverseOrder %}

{% include text-block.html title=page.text-block_2.title content=page.text-block_2.content %}

{% include gallery.html gallery=page.gallery %}

<!-- {% include know-more.html more=page.text-more %} -->

{% include pagination.html pagination=page.pagination %}