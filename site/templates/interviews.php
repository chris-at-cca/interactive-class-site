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
	</li>
	<?php endforeach ?>
</ul>	

<?php snippet('footer') ?>