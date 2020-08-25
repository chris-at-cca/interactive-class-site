<?php snippet('header') ?>

<h1><?= $page->title() ?></h1>
<ul class="projects">
	<?php foreach ($page->children() as $child): ?>
	<li class="title">
		<a href="<?= $child->url() ?>">
			<?= $child->title() ?>
			<?php if($image = $child->image()): ?>
				<div class="image-holder">
					<?= $child->image()->resize(600) ?>
				</div>
			<?php endif ?>
		</a>
		<span class="project-meta">
			<?php if($child->student()->isNotEmpty()): ?>
				<span class="student"><?= $child->student() ?></span>
			<?php endif ?>
			<?php if($child->class()->isNotEmpty()): ?>
				<span class="class"><?= $child->class() ?></span>
			<?php endif ?>
			<?php if($child->year()->isNotEmpty()): ?>
				<span class="year"><?= $child->year() ?></span>
			<?php endif ?>
			<?php if($child->link_url()->isNotEmpty()): ?>
				<a href="<?= $page->link_url() ?>" class="link"><?= $child->link_text() ?></a>
			<?php endif ?>			
		</span>
	</li>
	<?php endforeach ?>
</ul>	

<section class="tag-cloud">
  <ul class="tags">
    <?php foreach($tags as $tag): ?>
    <li>
      <a class="tag" href="<?= url($page->url(), ['params' => ['tag' => $tag]]) ?>">
        <?= html($tag) ?>
      </a>
    </li>
    <?php endforeach ?>
  </ul>
</section>

<?php snippet('footer') ?>