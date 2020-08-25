<?php

return function ($page) {

  // fetch the basic set of pages
  $projects = $page->children()->listed()->flip();

  // fetch all tags
  $tags = $projects->pluck('tags', ',', true);

  // add the tag filter
  if($tag = param('tag')) {
    $projects = $projects->filterBy('tags', $tag, ',');
  }

  // apply pagination
  $projects   = $projects->paginate(12);
  $pagination = $projects->pagination();

  return compact('projects', 'tags', 'tag', 'pagination');

};



?>